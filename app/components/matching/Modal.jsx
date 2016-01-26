import React from 'react';

import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return <div id='modal-bg'>
            <div id='modal-front'>
                <h1>NAME OF PERSON</h1>
                <h2>Wants to Fight</h2>
                <div id='challenge-request-options'>
                    <Link to='/matching'><img src='/assets/cross.svg' /></Link>
                    <img src='/assets/tick.svg' />
                </div>
            </div>
        </div>
    }
})
