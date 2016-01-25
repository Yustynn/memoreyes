import React from 'react';
import { render } from 'react-dom';
import { Redirect, Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Home from './components/home/Home'
import Matching from './components/matching/Matching';

import store from './store';
import { authListener } from './actions/auth'
import history from './misc/history';

render((
    <Provider store={ store }>
        <Router history={ history }>
            <Route path='/' component={ App }>
                <IndexRoute component={ Home } />
                <Route path='/matching' component={ Matching }/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));

store.dispatch( authListener() ); // continuously check for login
