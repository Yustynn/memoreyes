import React from 'react';
import Hero from './Hero';
import Login from './Login';

export default React.createClass({
    render: function() {
        return <div className='wrapper'>
            <Hero />
            <Login />
        </div>
    }
})
