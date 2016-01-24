import React from 'react';
import Hero from './home/Hero'
import Login from './home/Login'


export default React.createClass({
    render: function() {
        return <main className='home'>
            <div className='wrapper'>
                <Hero />
                <Login />
            </div>
        </main>
    }
})
