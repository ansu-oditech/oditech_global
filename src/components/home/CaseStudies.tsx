import { useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import AnimatedButton from '../ui/AnimatedButton';
import { cn } from '@/lib/utils';

const caseStudies = [
  {
    id: 'healthcare',
    title: 'Healthcare Patient Portal',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    description: 'Developed a secure patient portal for a leading healthcare provider, improving patient engagement and streamlining administrative processes.',
    results: [
      '45% increase in patient engagement',
      '60% reduction in administrative workload',
      'Enhanced data security and HIPAA compliance',
      'Improved patient satisfaction scores'
    ]
  },
  {
    id: 'fintech',
    title: 'Mobile Banking Solution',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    description: 'Created a comprehensive mobile banking application for a financial institution, enabling users to manage finances securely from anywhere.',
    results: [
      '200,000+ app downloads in the first month',
      '35% increase in digital transaction volume',
      '85% reduction in customer service calls',
      'Award-winning UX design'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform Overhaul',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    description: 'Redesigned and rebuilt an e-commerce platform for a retail giant, improving performance, user experience, and conversion rates.',
    results: [
      '127% increase in conversion rate',
      '45% reduction in cart abandonment',
      '3x faster page load times',
      'Seamless integration with existing systems'
    ]
  },
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(caseStudies[0].id);

  return (
    <section id="case-studies" className="section-padding bg-black text-white mb-10">
      <div className="container px-4 mx-auto">
        {/* Heading */}
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFB703]/10 text-[#FFB703] font-medium text-sm mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Success Stories
            </h2>
            <p className="text-gray-300">
              Explore how we've helped businesses across industries achieve their digital transformation goals.
            </p>
          </div>
        </RevealOnScroll>

        {/* Card Layout */}
        <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-[#FFB703]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sidebar */}
            <div className="lg:col-span-5 xl:col-span-4 bg-gradient-to-br from-black to-neutral-950 border-r border-[#FFB703]/20">
              <div className="p-8">
                <RevealOnScroll>
                  <h3 className="text-xl font-semibold text-[#FFB703] mb-6">
                    Featured Projects
                  </h3>
                </RevealOnScroll>

                <div className="space-y-3">
                  {caseStudies.map((caseStudy, index) => (
                    <RevealOnScroll key={caseStudy.id} delay={index * 100}>
                      <button
                        onClick={() => setActiveCase(caseStudy.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-lg transition-all duration-300 border border-transparent",
                          activeCase === caseStudy.id
                            ? "bg-[#FFB703]/10 border-[#FFB703]/40"
                            : "hover:bg-[#FFB703]/5"
                        )}
                      >
                        <span className="text-xs font-medium text-[#FFB703]/80 block mb-1">
                          {caseStudy.category}
                        </span>
                        <h4 className="font-medium mb-1 text-white">{caseStudy.title}</h4>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {caseStudy.description}
                        </p>
                      </button>
                    </RevealOnScroll>
                  ))}
                </div>

                <RevealOnScroll delay={400}>
                  <div className="mt-8">
                    <AnimatedButton
                      variant="outline"
                      className="border-[#FFB703]/40 text-[#FFB703] hover:bg-[#FFB703]/10 hover:border-[#FFB703]/60"
                    >
                      View All Case Studies
                    </AnimatedButton>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            {/* Main Case Study Content */}
            <div className="lg:col-span-7 xl:col-span-8 bg-black">
              {caseStudies.map((caseStudy) => (
                caseStudy.id === activeCase && (
                  <div key={caseStudy.id} className="h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      <div className="h-72 md:h-full relative overflow-hidden">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                        />
                      </div>
                      <div className="p-8">
                        <RevealOnScroll>
                          <span className="inline-block px-3 py-1 rounded-full bg-[#FFB703]/10 text-[#FFB703] font-medium text-sm mb-4">
                            {caseStudy.category}
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {caseStudy.title}
                          </h3>
                          <p className="text-gray-300 mb-6">
                            {caseStudy.description}
                          </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                          <h4 className="font-semibold text-[#FFB703] mb-3">Key Results:</h4>
                          <ul className="space-y-2 mb-6">
                            {caseStudy.results.map((result, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFB703] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-300">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </RevealOnScroll>

                        <RevealOnScroll delay={300}>
                          <AnimatedButton className="bg-[#FFB703] text-black hover:bg-yellow-400 transition-colors">
                            Read Full Case Study
                          </AnimatedButton>
                        </RevealOnScroll>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
