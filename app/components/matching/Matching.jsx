import React from 'react';
import { History } from 'react-router'

export default React.createClass({
    mixins: [ History ],
    goHome: function() {
        this.history.push('/home');
        // browserHistory.push('/home');
    },
    render: function() {
        return <a onClick={ this.goHome }>THIS IS THE MATCHING PAGE</a>
    }
})
