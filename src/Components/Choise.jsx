import React, { useEffect, useState } from 'react';
import ChoiseCard from './ChoiseCard';

const Choise = () => {
    const [choises,setChoise]=useState([])

    useEffect(()=>{
   fetch('/title.json')
   .then(res=>res.json())
   .then(data=>setChoise(data))

    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold mt-4'>Why choose us?</h2>
            <div className='grid md:grid-cols-3 mt-3'>
                {
                   choises.map(choise=><ChoiseCard key={choise.id} choise={choise}></ChoiseCard>)
                }
            </div>
        </div>
    );
};

export default Choise;