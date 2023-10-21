import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const UserCard = ({ user }) => {
    const { _id, name, brand_name, price, rating, photo } = user;

    // CSS styles for the image element
    const imageStyles = {
        width: '200px',
        height: '150px', 
    };

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, // 
        });
      }, []);

    return (
        <div  data-aos="zoom-in">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={photo} alt="Car" style={imageStyles} />
                </figure>
                <div className="flex w-full justify-around"  data-aos="zoom-in">

                  <div>
                  <h2 className="card-title"> Name: {name}</h2>
                    <h2 className="card-title">Brand Name: {brand_name}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <h2 className="card-title">Rating: {rating}</h2>
                  </div>

                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-2">
                           <Link to={`/brand/${_id}`}>
                           
                           <button className="btn btn-active">View Details</button>
                           </Link>
                            <Link to={`/update/${_id}`}>
                            <button className="btn btn-active">Update</button>
                            
                            </Link>
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
