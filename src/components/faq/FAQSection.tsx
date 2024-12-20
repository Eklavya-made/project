import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How to book a class?',
    answer: 'You can book a class through our online booking system or by contacting our studio directly. We recommend booking in advance to secure your spot.'
  },
  {
    question: 'What are the benefits of this program?',
    answer: 'Our program offers comprehensive yoga training, improved flexibility, stress reduction, and certification upon completion. You will learn various yoga styles and teaching techniques.'
  },
  {
    question: 'How do I select nearby studio?',
    answer: 'You can use our studio locator on the website or contact us to find the nearest studio location to you. We have multiple branches across the city.'
  },
  {
    question: 'How do I contact to know more information?',
    answer: 'You can reach us through our contact form, email, or phone. Our support team is available during business hours to answer all your questions.'
  },
  {
    question: 'Can this program help with Weightloss?',
    answer: 'Yes, our yoga program can support weight loss goals through regular practice, improved metabolism, and mindful movement techniques.'
  },
  {
    question: 'Do I need special diet while enrolling in the program?',
    answer: 'While a special diet is not mandatory, we recommend following a balanced, yogic diet to enhance your practice and overall well-being.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6">
        <div className="flex gap-8 lg:gap-12">
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop"
                alt="Yoga pose illustration"
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Have more questions regarding this Program?
            </h2>
            
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-0"
                >
                  <button
                    className="w-full flex justify-between items-center py-4 text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-800">{item.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="pb-4 text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;