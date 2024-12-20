import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  address: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ address }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-3 rounded-md space-y-2">
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <p className="text-xs">{address}</p>
      </div>
      <button className="bg-black text-white px-3 py-1.5 rounded-full text-xs hover:bg-gray-800 transition-colors w-full">
        Get Directions
      </button>
    </div>
  );
};

export default LocationCard;


