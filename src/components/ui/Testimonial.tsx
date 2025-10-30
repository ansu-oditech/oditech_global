import React, { useState } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "OdiTech Global delivered our mobile app ahead of schedule and beyond expectations. Their design team brought our brand vision to life, and their developers ensured flawless functionality. It’s been a game-changer for our business.",
      author: "Aarav Patel",
      position: "CEO, NexaFoods Pvt. Ltd.",
    },
    {
      id: 2,
      quote:
        "Our collaboration with OdiTech for website design and social media marketing has been outstanding. They’re creative, reliable, and truly understand brand storytelling. Our online visibility and engagement improved drastically within weeks.",
      author: "Sanya Kapoor",
      position: "Marketing Head, UrbanScape Interiors",
    },
    {
      id: 3,
      quote:
        "From branding to digital campaigns, OdiTech Global handled everything with precision and creativity. The PR management team helped us build a strong online reputation, and the graphics they created were exceptional.",
      author: "Rohit Sharma",
      position: "Founder, Zenith Realty Group",
    },
    {
      id: 4,
      quote:
        "We partnered with OdiTech for app development and video editing. Their team worked as an extension of ours — fast communication, smart design choices, and seamless execution. Highly recommended for any growing startup.",
      author: "Mira Thomas",
      position: "Co-founder, FitVibe Health",
    },
    {
      id: 5,
      quote:
        "The professionalism and transparency at OdiTech Global are unmatched. They walked us through every step of our project, from idea to launch. We’re now working with them for ongoing social media management and SEO.",
      author: "Vikram Nair",
      position: "Director, Innovora TechLabs",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#0a1529] via-[#0f1f3a] to-[#0a1529] text-white py-20 px-6 overflow-hidden">
      {/* Soft gradient blur background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-60 h-60 bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-center text-4xl font-bold mb-14">
          What Our <span className="text-blue-400">Clients Say</span>
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg relative">
          <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-3xl font-serif">
            “
          </div>

          <div className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed transition-all duration-500">
            {testimonials[currentIndex].quote}
          </div>

          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
              {testimonials[currentIndex].author[0]}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">{testimonials[currentIndex].author}</h4>
              <p className="text-sm text-gray-400">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 hover:bg-blue-500/30 border border-white/20 rounded-full transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 hover:bg-blue-500/30 border border-white/20 rounded-full transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <a
            href="/reviews"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium transition-all"
          >
            View All Reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-400 scale-125' : 'bg-gray-500 hover:bg-blue-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
