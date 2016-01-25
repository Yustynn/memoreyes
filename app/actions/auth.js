import { FIREBASE, ACTION_TYPES } from '../misc/constants';

export const authListener = () => (dispatch, getState) => {
    FIREBASE.onAuth(authData => {
        if (authData) {
            console.log('uid: ', authData.uid, 'name: ', authData.google.displayName)
            dispatch({
                type: ACTION_TYPES.SET_USER,
                uid: authData.uid,
                name: authData.google.displayName
            });
        }
    })
}

// authListener already parses the actual authData from login attempt
export const attemptLogin = () => (dispatch, getState) => {
    dispatch({ type: ACTION_TYPES.ATTEMPT_LOGIN});
    FIREBASE.authWithOAuthPopup('google', (err, authData) => {
        if (err) console.error('Login Failed!', error);
        else console.log("Success! Logged in with: ", authData);
    })
}

// export const attemptLogin = function() {
//     return function(dispatch) {
//         FIREBASE.authWithOAuthPopup('google', (err, authData) => {
//             if (err) console.error('Login Failed!', error);
//             else console.log("Success! Logged in with: ", authData);
//         });
//     }
// }

export const logout = () => (dispatch, getState) => {
    FIREBASE.unauth();
}
