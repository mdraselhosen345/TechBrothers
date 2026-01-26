import React from 'react';
import Bannar from '../Bannar/Bannar';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
    return (

        <div className='max-w-7xl'>           
            <Bannar></Bannar>
            <Services></Services>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
          
        </div>
    );

};

export default Home;