import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../misc/reducer';

const createStoreWithThunk = applyMiddleware(thunk)(createStore);

export default createStoreWithThunk(reducer);
