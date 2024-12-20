import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navItems } from './navData';

interface MobileNavProps {
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  if (!isOpen) return null;

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <ul className="xl:hidden bg-[#CC7722] text-white space-y-4 py-4 text-center">
      {navItems.map((item, index) => (
        <li key={index} className="cursor-pointer">
          <div 
            className="flex items-center justify-center gap-1 hover:text-orange-300"
            onClick={() => item.dropdownItems && toggleDropdown(index)}
          >
            {item.label}
            {item.dropdownItems && (
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdowns.includes(index) ? 'rotate-180' : ''
                }`}
              />
            )}
          </div>
          {item.dropdownItems && openDropdowns.includes(index) && (
            <ul className="mt-2 space-y-2 text-sm bg-[#b35e1e] py-2">
              {item.dropdownItems.map((dropItem, idx) => (
                <li key={idx} className="hover:text-orange-300 py-1">
                  <a href={dropItem.href} className="block">
                    {dropItem.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li>
        <button className="bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition">
          Join Us
        </button>
      </li>
    </ul>
  );
};

export default MobileNav;