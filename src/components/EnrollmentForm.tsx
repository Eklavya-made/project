import React from 'react';

const EnrollmentForm = () => {
  return (
    <div className="bg-[#FFDDC0] p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Enroll in the Program</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#CC7722] focus:border-transparent outline-none transition"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#CC7722] focus:border-transparent outline-none transition"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="branch" className="text-sm font-medium">Branch</label>
          <select 
            id="branch"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#CC7722] focus:border-transparent outline-none transition"
          >
            <option value="">Select Branch</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium">Preferred Date</label>
          <input 
            id="date"
            type="date" 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#CC7722] focus:border-transparent outline-none transition" 
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            placeholder="Leave us a message"
            className="w-full p-2 border border-gray-300 rounded h-24 focus:ring-2 focus:ring-[#CC7722] focus:border-transparent outline-none transition resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center pt-2">
          <button 
            type="submit"
            className="bg-[#CC7722] text-white py-2 px-8 rounded-full font-bold hover:bg-[#b35e1e] transition-colors duration-300 transform hover:scale-105"
          >
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnrollmentForm;