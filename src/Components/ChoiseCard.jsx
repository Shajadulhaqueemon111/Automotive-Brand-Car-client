import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
const ChoiseCard = ({ choise }) => {

    const { id, title, image, describe } = choise
    const imageStyles = {
        width: '200px', 
        height: '150px', 
    };
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,
        });
      }, []);
    return (
        <div  data-aos="zoom-in">
            <div className="card  w-96   bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} style={imageStyles} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center"  data-aos="zoom-in">
                    <h2 className="card-title">{title}</h2>
                 
                     <p>{describe}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ChoiseCard;