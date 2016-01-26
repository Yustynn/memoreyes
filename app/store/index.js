import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../misc/reducer';
import DevTools from '../components/DevTools'
// import Firebase from 'firebase';

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default finalCreateStore(reducer);
