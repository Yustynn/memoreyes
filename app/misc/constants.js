import Firebase from 'firebase'

export const FIREBASE = new Firebase("https://memoreyes.firebaseio.com");

export const ACTION_TYPES = {
    ATTEMPT_LOGIN: 'attempt login',
    LOGOUT: 'logout',
    SET_USER: 'set user'
};
