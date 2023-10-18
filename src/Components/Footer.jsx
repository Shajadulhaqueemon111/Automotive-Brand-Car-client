import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img src="https://i.ibb.co/C5F9hkK/vehica-logo-white-retina-165x29.png" alt="" />
  <p><span className='text-xl font-bold'>Automotion Industries Ltd.</span><br/>"Automotion" is a term that encapsulates the <br /> advancement of automation in the automotive industry.</p>
    
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;