import React from 'react';
import { render } from 'react-dom';
import { Redirect, Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Home from './components/home/Home'
import PlayerList from './components/matching/PlayerList';
import Modal from './components/matching/Modal';

import store from './store';
import { authListener } from './actions/auth'
import history from './misc/history';

render((
    <Provider store={ store }>
        <Router history={ history }>
            <Route path='/' component={ App }>
                <IndexRoute component={ Home } />
                <Route path='/matching' component={ PlayerList }/>
                <Route path='/matching/request-fight' component={ Modal }/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));

store.dispatch( authListener() ); // continuously check for login
