import React from 'react';
import CourseCard from './CourseCard';
import { ArrowRight } from 'lucide-react';

const coursesData = [
  {
    id: 1,
    title: '200 Hours Yoga Teacher Training',
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: '300 Hours Yoga Teacher Training',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: '500 Hours Yoga Teacher Training',
    imageUrl: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=600&h=400&fit=crop'
  }
];

const RelatedCourses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Related Course</h2>
          <button className="flex items-center gap-2 text-[#CC7722] hover:text-[#b35e1e] transition-colors">
            View more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              imageUrl={course.imageUrl}
              onViewDetails={() => console.log('View details:', course.id)}
              onEnroll={() => console.log('Enroll:', course.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;