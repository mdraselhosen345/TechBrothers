import React from 'react';
import imageRasel from '../../assets/imges.jpeg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='border-2 flex mx-auto mt-15 border-red-500 max-w-6xl h-[550px]'>
            <div className='flex gap-5'>
                     {/* left site */}
                   <div className=' w-[250px] bg-blue-950 rounded-t-full ml-7 mt-7 mr-7 '>
                        <div className=' h-[200px] ml-6 mt-8 w-[200px]'>
                            <img src={imageRasel} className='rounded-full border-3 border-[#C4C4C4]' alt="" />
                        </div>
                        <div className='mt-25 '>
                               <div className='pl-5 pb-3 flex gap-3 flex justify-center'>                                    
                                    <h1 className='text-2xl'>Md : Rasel Hossen </h1>
                               </div>
                               <div className='pl-5 pt-2 flex gap-3'>
                                    <FaLocationDot  size={20}/>
                                    <h1>Dhaka, Bangladesh </h1>
                               </div>
                               <div className='pl-5 flex gap-3 pt-2'>
                                     <FaPhoneVolume size={20}/>
                                     <h1>01782299570</h1>
                               </div>
                               <div className='pl-5 flex gap-3 pt-2'>
                                     <FaWhatsapp size={20}/>
                                     <h1>01782299570</h1>
                               </div>
                               <div className='pl-5 flex gap-3 pt-2'>
                                     <BiLogoGmail size={20}/>
                                     <h1>rashel099009@gmail.com</h1>
                               </div>
                        </div>
                   </div>


                   <div className='border-2 border-green-500'>

                   </div>
            </div>
        </div>
    );
};

export default Contact;