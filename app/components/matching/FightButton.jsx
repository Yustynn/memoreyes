import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return <Link to='/matching/request-fight' className='fight-button'>
            <img src='assets/arrow-orange.svg' />
            <span>Kick Their Ass</span>
        </Link>
    }
})
