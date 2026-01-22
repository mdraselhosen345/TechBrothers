import React from 'react';
import UxPng from '../../assets/ux.png';
import DevelopmentPng from '../../assets/development.png';
import responsivePng from '../../assets/responsive.png';
import frontendPng from '../../assets/frontend.png';


const Services = () => {
    

    return (
        <div className='mt-5 h-[600px] '>
            <div className=''>
                <h1 className='text-5xl flex justify-center pt-5 gap-3 fira-sans-extrabold text-[#fabd44]'> My <span className='text-[#fd5d3d]'>Services</span></h1>
                <h2 className='text-2xl flex font-bold justify-center pt-3 fira-sans-extralight-italic text-[#C4C4C4]'>Comprehensive digital solutions to your business needs</h2>
            </div>
             <div className='flex justify-center items-center mx-auto gap-15 h-[430px] mt-10 max-w-5xl'>
                 {/* right site  */}
                     <div className='h-[400px] w-[400px] bg-[#033f88] rounded-xl shadow-cyan-500 shadow-2xl'>
                        <h1 className='text-[26px] font-semibold text-[#ADADAD] pl-4 pt-2'>Web Design & Development Services</h1>
                               <div className='h-[300px] mt-2 flex gap-4 justify-center mx-auto'>
                                     <div className='w-[185px] h-[290px]'>
                                        <div className='border-2 border-blue-700 h-[135px] mb-4 bg-[#012653]'>
                                              <img src={UxPng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                               <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Web Design</h1>
                                        </div>
                                        <div className='border-2 border-blue-700 h-[135px] bg-[#012653]'>
                                               <img src={responsivePng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                               <h1 className='text-[18px] pt-3 text-center text-[#AAAAAA] fira-sans-regular'>responsive_support</h1>
                                        </div>
                                     </div>
                                     <div className='w-[185px] h-[290px]'>
                                         <div className='border-2 border-blue-700 h-[135px] mb-4 bg-[#012653]'>
                                                <img src={DevelopmentPng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                                <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Development</h1>
                                         </div>
                                         <div className='border-2 border-blue-700 h-[135px] bg-[#012653]'>
                                                <img src={frontendPng} className='w-[60px] h-[60px] flex justify-center mx-auto mt-5' alt="" />
                                                <h1 className='text-xl pt-3 text-center text-[#AAAAAA] fira-sans-regular'>Frontend</h1>
                                         </div>
                                     </div>
                               </div>
                    </div>    
                 {/* left site */}
                     <div className='h-[400px] w-[400px] bg-[#00469b] rounded-xl shadow-cyan-500 shadow-2xl'>
                        <h1 className='text-[26px] font-semibold text-[#ADADAD] pl-4 pt-2'>IT Support Expertise & Responsibilities</h1>
                                                              <div className='h-[300px] mt-2 flex gap-4 justify-center mx-auto'>
                                     <div className='w-[185px] h-[290px]'>
                                        <div className='border-2 border-blue-700 h-[135px] mb-4'>

                                        </div>
                                        <div className='border-2 border-blue-700 h-[135px]'>

                                        </div>
                                     </div>
                                     <div className='w-[185px] h-[290px]'>
                                         <div className='border-2 border-blue-700 h-[135px] mb-4'>

                                         </div>
                                         <div className='border-2 border-blue-700 h-[135px]'>

                                         </div>
                                     </div>
                               </div>
                    </div> 

             </div>
        </div>
   
    );
};

export default Services;