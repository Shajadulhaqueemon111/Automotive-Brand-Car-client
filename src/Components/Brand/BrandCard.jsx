import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const BrandCard = ({ brand }) => {
    const { id, brand_name, image } = brand;

    const imageStyles = {
        width: '200px', // Adjust the width as needed
        height: '150px', // Adjust the height as needed
    };
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animation duration in milliseconds
          offset: 200, // Offset (in pixels) from the top of the viewport
        });
      }, []);

    return (
       <div  data-aos="zoom-in">
         <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} style={imageStyles} alt="Movie"/></figure>
        <div className="card-body"  data-aos="zoom-in">
         
          
          <div className="card-actions justify-end">
         <Link to='/user'>
         <button className="btn btn-outline btn-secondary">{brand_name}</button>
         </Link>
          </div>
        </div>
      </div>
       
       </div>
    );
};

export default BrandCard;