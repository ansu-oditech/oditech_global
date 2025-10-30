import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/pages/Services';
import CaseStudies from '@/components/home/CaseStudies';
import Contact from '@/components/home/Contact';
import AnimatedButton from '@/components/ui/AnimatedButton';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

import FAQ from '@/components/ui/faq';

const Index = () => {
  const stats = [
    { value: '01+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '20+', label: 'Team Members' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () { });
      });
    };
  }, []);

  const FAQSection = () => {
  const faqs = [
    {
      question: 'What is the estimated cost for developing a mobile application with your team?',
      answer: (
        <>
          <p>
            The cost of developing a mobile application varies based on factors such as complexity,
            features, and platform. In Bhubaneswar, a basic app creation can cost around
            <span className="font-semibold text-[#FFB703]"> ₹75,000</span> minimum to
            <span className="font-semibold text-[#FFB703]"> ₹20,00,000</span> depending on the
            requirements.
          </p>
        </>
      ),
    },
    {
      question: 'What is the typical timeline for the development of a mobile application?',
      answer: (
        <>
          <p>The development timeline depends on the application's complexity:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>Simple Applications: Approximately 2 to 3 months</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>Moderate Complexity Applications: Around 4 to 6 months</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>Highly Complex Applications: 6 months to over a year</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: 'How do you ensure the quality and reliability of the applications you develop?',
      answer: (
        <>
          <p>We implement a comprehensive quality assurance process that includes:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>
                Rigorous Testing: Functional, performance, security, and usability testing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>
                Continuous Integration and Deployment: To ensure consistent quality throughout
                development
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>
                Adherence to Industry Standards: Following best practices and guidelines
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: 'What development methodologies do you employ in your projects?',
      answer: (
        <>
          <p>We utilize Agile methodologies, specifically Scrum, to facilitate:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>
                Iterative Development: Allowing for flexibility and continuous improvement
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>
                Regular Feedback Loops: Ensuring alignment with client expectations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>
                Efficient Resource Management: Optimizing team collaboration and productivity
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: 'What support and services do you provide post-launch?',
      answer: (
        <>
          <p>Upon completion of the application, we offer:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>Deployment Assistance: Guidance through app store submissions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>Post-Launch Support: Monitoring and addressing any issues that arise</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFB703] mt-1">✓</span>
              <span>
                Maintenance Services: Regular updates and enhancements to ensure long-term
                performance
              </span>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="px-4 mb-16">
      <FAQ faqs={faqs} />
    </section>
  );
};


  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* ✅ Padding only for small screens to prevent hero overlap */}
      <div className="pt-20 md:pt-0">
        <Hero />
        <Services />

        <section id="about" className="section-padding bg-vofox-gray relative overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealOnScroll>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-vofox-blue/20 to-vofox-lightBlue/20 rounded-2xl blur-3xl opacity-50 transform -rotate-6"></div>
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    alt="About Oditech Global"
                    className="w-full rounded-2xl shadow-xl relative z-10"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-4 shadow-lg z-20">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-[#FFB703] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-vofox-darkGray">Trusted Partner</p>
                        <p className="font-semibold text-[#FFB703]">For Your Business</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

             <div>
  <RevealOnScroll delay={100}>
    <span className="inline-block px-3 py-1 rounded-full bg-[#FFB703]/10 text-[#FFB703] font-medium text-sm mb-4">
      About Us
    </span>
  </RevealOnScroll>

  <RevealOnScroll delay={200}>
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
      We're a Team of Tech Enthusiasts Dedicated to Your Success
    </h2>
  </RevealOnScroll>

  <RevealOnScroll delay={300}>
    <p className="text-gray-800 mb-6 leading-relaxed">
      At <span className="text-[#FFB703] font-semibold">Oditech Global</span>, we don't just adapt to the digital age — we define it. 
      With a relentless drive for innovation and a commitment to excellence, we empower businesses 
      to transcend traditional boundaries and achieve unprecedented success. Our approach blends 
      creativity, strategy, and technology to deliver solutions that are not only cutting-edge but 
      also sustainable. Every project we undertake reflects our dedication to helping clients 
      thrive in an ever-evolving digital world.
    </p>
  </RevealOnScroll>

  <RevealOnScroll delay={400}>
    <p className="text-gray-800 mb-8 leading-relaxed">
      With a legacy of excellence, <span className="text-[#FFB703] font-semibold">Oditech Global</span> stands apart through unmatched 
      expertise, innovative solutions, and a deeply client-centric approach. Our experienced team 
      brings together knowledge from diverse domains to deliver comprehensive, tailor-made strategies 
      that ensure success. We believe in building long-term partnerships, understanding each client’s 
      unique needs, and turning challenges into opportunities for growth. Together, we’re not just 
      creating technology — we’re shaping the future of digital transformation.
    </p>
  </RevealOnScroll>

  <RevealOnScroll delay={500}>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <span className="block text-3xl font-bold text-[#FFB703] mb-1">{stat.value}</span>
          <span className="text-sm text-gray-700">{stat.label}</span>
        </div>
      ))}
    </div>
  </RevealOnScroll>

  <RevealOnScroll delay={600}>
    <Link to="/about#team-section">
      <AnimatedButton className="bg-[#FFB703] text-black hover:bg-black hover:text-[#FFB703] transition-all duration-300">
        Learn More About Us
      </AnimatedButton>
    </Link>
  </RevealOnScroll>
</div>

              
            </div>
          </div>
        </section>

        <CaseStudies />
        <Contact />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
