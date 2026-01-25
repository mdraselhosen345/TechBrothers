import React from 'react';
import Aboutpng from '../../assets/Aboutpng (2).png';
import Aboutpngimg from '../../assets/Aboutpngimg.png';

const About = () => {
    return (
     <div className=''>
        <div className='h-auto gap-11 mt-10 max-w-6xl mx-auto flex md:h-[400px] sm:h-[300px] lg:h-[500px]'>
            {/* left site */}
             <div className='relative inline-block w-[450px] shadow-2xl rounded-3xl shadow-emerald-500'>
                   <img src={Aboutpng} className='pt-15 w-full' alt="" />
                   <img src={Aboutpngimg} className='absolute -top-20 left-0 w-full h-full object-contain' alt="" />
                   <div className='h-[215px] bg-[#012653] top-0 text-center pt-7 rounded-3xl shadow-2xl shadow-sky-500 mt-71 absolute w-full object-contain'>
                          <h1 className='fira-sans-black text-3xl'>MD : RASEL HOSSEN</h1>
                          <h3 className='pt-2'>rashel099009@gmail.com</h3>
                             <div className='sm:gap-5 mt-4 md:mt-5'>
                                 <button className="btn btn-primary rounded-3xl text-sm sm:text-base fire-sans-regular">Download CV</button>
                              
                             </div>
                   </div>
             </div>
             <div className='w-[702px]'>
                   <div className='h-[240px] shadow-2xl rounded-3xl bg-[#012653] shadow-emerald-500'>
                    <h1 className='pt-5 pl-4 text-2xl text-[#fabd44] fira-sans-extrabold'>About Me : <span className='text-xl text-[#fd5d3d]'>Frontend Developer</span></h1>
                       <p className='text-[14px] pt-1 pl-4 pr-3 fira-sans-extralight-italic text-[#c8c8ff]'>I am a passionate Frontend Developer with experience in building modern, responsive, and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, Tailwind CSS, React, and Vue.js to create clean, interactive, and visually appealing websites.
                          I focus on translating designs into high-quality code and ensuring smooth user experiences across all devices. I enjoy learning new frontend technologies and continuously improving my skills. My goal is to build fast, accessible, and scalable user interfaces that bring ideas to life.</p>
                   </div>
                   <div className='mt-4 h-[240px] bg-[#012653] shadow-2xl rounded-3xl shadow-emerald-500'>
                          <h1 className='pt-5 pl-4 text-2xl text-[#fabd44] fira-sans-extrabold'>About Me : <span className='text-xl text-[#fd5d3d]'>Working as an IT staff</span></h1>
                          <p className='text-[14px] pt-1 pl-4 pr-3 fira-sans-extralight-italic text-[#c8c8ff]'>I am an IT Support Professional at Daffodil International University with 1.5 years of hands-on experience in providing reliable technical support. My expertise includes hardware and software troubleshooting, networking, operating system installation, printer configuration, and CCTV system maintenance.
                              I am skilled at identifying and resolving technical issues efficiently to ensure smooth day-to-day IT operations. I am dedicated, detail-oriented, and committed to delivering high-quality and dependable IT support.</p>
                   </div>
             </div>
        </div>
      </div>
    );
};

export default About;