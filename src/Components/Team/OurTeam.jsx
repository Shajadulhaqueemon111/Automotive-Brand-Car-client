import React, { useEffect, useState } from 'react';
import OurTeamCard from './OurTeamCard';

const OurTeam = () => {

    const [teams,setTeams]=useState([])

    useEffect(()=>{

    fetch('/team.json')
    .then(res=>res.json())
    .then(data=>setTeams(data))

    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold'>Ours Team</h2>
            <div className='grid md:grid-cols-4 gap-3'>
                {
                    teams.map(team=><OurTeamCard key={team.id} team={team}></OurTeamCard>)
                }
            </div>
        </div>
    );
};

export default OurTeam;