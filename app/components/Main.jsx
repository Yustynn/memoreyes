import React from 'react';

import Home from './home/Home'

export default React.createClass({
    render: function() {
        return <main className='home'>
            { this.props.children }
        </main>
    }
})
