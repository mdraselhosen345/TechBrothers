import React from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';



const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
                <div className="navbar px-4 md:px-10 py-4 mb-10">
                        {/* logo  */}
                            <div className="flex-1">
                                   <a className="fira-sans-black-italic text-2xl sm:text-3xl text-[#DBDBDB]">Tech<span className='text-[#D1D100]'>Brothers</span></a>
                            </div>
                        {/* Desktop menu */}
                    <div className="hidden md:flex flex-none pr-5">
                        <ul className="menu menu-horizontal gap-5 px-1 fira-sans-regular text-base text-[#ADADAD]">
                             <NavLink to="/" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Home</NavLink>
                             <NavLink to="/about" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">About Me</NavLink>
                             <NavLink to="/skills" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Skills</NavLink>
                             <NavLink to="/services" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Services</NavLink>
                             <NavLink to="/projects" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Projects</NavLink>
                             <NavLink to="/contact" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Contact</NavLink>
                        </ul>
                    </div>
                         {/* Button */}


    {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button className="btn btn-square btn-ghost" onClick={() => setOpen(!open)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
    {/* Mobile Dropdown */}
  {open && (
    <div className="absolute top-16 right-4 bg-[linear-gradient(120deg,#00171d,#0072ff)] shadow-md rounded-lg w-full pl-10 pt-5 z-50 flex flex-col">
                             <NavLink to="/" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Home</NavLink>
                             <NavLink to="/about" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">About Me</NavLink>
                             <NavLink to="/ckills" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Skills</NavLink>
                             <NavLink to="/cervices" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Services</NavLink>
                             <NavLink to="/crojects" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Projects</NavLink>
                              <NavLink to="/contact" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Contact</NavLink>  
                            <NavLink to="/contact" className="hover:bg-black px-4 py-1 rounded-xl hover:text-white transition duration-300">Contact</NavLink>

      
    </div>
  )}
                </div>
    );
};

export default Navbar;