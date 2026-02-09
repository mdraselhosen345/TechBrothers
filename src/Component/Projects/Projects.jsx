import React from 'react';
import bookPNg from '../../assets/bookPNG.png';
import Banner from '../../assets/banner.png';
import petCare from '../../assets/petcare.png';
import NidTaks from '../../assets/Nidtaks.png';
import Architects from '../../assets/achitects.png';
import Mary from '../../assets/Mary.png';

const Projects = () => {
   return (
  <div className='mt-10 mb-10'>
   <div className='mt-5 text-center'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl fira-sans-black text-[#fabd44]'>My <span className='text-[#fd5d3d]'>Projects</span></h1>
      <p className="pt-2 pl-5 pr-5 text-sm md:text-base text-[#C4C4C4] max-w-3xl mx-auto">Here are some of my projects where I apply my skills to build clean, responsive, and user-friendly web applications using modern technologies.</p>
   </div>
   <div className='h-auto max-w-6xl mx-auto gap-6 mt-15 mb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
<a href="https://marvelous-queijadas-2244b7.netlify.app/" target="_blank">
<div className="card bg-base-100 image-full w-90 shadow-2xl shadow-black">
        <figure>
           <img
             src={bookPNg}
             alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#FF985C]">Books Shope</h2>
        </div>
</div>
</a>
<a href="https://webtemplate-design.netlify.app/" target="_blank">
<div  className="card bg-base-100 image-full w-90 shadow-2xl shadow-black">
        <figure>
           <img
             src={Banner}
             alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#FF985C]">Web-Template Design</h2>
        </div>
</div>
</a>
<a href="https://pet-care-in.netlify.app/" target="_blank">
<div className="card bg-base-100 image-full w-90 shadow-2xl shadow-black">
        <figure>
           <img
             src={petCare}
             alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#FF985C]">Pet-Care-Dog</h2>
        </div>
</div>
</a>
<a href="https://nid-taks.netlify.app/" target="_blank">
<div className="card bg-base-100 image-full w-90 shadow-2xl shadow-black">
        <figure>
           <img
             src={NidTaks}
             alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#FF985C]">Nid-taks</h2>
        </div>
</div>
</a>
<a href="https://g3-archi.netlify.app/" target="_blank">
<div className="card bg-base-100 image-full w-90 shadow-2xl shadow-black">
        <figure>
           <img
             src={Architects}
             alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#FF985C]">G3-Architects</h2>  
        </div>
</div>
</a>
<a href="https://web-profail.netlify.app/" target="_blank">
<div href="https://web-profail.netlify.app/" className="card bg-base-100 image-full w-90 shadow-2xl shadow-black">
        <figure>
           <img
             src={Mary}
             alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#FF985C]">Card Title</h2>
        </div>
</div>
</a>
</div>
  </div>
    );
};

export default Projects;