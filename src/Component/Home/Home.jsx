import React from 'react';
import Bannar from '../Bannar/Bannar';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (

        <div className='max-w-7xl mx-auto'>           
            <Bannar></Bannar>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
          
        </div>
    );

};

export default Home;