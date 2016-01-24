import React from 'react';
import ReactDOM from 'react-dom';

import Frame from './components/Frame';
import Main from './components/Main'
import Home from './components/home/Home'

ReactDOM.render(
    <Frame>
        <Main>
            <Home>
            </Home>
        </Main>
    </Frame>,
    document.getElementById('app')
);
