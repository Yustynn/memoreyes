import React from 'react';
import { connect } from 'react-redux'

import { attemptLogin } from '../../actions/auth';

const Login = React.createClass({
    onClick: function() {
        console.log('trying...')
        dispatch( attemptLogin() )
        console.log('Tried!')
    },
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

connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login;

function mapStateToProps(state) {
    console.log('loggin')
    return {attemptLogin: function(){ console.log('hey'); dispatch(attemptLogin()) }};
}

function mapDispatchToProps(dispatch) {
    return {
        attemptLogin: function(){ console.log('hey'); dispatch(attemptLogin()) }
    }
}
