import React from 'react';
import InstructorCard from './InstructorCard';

const instructorsData = [
  {
    name: 'Princy Yadav',
    role: 'Ceo/Founder',
    description: '8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.',
    imageUrl: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400&h=400&fit=crop',
    awards: [
      {
        title: 'Awards',
        description: 'Write the awards of this person and their qualification to enhance the profile.'
      },
      {
        title: 'Certification',
        description: 'Write the awards of this person and their qualification to enhance the profile.'
      }
    ],
    rating: 4
  }
];

const InstructorsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Instructors</h2>
        <div className="space-y-6">
          {instructorsData.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsSection;