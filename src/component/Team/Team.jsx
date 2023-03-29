import React from 'react';
import './Team.css'
const Team = ({team,handleAddTeam}) => {
    // console.log(handleaddTeam);
    return (
        <div className='team-cart'>
            <div className='cart-header'>
              <img className='team-img' src={team.strTeamFanart1} alt="" />
              <img className='team-logo' src={team.strTeamBanner} alt="logo" />
              <h3>Team Name: {team.strTeam}</h3>
              <p>Location: {team.strStadiumLocation}</p>
            </div>
            <button onClick={()=>handleAddTeam(team)} className='cart-btn'>Add Team</button>
        </div>
    );
};

export default Team;