import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
           <footer className="footer mt-10 max-w-full sm:footer-horizontal bg-neutral text-base-content p-10">
         <aside>
               {/* logo  */}
               <div className="flex-1">
                   <a className="fira-sans-black-italic text-2xl sm:text-3xl text-[#0000D1]">Tech<span className='text-[#D1D100]'>Brothers</span></a>
               </div>
                 <p className='text-[#C4C4C4]'>
                              TechBrothers Industries Ltd.
                            <br />
                               Providing reliable tech since 2026
                </p>
         </aside>
  <nav className='text-[#ADADAD]'>
    <h6 className="footer-title">Services</h6>
    <ul className='space-y-2 text-sm'>
    <li>IT Support & Troubleshooting</li>
    <li>Web Development</li>
    <li>Portfolio Website Design</li>
    <li>System & Software Maintenance</li>
    </ul>
  </nav>
  <nav className='text-[#ADADAD]'>
    <h6 className="footer-title">Company</h6>
    <a href='about' className="link link-hover">About us</a>
    <a href='contact' className="link link-hover">Contact</a>
    <a href='services' className="link link-hover">Services</a>
    <a href='projects' className="link link-hover">Projects</a>
  </nav>
  <nav>
    <div>
         
    </div>
    <div className='flex gap-5 text-[#ADADAD]'>
                   
                      <a href="https://www.linkedin.com/in/rasel-hossenit/" target="_blank"><FaLinkedin size={25}/></a>              
                    
                      <a href="https://github.com/mdraselhosen345" target="_blank"><FaSquareGithub size={25}/> </a>
                  
                      <a href="https://www.facebook.com/share/1E3ufxMpR7/" target="_blank"><FaFacebookSquare size={25}/> </a>

                      <a href=""><FaTwitterSquare size={25}/> </a>              
    </div>
  
  </nav>
</footer> 
</div>
    );
};

export default Footer;