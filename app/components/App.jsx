import React from 'react';
import { Link } from 'react-router'

import Frame from './Frame';
import Main from './Main';

export default React.createClass({
    render: function() {
        return <Frame>
            <Main>
                <Link to='/matching'>Matching</Link>
                { this.props.children }
            </Main>
        </Frame>
    }
})
