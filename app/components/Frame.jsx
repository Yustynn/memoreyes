import React from 'react';
import Main from './Main';
import { Link } from 'react-router'

export default React.createClass({
    render: function() {
        return (
            <section id='frame'>
                <div className='cf'>
                    <Link to='/' id='logo'>memoreyes</Link>
                    <p id='user-greeting'>Hey, Yustynn.</p>
                </div>
                {this.props.children}
                <p id='footer'>made by yustynn</p>
            </section>
        );
    }
})
