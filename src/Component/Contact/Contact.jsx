import React from 'react';
import imageRasel from '../../assets/imges.jpeg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

const Contact = () => {
    return (
 <div className='flex flex-col lg:flex-row mx-auto mt-15 max-w-6xl h-auto lg:h-[550px] gap-5 px-4'>
  {/* Left side */}
  <div className='w-full lg:w-[250px] bg-blue-950 shadow-2xl shadow-black rounded-t-full mt-7 lg:ml-7 lg:mr-7 flex flex-col items-center lg:items-start'>
    <div className='h-[200px] w-[200px] mt-8 ml-5 '>
      <img src={imageRasel} className='rounded-full border-3 border-[#C4C4C4]' alt="" />
    </div>
    <div className='mt-20 pl-5  text-center lg:text-left'>
      <h1 className='text-2xl text-[#DBDBDB] fira-sans-medium-italic mt-4'>Md : Rasel Hossen</h1>
      <div className='flex justify-center lg:justify-start gap-2 pt-2 items-center'>
        <FaLocationDot className='text-[#ADADAD]' size={20}/>
        <span className='text-[#ADADAD] text-sm'>Dhaka, Bangladesh</span>
      </div>
      <div className='flex justify-center lg:justify-start gap-2 pt-2 items-center'>
        <FaPhoneVolume className='text-[#ADADAD]' size={20}/>
        <span className='text-[#ADADAD] text-sm'>01782299570</span>
      </div>
      <div className='flex justify-center lg:justify-start gap-2 pt-2 items-center'>
        <FaWhatsapp className='text-[#ADADAD]' size={20}/>
        <span className='text-[#ADADAD] text-sm'>01782299570</span>
      </div>
      <div className='flex justify-center lg:justify-start gap-2 pt-2 items-center'>
        <BiLogoGmail className='text-[#ADADAD]' size={20}/>
        <span className='text-[#ADADAD] text-sm no-underline hover:underline'>rasel.hossenit@gmail.com</span>
      </div>
    </div>
  </div>

  {/* Right side */}
  <div className='w-full lg:w-[800px] shadow-2xl shadow-black rounded-t-4xl bg-blue-950 mt-5 lg:mt-0 flex flex-col px-5 py-5'>
    <div>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl fira-sans-black text-[#fabd44]'>Contact & <span className='text-[#fd5d3d]'>Information</span></h1>
      <p className='text-sm sm:text-base lg:text-lg text-[#ADADAD] pt-3 lg:pt-5 fira-sans-extralight-italic'>
        I am a Frontend Web Developer & IT Support Professional focused on building responsive web interfaces and providing reliable hardware, software, and network support.
      </p>
      <div className='mt-6'>
       <a href="/Download.CV.pdf" target="_blank" {...(isMobile ? { download: "Download.CV.pdf" } : {})} rel="noopener noreferrer"  className="btn btn-primary rounded-3xl text-sm sm:text-base fire-sans-regular text-[#DBDBDB]">Download CV</a>
      </div>
    </div>

    <div className='flex flex-col lg:flex-row justify-between gap-5 mt-12'>
      {/* Social Media */}
      <div className='bg-[#001b3d] rounded-2xl w-full lg:w-[250px] h-auto lg:h-[250px] p-4'>
        <h1 className='text-xl fira-sans-semibold-italic text-[#DBDBDB]'>Social Media</h1>
        <div className='flex gap-3 pt-4 text-[#ADADAD] items-center'>
          <FaLinkedin size={25}/> 
          <a href="https://www.linkedin.com/in/rasel-hossenit/" target="_blank" className='no-underline hover:underline'>LinkedIn</a>
        </div>
        <div className='flex gap-3 pt-2 text-[#ADADAD] items-center'>
          <FaSquareGithub size={25}/> 
          <a href="https://github.com/mdraselhosen345" target="_blank" className='no-underline hover:underline'>GitHub</a>
        </div>
        <div className='flex gap-3 pt-2 text-[#ADADAD] items-center'>
          <FaFacebookSquare size={25}/> 
          <a href="https://www.facebook.com/share/1E3ufxMpR7/" target="_blank" className='no-underline hover:underline'>Facebook</a>
        </div>
        <div className='flex gap-3 pt-2 text-[#ADADAD] items-center'>
          <FaTwitterSquare size={25}/> 
          <a href="" className='no-underline hover:underline'>Twitter</a>
        </div>
      </div>

      {/* Working Place */}
      <div className='bg-[#001b3d] rounded-2xl w-full lg:w-[250px] h-auto lg:h-[250px] p-4'>
        <h1 className='text-xl fira-sans-semibold-italic text-[#DBDBDB]'>Working Place</h1>
        <div className='flex gap-3 pt-4 text-[#ADADAD] items-center'>
          <FaLocationDot size={25}/> 
          {/* <span className='text-sm'>Daffodil International University</span> */}
          <a href="https://daffodilvarsity.edu.bd/" target="_blank" className='no-underline hover:underline pl-2'>Daffodil International University</a>
        </div>
        <div className='flex gap-3 pt-2 text-[#ADADAD] items-center'>
          <MdAccessTime size={25}/>
           <span className='text-sm'>Sat - Thu : 8:00AM - 4:00PM</span>
        </div>
        <div className='flex gap-3 pt-2 text-[#ADADAD] items-center'>
          <MdAccessTime size={25}/> 
          <span className='text-sm'>IT Support Professional</span>
        </div>
      </div>

      {/* Chat Support */}
      <div className='bg-[#001b3d] rounded-2xl w-full lg:w-[470px] h-auto lg:h-[250px] p-5'>
        <div className='flex gap-3 items-center'>
          <IoIosChatboxes className='text-[#ADADAD]' size={40}/> <h1 className='text-2xl fira-sans-semibold-italic text-[#DBDBDB]'>Chat Support</h1>
        </div>
        <p className='text-[13px] mt-1 text-[#ADADAD]'>Get Instant Answer From Our Chat</p>
        <div className='flex justify-center mt-4'>
          <button className="btn btn-primary px-10 sm:px-20 text-lg text-[#DBDBDB]">Chat Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Contact;