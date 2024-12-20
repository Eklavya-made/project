import React from 'react';
import { Star } from 'lucide-react';
import instimg from '../../images/inst.jpg'

interface Award {
  title: string;
  description: string;
}

interface InstructorProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  awards: Award[];
  rating: number;
}

const InstructorCard: React.FC<InstructorProps> = ({
  name,
  role,
  description,
  imageUrl,
  awards,
  rating
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 lg:w-1/4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={instimg}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-2/3 lg:w-3/4 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
          
          <p className="text-gray-700">{description}</p>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Achievements:</h4>
            <ul className="list-disc list-inside space-y-1">
              {awards.map((award, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-medium">{award.title}</span> - {award.description}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">Reviews:</span>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;