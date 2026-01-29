import React from 'react';
import { MdWavingHand } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import RaselPng from '../../assets/rasel.png'
import sitePNg from '../../assets/sitePng.png'
import { Link } from 'react-router';
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

const Bannar = () => {
    return (
        <div>
                    <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] px-4 md:px-10 py-10'>
                        {/* left site */}
                         <div className='md:w-1/2 w-full flex flex-col justify-center md:mt-0 mt-5'>
                               <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl gap-3 md:gap fire-sans-extrabold-italic text-[#DBDBDB] flex flex-wrap'>Hi, I'm <span className='fira-sans-black-italic text-[#cccc35]'>Rasel</span> <span><MdWavingHand className='text-yellow-500'/></span></h1>
                               <h2 className='text-[#C4C4C4] pt-4 sm:pt-5 md:pt-7 text-base sm:text-lg sm:text text-lg md:text-xl'>Frontend Developer 💻 & UI/UX Enthusiast 🎨 
                                     <br />  Working as IT Support Professional 🖥️</h2>
                                <p className='text-[#969696] text-sm sm:text-base md:text-base fire-sans-light-italic pt-3 md:pt-5'>As a Frontend Developer & UI/UX Enthusiast,
                                   I love building seamless digital experiences.
                                   I am currently working as IT Support Professional, combining 
                                   practical IT knowledge with my design and development skills.
                                 </p>
                                 <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 sm:gap-5 mt-4 md:mt-5'>
                                     <Link to="/contact" className="btn btn-primary text-sm sm:text-base fire-sans-regular text-[#DBDBDB]">Contact Me</Link>
                                     <a href="/Download.CV.pdf" target="_blank" {...(isMobile ? { download: "Download.CV.pdf" } : {})} rel="noopener noreferrer"  className="btn btn-outline btn-primary text-sm sm:text-base fire-sans-regular text-[#DBDBDB]">Download CV</a>

                                 </div>
                         </div>
                         {/* right site */}
                         <div className='md:w-1/2 w-full mt-8 md:mt-0 flex justify-center items-center'>
                              <div className='relative inline-block '>
                                  <img className='w-full max-w-[320px] sm:max-w-[400px] md:max-w-[640px] mt-19 md:top-3' src={sitePNg} alt="" />
                                  <img className='absolute bottom-8 pl-18 md:left-[30px]  w-[250px] top-0.5 sm:top-0 sm:bottom-5 sm:w-[280px] sm:right-[50px] md:w-[359px] h-auto' src={RaselPng} alt="" /> 
                                  {/* <img className=" absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 w-[150px] sm:w-[250px] md:w-[365px] h-auto" src={RaselPng} alt=""/> */}

                              </div>
                         </div>
                    </div>
        </div>
    );
};

export default Bannar;