import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  imageUrl: string;
  onViewDetails: () => void;
  onEnroll: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  imageUrl,
  onViewDetails,
  onEnroll,
}) => {
  return (
    <div className="bg-[#FFDDC0] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
        <div className="flex gap-3">
          <button
            onClick={onViewDetails}
            className="flex items-center gap-2 text-sm font-medium hover:text-[#CC7722] transition-colors"
          >
            View Details <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onEnroll}
            className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;