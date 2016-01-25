import { Map } from 'immutable';

import { ACTION_TYPES } from './constants';
import initalState from '../store/initialState';

export default (state = initalState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ATTEMPT_LOGIN:
            return state;
        case ACTION_TYPES.SET_USER:
            console.log(action.name, 'login successful')
            const auth = Map({
                name: action.name,
                uid: action.uid
            });
            return state.set('auth', auth);
        case ACTION_TYPES.LOGOUT:
            return state.delete('auth');
        default:
            return state;
    }
}
