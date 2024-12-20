import React from 'react';

interface FooterMenuProps {
  section: {
    title: string;
    items: string[];
  };
}

const FooterMenu: React.FC<FooterMenuProps> = ({ section }) => {
  return (
    <div className='ml-15'>
      <h3 className="font-serif text-lg font-semibold mb-4">{section.title}</h3>
      <ul className="space-y-2">
        {section.items.map((item, index) => (
          <li key={index}>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#CC7722] footer-menu-item">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;

