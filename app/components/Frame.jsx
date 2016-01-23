import React from 'react';
import Main from './main';

export default React.createClass({
    render: function() {
        return (
            <section id='frame'>
                <p id='logo'>memoreyes</p>
                <p id='login-info'>Hey, Yustynn.</p>
                <Main />
                <p>This is the footer.</p>
            </section>
        );
    }
})
