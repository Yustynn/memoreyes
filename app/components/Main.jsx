import React from 'react';

import DevTools from './DevTools'

export default React.createClass({
    render: function() {
        return <main className='home'>
            <DevTools />
            { this.props.children }
        </main>
    }
})
