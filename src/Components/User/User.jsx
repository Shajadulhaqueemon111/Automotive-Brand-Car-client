import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from './UserCard';

const User = () => {
    const loadData = useLoaderData();

    // Check if loadData is defined and not empty
    // if (!loadData || !loadData.length) {
    //     return <div>Loading...</div>;
    // }

    const [users, setUser] = useState(loadData);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res=>res.json())
    //     .then(data=>setUser(data))
    // },[])

    return (
        <div>
            <h2 className='font-bold text-2xl text-center'>Featured Listings</h2>
            <div className='grid md:grid-cols-2 gap-3'>
                {users.map(user => <UserCard key={user._id} user={user}></UserCard>)}
            </div>
        </div>
    );
};

export default User;
