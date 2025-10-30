import { useState, useCallback, useEffect } from 'react';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { CertificationsSection } from '@/components/ui/Certification';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import FAQ from '@/components/ui/faq';
import AnimatedButton from '../components/ui/AnimatedButton';
import { Link } from "react-router-dom";
import ReviewCarousel from '../components/ui/reviewCarousel';

const HeroSection = () => {
    return (
      <>
        {/* Hero Section with integrated breadcrumb - taking full viewport height */}
        <section id="hero" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white">
          <div className="container mx-auto px-6 py-24">
            {/* Breadcrumb Navigation */}
            <div className="max-w-4xl">
              <div className="flex items-center text-sm mb-8">
                <a href="/" className="text-gray-300 hover:text-white">Home</a>
                <span className="mx-2">›</span>
                <a href="/services" className="text-gray-300 hover:text-white">Services</a>
                <span className="mx-2">›</span>
                <span className="text-blue-300">Website Development</span>
              </div>

              {/* Hero Content */}
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Custom <span className="text-blue-400">website development</span> services
              </h1>

              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                At Oditech Global, we deliver powerful web solutions that position your business at the forefront of digital excellence. Our dedicated team of experts designs and develops responsive, SEO-optimised websites that function flawlessly on any device — from smartphones to desktop monitors.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-10 py-4 rounded transition duration-300">
                  Book Free Consultation
                </button>

                

                <div className="ml-0 md:ml-12 mt-6 md:mt-0 flex items-center">
                  <span className="mr-2 text-sm">Clients rate our services</span>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="ml-2 font-semibold">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

// Benefits Section
const BenefitsSection = () => {
  return (
    <RevealOnScroll>
      <section id='benefits' className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-2">
          Why choose Oditech Global for{' '}
          <span className="text-blue-500">website development?</span>
        </h1>

        <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
          Our team comprises experienced developers who create websites that are not only visually appealing but also highly functional, secure, and optimized for performance. We focus on delivering solutions that drive business growth and enhance user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Responsive Design
            </h2>
            <p>Websites that work perfectly on all devices and screen sizes.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              SEO Optimization
            </h2>
            <p>Built-in SEO features to improve search engine rankings and visibility.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Fast Loading Speed
            </h2>
            <p>Optimized code and assets for lightning-fast page load times.</p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Services Section
const WebDevServices = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const services = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <CodeIcon />,
      content: {
        title: "Frontend Development",
        description: "We create stunning, interactive user interfaces using modern frameworks and technologies.",
        items: [
          "React, Angular, Vue.js development",
          "Responsive design implementation",
          "Cross-browser compatibility",
          "Performance optimization",
          "Accessibility compliance"
        ],
        link: "Frontend services ›",
        image: "/frontend-dev.webp"
      }
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <ServerIcon />,
      content: {
        title: "Backend Development",
        description: "Robust server-side solutions that power your web applications.",
        items: [
          "API development and integration",
          "Database design and management",
          "Server configuration and deployment",
          "Security implementation",
          "Scalability planning"
        ],
        link: "Backend services ›",
        image: "/backend-dev.webp"
      }
    },
    {
      id: "cms",
      title: "CMS Development",
      icon: <CmsIcon />,
      content: {
        title: "CMS Development",
        description: "Custom content management systems for easy website administration.",
        items: [
          "Custom CMS solutions",
          "WordPress development",
          "E-commerce platforms",
          "Blog and news systems",
          "Multi-language support"
        ],
        link: "CMS services ›",
        image: "/cms-dev.webp"
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id='services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Website Development
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-16">
          services
        </h2>

        {/* Service Icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-16 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => setActiveTab(service.id)}
            >
              <div className={`w-24 h-24 flex items-center justify-center mb-2 rounded-full border ${activeTab === service.id ? 'border-blue-500' : 'border-gray-700'} p-2 group-hover:bg-blue-900/30 transition-all duration-300`}>
                <div className={activeTab === service.id ? 'text-blue-500' : 'text-gray-300 group-hover:text-blue-500'}>
                  {service.icon}
                </div>
              </div>
              <p className={`text-sm font-medium text-center ${activeTab === service.id ? 'text-blue-500' : 'text-gray-300 group-hover:text-blue-400'}`}>
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        {activeService && (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeService.content.title}</h3>
              <p className="mb-6 text-gray-300">{activeService.content.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-6">
                {activeService.content.items.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-500 mr-2">✓</div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              <a href="#" className="text-red-500 hover:underline">{activeService.content.link}</a>
            </div>
            <div className="md:w-1/2">
              <img
                src={activeService.content.image}
                alt={activeService.content.title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Custom SVG Icons
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16,24L4,32l12,8" />
    <path d="M48,24l12,8l-12,8" />
    <path d="M36,12L28,52" />
    <rect x="8" y="12" width="48" height="40" rx="4" strokeDasharray="3,3" />
    <circle cx="16" cy="18" r="2" fill="currentColor" />
    <circle cx="24" cy="18" r="2" fill="currentColor" />
    <circle cx="32" cy="18" r="2" fill="currentColor" />
  </svg>
);

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="40" rx="4" />
    <rect x="12" y="20" width="40" height="8" rx="2" />
    <rect x="12" y="32" width="40" height="8" rx="2" />
    <circle cx="16" cy="24" r="2" fill="currentColor" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
    <circle cx="16" cy="36" r="2" fill="currentColor" />
    <circle cx="24" cy="36" r="2" fill="currentColor" />
  </svg>
);

const CmsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="48" height="48" rx="4" />
    <rect x="16" y="16" width="32" height="6" rx="1" />
    <rect x="16" y="26" width="32" height="6" rx="1" />
    <rect x="16" y="36" width="32" height="6" rx="1" />
    <circle cx="44" cy="21" r="2" fill="currentColor" />
    <circle cx="44" cy="31" r="2" fill="currentColor" />
    <circle cx="44" cy="41" r="2" fill="currentColor" />
  </svg>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <IntegrationIcon />,
      title: 'Third-party integrations',
      description: 'Seamless integration with payment gateways, analytics tools, and other business systems.'
    },
    {
      icon: <SecurityIcon />,
      title: 'Security & SSL',
      description: 'SSL certificates and security measures to protect user data and transactions.'
    },
    {
      icon: <PerformanceIcon />,
      title: 'Performance optimization',
      description: 'Fast loading times and optimized code for better user experience and SEO.'
    },
    {
      icon: <MobileIcon />,
      title: 'Mobile responsiveness',
      description: 'Websites that look and function perfectly on all devices and screen sizes.'
    },
    {
      icon: <SeoIcon />,
      title: 'SEO-friendly',
      description: 'Built with SEO best practices to improve search engine rankings.'
    },
    {
      icon: <SupportIcon />,
      title: 'Ongoing support',
      description: 'Post-launch maintenance and support to keep your website updated and secure.'
    }
  ];

  return (
    <RevealOnScroll>
    <section id='features' className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our website development <span className="text-blue-500">features</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
    </RevealOnScroll>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
      <div className="mb-6 text-blue-500">{icon}</div>
      <h3 className="text-lg font-semibold text-center mb-3">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

// Additional SVG Icons
const IntegrationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="8" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <circle cx="42" cy="18" r="8" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <circle cx="18" cy="42" r="8" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <circle cx="42" cy="42" r="8" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M38 18H22" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18 38V22" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M38 42H22" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 38V22" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="18" cy="18" r="3" fill="#0080FF" />
    <circle cx="42" cy="18" r="3" fill="#0080FF" />
    <circle cx="18" cy="42" r="3" fill="#0080FF" />
    <circle cx="42" cy="42" r="3" fill="#0080FF" />
  </svg>
);

const SecurityIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 15L16 21V32C16 38.5 22.12 44.74 30 47C37.88 44.74 44 38.5 44 32V21L30 15Z" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 30L29 34L36 27" stroke="#0080FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 15L16 21V32C16 38.5 22.12 44.74 30 47C37.88 44.74 44 38.5 44 32V21L30 15Z" fill="#E6F4FF" fillOpacity="0.5" />
  </svg>
);

const PerformanceIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="16" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M30 16V30L38 38" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="30" cy="30" r="3" fill="#0080FF" fillOpacity="0.5" />
    <path d="M30 16V20" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 22L42 18" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M44 30H40" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 30H18" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 22L18 18" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MobileIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="12" width="20" height="36" rx="4" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M20 18H40" stroke="#0080FF" strokeWidth="2" />
    <path d="M20 42H40" stroke="#0080FF" strokeWidth="2" />
    <circle cx="30" cy="45" r="2" fill="#0080FF" />
    <rect x="24" y="22" width="12" height="16" rx="2" fill="#0080FF" fillOpacity="0.3" />
    <path d="M28 16H32" stroke="#0080FF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SeoIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M20 20L25 25L40 15" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 35L50 40L55 35" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 35L10 40L15 35" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 45L35 50L40 45" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SupportIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M30 14C22.3 14 16 20.3 16 28C16 32.4 18.1 36.3 21.4 38.9L19.6 46.4L27.1 44.6C28.4 44.8 29.7 45 31 45C38.7 45 45 38.7 45 31C45 23.3 38.7 17 31 17" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="30" r="3" fill="#0080FF" />
    <path d="M26 26L34 34" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Tech Stack Section
const TechStackSection = () => {
  const techStack = [
    {
      category: "Frontend Technologies",
      technologies: [
        { name: "React", logo: "/reactjs.svg" },
        { name: "Next.js", logo: "/nextjs.svg" },
        { name: "Vue.js", logo: "/vuejs.svg" },
        { name: "Angular", logo: "/angular.svg" }
      ]
    },
    {
      category: "Backend Technologies",
      technologies: [
        { name: "Node.js", logo: "/nodejs.svg" },
        { name: "Python", logo: "/python.svg" },
        { name: ".NET", logo: "/dotnet-logo.svg" },
        { name: "PHP", logo: "/php.svg" }
      ]
    }
  ];

  return (
    <RevealOnScroll>
    <section id="tech-stack" className="w-full py-16 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-blue-500">Tech stack</span> we use
        </h2>

        {techStack.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-60 text-gray-800 font-medium">{category.category}</div>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>

            <div className="flex flex-wrap gap-10 ml-60">
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex flex-col items-center">
                  <img src={tech.logo} alt={tech.name} className="h-12" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </RevealOnScroll>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: 'How long does it take to develop a custom website?',
      answer: (
        <>
          <p>The timeline depends on complexity. A simple website takes 2-4 weeks, while complex e-commerce sites may take 3-6 months.</p>
        </>
      )
    },
    {
      question: 'Do you provide website maintenance services?',
      answer: (
        <>
          <p>Yes, we offer ongoing maintenance packages including updates, security patches, backups, and performance monitoring.</p>
        </>
      )
    },
    {
      question: 'Can you redesign my existing website?',
      answer: (
        <>
          <p>Absolutely! We can redesign your current website while preserving content and improving functionality and design.</p>
        </>
      )
    },
    {
      question: 'Do your websites work on mobile devices?',
      answer: (
        <>
          <p>Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices.</p>
        </>
      )
    },
    {
      question: 'What is your pricing model?',
      answer: (
        <>
          <p>We offer both fixed-price and hourly pricing models depending on project requirements and scope.</p>
        </>
      )
    }
  ];

  return (
    <RevealOnScroll>
    <section id="faq" className="px-4 mb-16">
      <FAQ faqs={faqs} />
    </section>
    </RevealOnScroll>
  );
};

// Main Component
const WebDev = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'Benefits', id: 'benefits' },
    { title: 'Services', id: 'services' },
    { title: 'Features', id: 'features' },
    { title: 'Tech Stack', id: 'tech-stack' },
    { title: 'FAQ', id: 'faq' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of contentsMenu) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 1024 ? 80 : 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Mobile Menu Toggle Button */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Contents Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Contents</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-2"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-3">
            {contentsMenu.map((item, index) => (
              <li
                key={index}
                className={`text-lg p-3 rounded-lg transition-colors cursor-pointer ${activeSection === item.id
                  ? 'bg-blue-100 text-blue-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>

          {/* Close button at bottom */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}

      <HeroSection />

      {/* Main content */}
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-[200%] px-2">
          <BenefitsSection />
          <WebDevServices />
          <FeaturesSection />
          <TechStackSection />
          <Contact />
          <FAQSection />
        </div>

        {/* Table of Contents */}
        <div className="hidden lg:block lg:w-[23%]">
          <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)] overflow-y-auto pt-2">
            <TableOfContents sections={contentsMenu} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebDev;
