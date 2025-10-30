import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

type CertificationsSectionProps = {
  heading?: string |  JSX.Element;
  description?: string;
  imageSize?: string;
};

export const CertificationsSection = ({
  heading = 'Certifications and Awards',
  description = '',
  imageSize = 'w-20 md:w-28 lg:w-30'

}: CertificationsSectionProps) => {
  const certifications = [
    'https://sumatosoft.com/wp-content/uploads/2023/03/Badge-1-1.svg',
    'https://sumatosoft.com/wp-content/uploads/2022/12/5ca49c9f6cb37e33319e1162_Goodfirms.svg',
    'https://sumatosoft.com/wp-content/uploads/2022/12/5ca49c9f8ff5ad26d13b6845_TDA.svg',
    'https://sumatosoft.com/wp-content/uploads/2024/12/Responsive-Design-Development-2025.svg',
    'https://sumatosoft.com/wp-content/uploads/2024/12/Mobile-Software-Development-2025.svg',
    'https://sumatosoft.com/wp-content/uploads/2023/03/Badge-2-2.svg',
    'https://sumatosoft.com/wp-content/uploads/2023/03/Badge-5.svg',
    'https://sumatosoft.com/wp-content/uploads/2022/12/5ca49c9f6cb37e33319e1162_Goodfirms.svg',
    'https://sumatosoft.com/wp-content/uploads/2023/03/Badge-3.svg',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const certsPerView = 6;

  const nextCerts = () => {
    setCurrentIndex(prev =>
      prev + certsPerView >= certifications.length ? 0 : prev + 1
    );
  };

  const prevCerts = () => {
    setCurrentIndex(prev =>
      prev - 1 < 0 ? certifications.length - certsPerView : prev - 1
    );
  };

  const visibleCerts = certifications.slice(
    currentIndex,
    currentIndex + certsPerView
  );

  return (
    <RevealOnScroll>
      <section className="py-12 bg-white relative">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            {heading}
          </h2>
          <p className="text-black text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <button
              onClick={prevCerts}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 mr-4"
              aria-label="Previous certifications"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex flex-1 justify-center items-center gap-16 overflow-hidden">
              {visibleCerts.map((cert, index) => (
                <img
                  key={`${currentIndex}-${index}`}
                  src={cert}
                  alt={`Certification ${currentIndex + index + 1}`}
                  loading="lazy"
                  className={`${imageSize} transition-transform duration-300 hover:scale-110`}
                />
              ))}
            </div>

            <button
              onClick={nextCerts}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 ml-4"
              aria-label="Next certifications"
            >
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
        
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
