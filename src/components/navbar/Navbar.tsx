import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import NavItem from './NavItem';
import MobileNav from './MobileNav';
import { navItems } from './navData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#CC7722] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        {/* <Logo /> */}

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-8">
          {navItems.map((item, index) => (
            <NavItem 
              key={index}
              label={item.label}
              dropdownItems={item.dropdownItems}
            />
          ))}
        </ul>

        {/* Join Us Button */}
        <div className="hidden xl:block">
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors">
            Join Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileNav isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;