import React from 'react';
import { render } from 'react-dom';
import { Redirect, Router, Route, Link } from 'react-router';


import Frame from './components/Frame';
import Main from './components/Main'
import Home from './components/home/Home'
import Matching from './components/matching/Matching';



const App = React.createClass({
    render: function() {
        return <Frame>
            <Main>
                <Link to='/home'>Home</Link>
                <Link to='/matching'>Matching</Link>
                { this.props.children }
            </Main>
        </Frame>
    }
})

render((
    <Router>
        <Redirect from='/' to='/home' />
        <Route path='/' component={ App }>
            <Route path='/home' component={ Home } />
            <Route path='/matching' component={ Matching }/>
        </Route>
    </Router>
), document.getElementById('app'));
