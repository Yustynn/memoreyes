import Firebase from 'firebase';

import { FIREBASE, ACTION_TYPES } from '../misc/constants';
import history from '../misc/history'

var onlineUsersRef = new Firebase('https://memoreyes.firebaseio.com/onlineUsers/');
const newUserRef = onlineUsersRef.push();
newUserRef.onDisconnect().remove();

export const authListener = () => (dispatch, getState) => {
    FIREBASE.onAuth(authData => {
        if (authData) {
            const userRef = new Firebase('https://memoreyes.firebaseio.com/onlineUsers/' + authData.uid)
            newUserRef.set({ name: authData.google.displayName });
            console.log('uid: ', authData.uid, 'name: ', authData.google.displayName)
            dispatch({
                type: ACTION_TYPES.SET_USER,
                uid: authData.uid,
                name: authData.google.displayName
            });
            history.push('/matching')
        }
    })
}

// authListener already parses the actual authData from login attempt
export const attemptLogin = () => (dispatch, getState) => {
    dispatch({ type: ACTION_TYPES.ATTEMPT_LOGIN});

    FIREBASE.authWithOAuthPopup('google', (err, authData) => {
        if (err) console.error('Login Failed!', err);
        else console.log("Success! Logged in with: ", authData);
    })
}

export const logout = () => (dispatch, getState) => {
    FIREBASE.unauth();
    dispatch({ type: ACTION_TYPES.LOGOUT });
    newUserRef.remove();


    history.push('/')
}
