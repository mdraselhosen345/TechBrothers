import React from 'react';
import Bannar from '../Bannar/Bannar';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (

        <div className='max-w-7xl'>           
            <Bannar></Bannar>
            <Services></Services>
          
        </div>
    );

};

export default Home;