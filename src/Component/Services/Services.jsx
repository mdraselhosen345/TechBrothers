import React from 'react';
import UiUXPng from '../../assets/UIUXPng.png';
import DevelopmentPng from '../../assets/DevelopmentPng.png';
import responsivePng from '../../assets/responsivePng (2).png'
import frontendPng  from '../../assets/frontendPng.png';
import HardwarePng from '../../assets/Hardware (2).png';
import NetworkPng from '../../assets/Network.png';
import SoftwarePng from '../../assets/SoftwarePng.png';
import ResponsibilitiesPng from '../../assets/ResponsibilitiesPng.png';


const Services = () => {
    

    return (
        <div className='mt-5'>
            {/* heding section */}
            <div className='text-center'>
                <h1 className='sm:text-4xl md:text-5xl text-3xl pt-5 gap-3 fira-sans-extrabold text-[#fabd44]'> My <span className='text-[#fd5d3d]'>Services</span></h1>
                <h2 className='md:text-xl sm:text-lg lg:text-2xl font-bold pt-3 fira-sans-extralight-italic text-[#C4C4C4]'>Comprehensive digital solutions to your business needs</h2>
            </div>
             <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto mt-10 max-w-5xl'>
                 {/* left site  */}
                     <div className='h-auto md:h-[400px] md:w-[400px] w-full bg-[#033f88] rounded-xl shadow-cyan-500 shadow-2xl'>
                          <h1 className='text-[26px] font-semibold text-[#ADADAD] pl-4 pt-2'>Web Design & Development Services</h1>
                               <div className='grid grid-cols-2 mt-2 mb-2 gap-4'>
                                     <div className='space-y-4'>
                                        <div className='border-2 border-blue-700 md:h-[125px] sm:h-[80px] mb-4 bg-[#012653] ml-2'>
                                               <img src={UiUXPng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                               <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Web Design</h1>
                                        </div>
                                        <div className='border-2 border-blue-700 md:h-[125px] sm:h-[80px] bg-[#012653] ml-2'>
                                               <img src={responsivePng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                               <h1 className='text-[18px] pt-3 text-center text-[#AAAAAA] fira-sans-regular'>responsive_support</h1>
                                        </div>
                                     </div>
                                     <div className='space-y-4'>
                                         <div className='border-2 border-blue-700 md:h-[125px] sm:h-[80px] mb-4 bg-[#012653] mr-2'>
                                                <img src={DevelopmentPng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                                <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Development</h1>
                                         </div>
                                         <div className='border-2 border-blue-700 md:h-[125px] sm:h-[80px] bg-[#012653] mr-2'>
                                                <img src={frontendPng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                                <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Frontend</h1>
                                         </div>
                                     </div>
                               </div>
                    </div>    
                 {/* right site */}
                     <div className='h-auto md:h-[400px] md:w-[400px] w-full bg-[#00469b] rounded-xl shadow-cyan-500 shadow-2xl'>
                        <h1 className='text-[26px] font-semibold text-[#ADADAD] pl-4 pt-2'>IT Support Expertise & Responsibilities</h1>
                                    <div className='grid grid-cols-2 mt-2 mb-2 gap-4'>
                                     <div className='space-y-4'>
                                        <div className='border-2 border-blue-700 md:h-[125px] sm:h-[80px] mb-4 bg-[#012653] ml-2'>
                                               <img src={HardwarePng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                               <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Hardware_Support</h1>
                                        </div>
                                        <div className='border-2 border-blue-700 md:h-[125px] sm:h-[80px] bg-[#012653] ml-2'>
                                               <img src={NetworkPng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                               <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Network_Support</h1>
                                        </div>
                                     </div>
                                     <div className='space-y-4'>
                                         <div className='border-2 border-blue-700 md:h-[125px] sm:h-[80px] mb-4 bg-[#012653] mr-2'>
                                               <img src={SoftwarePng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                               <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Software_Support</h1>
                                         </div>
                                         <div className='border-2 border-blue-700 md:h-[125px] sm:h-[80px] bg-[#012653] mr-2'>
                                              <img src={ResponsibilitiesPng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                               <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Responsibilities</h1>
                                         </div>
                                     </div>
                               </div>
                    </div> 

             </div>
        </div>
   
    );
};

export default Services;