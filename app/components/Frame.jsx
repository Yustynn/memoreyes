import React from 'react';
import Main from './Main';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { FIREBASE } from '../misc/constants';
import { logout } from '../actions/auth';

function mapDispatchToProps(dispatch) {
    return {
        logout: function() { return dispatch(logout()) }
    }
}

const Frame = React.createClass({
    render: function() {
        return (
            <section id='frame'>
                <div className='cf'>
                    <Link to='/' id='logo'>memoreyes</Link>
                    <p onClick={ this.props.logout } id='user-greeting'>Hey, Yustynn.</p>
                </div>
                {this.props.children}
                <p id='footer'>made by yustynn</p>
            </section>
        );
    }
})

export default connect(null, mapDispatchToProps)(Frame);
