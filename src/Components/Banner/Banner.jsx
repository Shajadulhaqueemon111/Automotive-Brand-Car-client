import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the top of the viewport
    });
  }, []);
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"> 
            <div className="hero min-h-screen"  style={{backgroundImage: 'url(https://i.ibb.co/4WCHGgM/Automobile-Industry-in-India.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold" data-aos-anchor-placement="bottom-center"data-aos="fade-up">Automotion</h1>
      <p className="mb-5"data-aos-anchor-placement="bottom-center"data-aos="fade-up" >Car automation, also known as autonomous or self-driving car technology, aims to reduce or eliminate the need for human intervention in the driving process.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;