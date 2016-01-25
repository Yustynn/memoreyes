import React from 'react';
import { render } from 'react-dom';
import { Redirect, Router, Route } from 'react-router';

import App from './components/App';
import Home from './components/home/Home'
import Matching from './components/matching/Matching';

render((
    <Router>
        <Redirect from='/' to='/home' />
        <Route path='/' component={ App }>
            <Route path='/home' component={ Home } />
            <Route path='/matching' component={ Matching }/>
        </Route>
    </Router>
), document.getElementById('app'));
