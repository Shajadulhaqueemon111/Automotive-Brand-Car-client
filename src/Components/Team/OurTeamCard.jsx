import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
const OurTeamCard = ({ team }) => {
    const { id, name, image, phone, email } = team

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,
        });
      }, []);
    return (
        <div  data-aos="zoom-out-up">
       
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center" data-aos="zoom-out-up">
                    <h2 className="card-title">{name}</h2>
                    <p>customer advisor</p>
                    
                    <p>{email}</p>
                    <p>{phone}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default OurTeamCard;