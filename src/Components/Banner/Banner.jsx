import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/4WCHGgM/Automobile-Industry-in-India.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Automotion</h1>
      <p className="mb-5">Car automation, also known as autonomous or self-driving car technology, aims to reduce or eliminate the need for human intervention in the driving process.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;