import React, { useState } from 'react';
import img7 from '../images/cropped-tableimg.png'

const ProgramDetails = () => {
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'Program details' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'related', label: 'Related Course' },
    { id: 'faq', label: 'FAQ' },
  ];

  const programInfo = [
    { title: 'Duration', value: '11 DAYS' },
    { title: 'Level', value: 'Beginner to intermediate' },
    { title: 'Date', value: '3rd-13th of every month' },
    { title: 'Certification', value: 'Yoga Alliance USA' },
    { title: 'Style', value: 'Multi Style Yoga' },
    { title: 'Price', value: 'INR 10,000/-' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6">
        <div className="flex flex-nowrap gap-2 mb-8 border-b overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors
                ${activeTab === tab.id 
                  ? 'text-[#CC7722] border-b-2 border-[#CC7722]' 
                  : 'text-gray-600 hover:text-[#CC7722]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-lg overflow-hidden border shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-[#FFDDC0]">
                  <th className="px-4 sm:px-6 py-3 text-left text-lg font-semibold">TITLE</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-lg font-semibold">ACTIVITIES</th>
                </tr>
              </thead>
              <tbody>
                {programInfo.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 sm:px-6 py-4 font-medium">{item.title}</td>
                    <td className="px-4 sm:px-6 py-4">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full aspect-video overflow-hidden rounded-lg border-4 border-[#FFDDC0]">
            <img
              // src="https://images.unsplash.com/photo-1671581084718-c4c04fc00250?w=800&h=400&fit=crop"
              src={img7}
              alt="Yoga class in session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;