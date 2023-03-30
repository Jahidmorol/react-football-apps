import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import './Summery.css'

const Summary = ({cart}) => {
    console.log(cart);
    let quantity = 0;
    let nTeam = {};
    for(const team of cart){
        // if(team.quantity === 0){
        //         team.quantity = 1;
        //     }
        team.quantity = team.quantity || 1;
        quantity = quantity + team.quantity;
        nTeam = team;
        // document.getElementById('all-img').innerHTML=`
        // <img src=${nTeam.strTeamBanner} alt="photo" />
        // `;
    }
    const deleteSummary = () =>{
        localStorage.removeItem('summary-cart')
    }
    return (
        <div className='summary'>
            <h2>Football Summary</h2>
            <h4>Total Add: {quantity}</h4>
            <div className='cart-details'>
                {
                    cart.map(singleCart => <CartDetails cartDetails={singleCart}></CartDetails>)
                }
            </div>
            <button onClick={deleteSummary}>Delete</button>
        </div>
    );
};

export default Summary;