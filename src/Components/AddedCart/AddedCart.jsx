import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddedCarts from '../AddedCarts';

const AddedCart = () => {

    const addLoad = useLoaderData()
    console.log(addLoad)
      const [carts,setCart]=useState(addLoad)
    return (
        <div>
            <h2>Add Cart:{addLoad.length}</h2>
           <div className='grid grid-cols-1 md:grid-cols-3  gap-3'> 
            {
                carts.map(cart=><AddedCarts key={cart._id} cart={cart} cards={carts} setCart={setCart}></AddedCarts>)
            }
           </div>
        </div>
    );
};

export default AddedCart;


