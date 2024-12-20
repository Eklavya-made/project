import React, { useState } from 'react';
import img1 from '../images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#CC7722] shadow-md z-50 py-4 font-serif">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <div className="h-12 w-12  rounded-full flex items-center justify-center cursor-pointer">
            <img 
              src={img1}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>

        <ul className="hidden xl:flex items-center space-x-12 text-white font-medium text-lg">
          <li className="cursor-pointer hover:text-orange-300">Home</li>
          <li className="cursor-pointer hover:text-orange-300">Teacher Training Courses</li>
          <li className="cursor-pointer hover:text-orange-300">Yoga Classes</li>
          <li className="cursor-pointer hover:text-orange-300">Courses</li>
          <li className="cursor-pointer hover:text-orange-300">Therapy</li>
          <li className="cursor-pointer hover:text-orange-300">About Us</li>
        </ul>

        <div className="hidden xl:block">
          <button className="bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition">
            Join Us
          </button>
        </div>

        <button
          className="xl:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="xl:hidden bg-[#CC7722] text-white space-y-4 py-4 text-center">
          <li className="cursor-pointer hover:text-orange-300">Home</li>
          <li className="cursor-pointer hover:text-orange-300">Teacher Training Courses</li>
          <li className="cursor-pointer hover:text-orange-300">Yoga Classes</li>
          <li className="cursor-pointer hover:text-orange-300">Courses</li>
          <li className="cursor-pointer hover:text-orange-300">Therapy</li>
          <li className="cursor-pointer hover:text-orange-300">About Us</li>
          <li>
            <button className="bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition">
              Join Us
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;