import React from 'react';

interface CurriculumItem {
  title: string;
  description: string;
}

const curriculumData: CurriculumItem[] = [
  {
    title: 'In-depth practice of asana, pranayama and kriya',
    description: 'Mastery over asana, pranayama and kriyas transforms and resets your body to its highest efficiency, making it strong and flexible. Your blocked energies will begin to flow again, giving you vitality. Kriyas help release that which harms our prana.'
  },
  {
    title: 'Anatomy and Physiology',
    description: 'Gaining in-depth knowledge of your body systems – muscular, endocrine, respiratory etc. will empower you to manage modern-day diseases with yoga.Ullamco aute reprehenderit laboris dolore labore.'
  },
  {
    title: 'Attitude Training',
    description: 'Develop your personality through the right yogic attitude.'
  },
  {
    title: 'Yogic Diet',
    description: 'Learn all about the nuances of yogi ahar, and understand the food categories – Sattvik, Rajasik, and Tamasik.'
  }
];

const CurriculumSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Curriculum</h2>
        <div className="space-y-4">
          {curriculumData.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 221, 192, 0.3)',
                borderLeft: '4px solid #CC7722'
              }}
            >
              <div className="sm:w-1/3">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </div>
              <div className="sm:w-2/3">
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;