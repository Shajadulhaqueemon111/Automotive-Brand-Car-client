import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer';
import User from '../User/User';
import Brand from '../Brand/Brand';
import Choise from '../Choise';
import OurTeam from '../Team/OurTeam';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <User></User> */}
            <Brand></Brand>
            <Choise></Choise>
            <OurTeam></OurTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;