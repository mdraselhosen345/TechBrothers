import React from 'react';
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
                <div className="navbar px-4 md:px-10 py-4">
                        {/* logo  */}
                            <div className="flex-1">
                                   <a className="fira-sans-black-italic text-2xl sm:text-3xl text-[#0000D1]">Tech<span className='text-[#D1D100]'>Brothers</span></a>
                            </div>
                        {/* Desktop menu */}
                    <div className="hidden md:flex flex-none pr-5">
                        <ul className="menu menu-horizontal px-1 fira-sans-regular text-base gap-3">
                            <li><a>Services</a></li>
                            <li><a>About Me</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Contact</a></li> 
                        </ul>
                    </div>
                         {/* Button */}
                            <div className='hidden md:flex pr-2'>
                                <button className="btn btn-outline btn-success rounded-3xl">Success</button>
                            </div>

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
      <a className="px-4 py-2 hover:bg-gray-100">Services</a>
      <a className="px-4 py-2 hover:bg-gray-100">About Me</a>
      <a className="px-4 py-2 hover:bg-gray-100">Skills</a>
      <a className="px-4 py-2 hover:bg-gray-100">Projects</a>
      <a className="px-4 py-2 hover:bg-gray-100">Contact</a>
      <button className="btn btn-outline btn-success rounded-3xl m-4">Success</button>
    </div>
  )}
                </div>
    );
};

export default Navbar;