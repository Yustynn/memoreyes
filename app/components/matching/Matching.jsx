import React from 'react';
import { Router, Route } from 'react-router';

import FightButton from './FightButton'
import Modal from './Modal'

export default React.createClass({
    render: function() {
        return <div>
            <h1>Online</h1>
            { this.props.children }
        </div>
    }
})
