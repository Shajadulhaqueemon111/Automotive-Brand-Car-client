import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const UserCard = ({ user }) => {
    const { _id, name, brand, price, rating, photo } = user;

    // CSS styles for the image element
    const imageStyles = {
        width: '200px', // Adjust the width as needed
        height: '150px', // Adjust the height as needed
    };

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          offset: 200, // Offset (in pixels) from the top of the viewport
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
                    <h2 className="card-title">Brand Name: {brand}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <h2 className="card-title">Rating: {rating}</h2>
                  </div>

                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-2">
                            <button className="btn btn-active">View Details</button>
                            <button className="btn">Update</button>
                            <button className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
