import { ACTION_TYPES } from './constants';
import initalState from '../store/initialState';

export default (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.ATTEMPT_LOGIN: return state;
        case ACTION_TYPES.SET_USER: return state;
        default: return state;
    }
}
