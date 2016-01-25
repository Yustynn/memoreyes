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


{
    user: NAME,
    game: {
        words: [],
        playerOne: {
            user: name,
            startMemorization: DateTime,
            endMemorization: DateTime,
            startRecall: DateTime,
            endRecall: DateTime
        },
        playerTwo: {
            user: name,
            startMemorization: DateTime,
            endMemorization: DateTime,
            startRecall: DateTime,
            endRecall: DateTime
        }
    }
}
