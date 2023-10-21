import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from './UserCard';
import MyCarosol from '../MyCarosolBrand/MyCarosol';


const User = () => {
    const loadData = useLoaderData();

   

    return (
        <div>
           <MyCarosol></MyCarosol>
            <h2 className='font-bold text-2xl text-center'>Featured Listings</h2>
            <div className='grid md:grid-cols-2 gap-3'>
                {loadData.map(user => <UserCard key={user._id} user={user}></UserCard>)}
            </div>
        </div>
    );
};

export default User;
