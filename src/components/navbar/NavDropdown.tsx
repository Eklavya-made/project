import React from 'react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg rounded-md py-2 mt-2">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-[#CC7722] text-sm transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default NavDropdown;