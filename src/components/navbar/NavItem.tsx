import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import NavDropdown from './NavDropdown';

interface NavItemProps {
  label: string;
  dropdownItems?: { label: string; href: string; }[];
}

const NavItem: React.FC<NavItemProps> = ({ label, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li 
      className="relative group"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="flex items-center gap-1 cursor-pointer">
        <span className="text-white hover:text-orange-100 transition-colors">{label}</span>
        {dropdownItems && (
          <ChevronDown 
            className={`w-4 h-4 text-white transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </div>
      {dropdownItems && <NavDropdown items={dropdownItems} isOpen={isDropdownOpen} />}
    </li>
  );
};

export default NavItem;