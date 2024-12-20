import React from 'react';
import FooterLogo from './footer/FooterLogo';
import FooterMenu from './footer/FooterMenu';
import LocationCard from './footer/LocationCard';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const menuSections = {
  menu: {
    title: 'Menu',
    items: [
      'Diet and Nutrition',
      'Ariel Yoga',
      'Face Yoga',
      'Short Term Courses',
      'Regular Yoga Classes',
      'Meditation',
      'Sound Healing'
    ]
  },
  courses: {
    title: 'COURSES',
    items: [
      'Stress Management and Relaxation',
      'Corporate wellness program',
      'Prenatal and Postnatal Program',
      'Yoga for Specific Ailments',
      'Diploma Courses in Yoga',
      'Yoga for Weightloss and Fitness',
      'Prenatal and Postnatal Yoga Teacher Training'
    ]
  },
  teacherTraining: {
    title: 'EXPLORE TEACHER TRAINING',
    items: [
      '100 Hour Yoga Teacher Training',
      '200 Hour Yoga Teacher Training',
      '300 Hours Yoga Teacher Training',
      '50 Hours Aerial Yoga Teacher Training',
      '100 Hours Aerial Yoga Teacher Training',
      'Prenatal and Postnatal Yoga Teacher Training',
      'Online Courses'
    ]
  }
};

const locations = [
  {
    address: 'Shop number 5,6,7, Yashwant Park, near bank of India, Yashvant Viva Twp, Nalasopara East, Vasai-Virar, Mumbai, Maharashtra 401209'
  },
  {
    address: '105/106/107, first floor, dheeraj shopping centre, Evershine City Rd, Evershine City, Vasai East, Mumbai, Vasai-Virar, Maharashtra 401208'
  },
  {
    address: 'Shop No 13, Topaz Center, Tulinj Rd, near Radha Krishna Hotel, Radha Nagar, Ambawadi, Nalasopara East, Mumbai, Nala Sopara, Maharashtra 401209'
  }
];

const Footer = () => {
  return (
    <footer className="bg-[#FFF5EB] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 lg:gap-x-16 lg:gap-y-24">
          <div className="space-y-10 lg:col-span-1">
            <FooterLogo />
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-[#CC7722] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#CC7722] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#CC7722] transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-1">
            <FooterMenu section={menuSections.menu} />
          </div>
          <div className="lg:col-span-1">
            <FooterMenu section={menuSections.courses} />
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <h3 className="font-serif text-xl font-semibold mb-6">Find Our Studios</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-18 lg:gap-x-28">
            <div className="space-y-8">
              {locations.map((location, index) => (
                <LocationCard key={index} address={location.address} />
              ))}
            </div>
            <div className="lg:col-span-1">
              <FooterMenu section={menuSections.teacherTraining} />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 8 Limbs Yoga Studios. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#CC7722] footer-menu-item transition-colors">
                Refund Policy
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#CC7722] footer-menu-item transition-colors">
                Privacy policy
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#CC7722] footer-menu-item transition-colors">
                Terms and condition
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

