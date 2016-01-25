import React from 'react';
import { connect } from 'react-redux'

import { attemptLogin } from '../../actions/auth';

function mapDispatchToProps(dispatch) {
    return {
        attemptLogin: function(){ dispatch(attemptLogin()) }
    }
}

const Login = React.createClass({
    render: function() {
        return <a onClick={ this.props.attemptLogin } id='login'>
                <span id='login-text'>log in</span>
                <img id='login-arrow' src='/assets/arrow.svg' />
                <img id='google-plus' src='/assets/g+.svg' />
                <br />
                <p id='login-text-subhead'>(or you won't be able to do anything)</p>
        </a>
    }
})

export default connect(null, mapDispatchToProps)(Login)
