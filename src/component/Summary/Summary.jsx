import React from 'react';
import './Summery.css'

const Summary = ({cart}) => {
    // console.log(cart);
    return (
        <div className='summary'>
            <h2>Football Summary</h2>
            <h4>Total Add: {cart.length}</h4>

        </div>
    );
};

export default Summary;