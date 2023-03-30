import React from 'react';
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
    
    return (
        <div className='summary'>
            <h2>Football Summary</h2>
            <h4>Total Add: {quantity}</h4>
            <img src={nTeam.strTeamBanner} alt="" />
            {/* .reduce((p,t)=> t?.quantity || 0 + p, 0) */}
        </div>
    );
};

export default Summary;