import React, { useState } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const testimonials = [
    {
      id: 1,
      quote: "Working with Oditech was a great experience! Their web development team delivered a stunning and fully functional website for our business. They understood every requirement clearly and delivered before the deadline.",
      author: "Amit Sharma",
      position: "Founder, BrightTech Solutions"
    },
    {
      id: 2,
      quote: "Oditech helped us build a powerful mobile application for our startup. Their developers were highly skilled and cooperative. What impressed me most was their communication and transparency throughout the project.",
      author: "Priya Verma",
      position: "CEO, StartHub India"
    },
    {
      id: 3,
      quote: "We partnered with Oditech for AI integration into our customer support system. The chatbot solution they built has reduced our response time by more than 60%! They truly know how to combine technology with business needs.",
      author: "Rahul Mehta",
      position: "Operations Head, EasyServe Pvt. Ltd."
    },
    {
      id: 4,
      quote: "The Oditech team is professional, dedicated, and creative. They developed our e-commerce website with excellent UI/UX and SEO optimization. We’ve seen a big boost in our online traffic and sales.",
      author: "Sneha Patnaik",
      position: "Marketing Manager, ShopEase India"
    },
    {
      id: 5,
      quote: "Oditech’s IoT and automation solutions have been a game changer for our manufacturing process. Their team explained every technical detail clearly and customized the system perfectly to our needs.",
      author: "Vikram Reddy",
      position: "Plant Manager, SmartTech Industries"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="text-4xl font-serif text-blue-900 self-start">"</div>
            <div className="flex-1">
              <div className="text-lg text-gray-700 mb-6">
                {testimonials[currentIndex].quote}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
                </div>
                <div>
                  <div className="font-medium text-blue-900">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-gray-500">{testimonials[currentIndex].position}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
         
          <a href="#" className="text-red-500 hover:text-red-700 flex items-center gap-1 font-medium">
            All Reviews
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;