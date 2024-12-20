import React from 'react';
import EnrollmentForm from './EnrollmentForm';
import ProgramDetails from './ProgramDetails';
import CurriculumSection from './CurriculumSection';
import InstructorsSection from './instructors/InstructorsSection';
import RelatedCourses from './courses/RelatedCourses';
import FAQSection from './faq/FAQSection';
import img2 from '../images/background.png'

const Content = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          // backgroundImage: `url('https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&h=1080&fit=crop')`
          backgroundImage: `url(${img2})`
        }}
      />
      
      <div className="relative z-10 container mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold px-4 sm:px-6 lg:px-8 py-6 font-serif">
          Ashtanga Vinyasa Yoga Classes
        </h1>
        
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 gap-6 lg:gap-8">
          {/* Content Section */}
          <div className="w-full lg:w-7/12 xl:w-8/12 order-2 lg:order-1 space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-lg">
            <div>
              <h2 className="text-xl font-bold mb-2">HIGHLIGHTS:</h2>
              <p className="text-sm sm:text-base text-justify">
                8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-2">ELIGIBILITY:</h2>
              <p className="text-sm sm:text-base text-justify">
                The course is taught by a team of experienced and certified yoga teachers who are passionate about sharing their knowledge of yoga with students. They cover various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education in yoga.
              </p>
            </div>
            
            <div className="text-base sm:text-lg font-bold">
              Ratings:
              <span className="text-yellow-500 ml-2">★★★★☆</span>
            </div>
          </div>

          {/* Enrollment Form Section */}
          <div className="w-full lg:w-5/12 xl:w-4/12 order-1 lg:order-2 lg:sticky lg:top-24 h-fit">
            <EnrollmentForm />
          </div>
        </div>

        <ProgramDetails />
        <CurriculumSection />
        <InstructorsSection />
        <RelatedCourses />
        <FAQSection />
      </div>
    </div>
  );
};

export default Content;