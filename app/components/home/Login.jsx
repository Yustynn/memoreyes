import React from 'react';

import { attemptLogin } from '../../actions/auth';

export default React.createClass({
    render: function() {
        return <a onClick={ attemptLogin } id='login'>
                <span id='login-text'>log in</span>
                <img id='login-arrow' src='/assets/arrow.svg' />
                <img id='google-plus' src='/assets/g+.svg' />
                <br />
                <p id='login-text-subhead'>(or you won't be able to do anything)</p>
        </a>
    }
})
