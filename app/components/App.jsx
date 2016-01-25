import React from 'react';

import Frame from './Frame';
import Main from './Main';

export default React.createClass({
    render: function() {
        return <Frame>
            <Main>
                { this.props.children }
            </Main>
        </Frame>
    }
})
