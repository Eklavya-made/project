import React from 'react';
// import { Flower2 } from 'lucide-react';
import img1 from '../../images/logo.png'

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* <Flower2 className="w-8 h-8 text-white" /> */}
      <img 
        src={img1} // Replace with your image URL
        alt="Logo"
        // className="h-12" // Adjust image size as needed
      />
      {/* <span className="text-xl font-bold text-white">8 LIMBS</span> */}
    </div>
  );
};

export default Logo;