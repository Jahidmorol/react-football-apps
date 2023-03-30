import React from 'react';
import './CartDetails.css'

const CartDetails = ({cartDetails}) => {
    return (
        <div className='cart-detail'>
            <img src={cartDetails.strTeamBanner} alt="" />
            <h4>Team Name: {cartDetails.strTeam}</h4>
        </div>
    );
};

export default CartDetails;