import React from 'react';

import FightButton from './FightButton'

export default React.createClass({
    render: function() {
        return <div className='wrapper matching'>
            <h1>Online</h1>
            <p><span className='name'>SUPER NAME HERE </span><span className='status'>(STATUS HERE)</span></p>
            <p><span className='name'>SOME NAME HERE </span><span className='status'>(STATUS HERE)</span></p>
            <p><span className='name'>NAME HERE </span><span className='status'>(STATUS HERE)</span><FightButton /></p>
            <p><span className='name'>HERE BE NAMED </span><span className='status'>(STATUS HERE)</span></p>
            <p><span className='name'>OTHER NAME HERE </span><span className='status'>(STATUS HERE)</span><FightButton /></p>
        </div>
    }
})
