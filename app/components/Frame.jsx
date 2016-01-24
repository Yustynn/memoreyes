import React from 'react';
import Main from './Main';

export default React.createClass({
    render: function() {
        return (
            <section id='frame'>
                <div className='cf'>
                    <p id='logo'>memoreyes</p>
                    <p id='user-greeting'>Hey, Yustynn.</p>
                </div>
                <Main />
                <p id='footer'>made by yustynn</p>
            </section>
        );
    }
})
