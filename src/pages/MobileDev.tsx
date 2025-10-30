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
                <span className="text-blue-300">Mobile App Development</span>
              </div>

              {/* Hero Content */}
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Custom <span className="text-blue-400">mobile app development</span> services
              </h1>

              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                At Oditech Global, we create innovative mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our expert team develops native, hybrid, and cross-platform apps that drive business growth and user engagement.
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
          <span className="text-blue-500">mobile app development?</span>
        </h1>

        <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
          Our experienced developers create mobile applications that are not only visually appealing but also highly functional, secure, and optimized for performance. We focus on delivering solutions that drive business growth and enhance user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Native Performance
            </h2>
            <p>Apps that leverage platform-specific features for optimal performance.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Cross-Platform Compatibility
            </h2>
            <p>Single codebase solutions that work seamlessly across multiple platforms.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              App Store Optimization
            </h2>
            <p>ASO strategies to improve app visibility and downloads.</p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Services Section
const MobileDevServices = () => {
  const [activeTab, setActiveTab] = useState("ios");

  const services = [
    {
      id: "ios",
      title: "iOS Development",
      icon: <IosIcon />,
      content: {
        title: "iOS Development",
        description: "Native iOS applications built with Swift and Objective-C for optimal performance on Apple devices.",
        items: [
          "Swift/Objective-C development",
          "iOS UI/UX design",
          "App Store submission",
          "Performance optimization",
          "Apple guidelines compliance"
        ],
        link: "iOS development services ›",
        image: "/ios-dev.webp"
      }
    },
    {
      id: "android",
      title: "Android Development",
      icon: <AndroidIcon />,
      content: {
        title: "Android Development",
        description: "Native Android applications using Kotlin and Java for the vast Android ecosystem.",
        items: [
          "Kotlin/Java development",
          "Android UI/UX design",
          "Google Play Store submission",
          "Device compatibility testing",
          "Material Design implementation"
        ],
        link: "Android development services ›",
        image: "/android-dev.webp"
      }
    },
    {
      id: "cross",
      title: "Cross-Platform Development",
      icon: <CrossIcon />,
      content: {
        title: "Cross-Platform Development",
        description: "Efficient solutions using React Native and Flutter for multiple platforms from single codebase.",
        items: [
          "React Native development",
          "Flutter development",
          "Code sharing optimization",
          "Platform-specific features",
          "Unified deployment"
        ],
        link: "Cross-platform services ›",
        image: "/cross-platform.webp"
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id='services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Mobile App Development
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
const IosIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="16" y="8" width="32" height="48" rx="8" />
    <circle cx="32" cy="44" r="2" fill="currentColor" />
    <rect x="24" y="16" width="16" height="24" rx="2" fill="currentColor" opacity="0.3" />
  </svg>
);

const AndroidIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 12L16 20H48L44 12" />
    <rect x="12" y="20" width="40" height="32" rx="4" />
    <circle cx="24" cy="36" r="2" fill="currentColor" />
    <circle cx="40" cy="36" r="2" fill="currentColor" />
    <rect x="28" y="44" width="8" height="4" rx="2" fill="currentColor" />
  </svg>
);

const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="48" height="48" rx="4" />
    <rect x="16" y="16" width="16" height="16" rx="2" fill="currentColor" opacity="0.3" />
    <rect x="32" y="32" width="16" height="16" rx="2" fill="currentColor" opacity="0.3" />
    <path d="M16 32L32 16" stroke="currentColor" strokeWidth="2" />
    <path d="M32 48L48 32" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <IntegrationIcon />,
      title: 'API Integrations',
      description: 'Seamless integration with third-party services, payment gateways, and backend systems.'
    },
    {
      icon: <SecurityIcon />,
      title: 'Security & Privacy',
      description: 'Advanced security measures and data protection to safeguard user information.'
    },
    {
      icon: <PerformanceIcon />,
      title: 'Performance Optimization',
      description: 'Optimized code and efficient resource management for smooth app performance.'
    },
    {
      icon: <OfflineIcon />,
      title: 'Offline Functionality',
      description: 'Apps that work offline and sync data when connectivity is restored.'
    },
    {
      icon: <PushIcon />,
      title: 'Push Notifications',
      description: 'Engaging push notifications to keep users informed and engaged.'
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Analytics Integration',
      description: 'Built-in analytics to track user behavior and app performance metrics.'
    }
  ];

  return (
    <RevealOnScroll>
    <section id='features' className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our mobile app development <span className="text-blue-500">features</span>
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

const OfflineIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M20 20L25 25L40 15" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 35L50 40L55 35" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 35L10 40L15 35" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 45L35 50L40 45" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PushIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30H40V45H20V30Z" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M25 30V20C25 17.79 26.79 16 29 16H31C33.21 16 35 17.79 35 20V30" stroke="#0080FF" strokeWidth="2" />
    <circle cx="30" cy="48" r="3" fill="#0080FF" />
    <path d="M35 20H40C41.1 20 42 20.9 42 22V26" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="35" width="8" height="15" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="22" y="25" width="8" height="25" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="34" y="15" width="8" height="35" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="46" y="20" width="8" height="30" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <line x1="10" y1="40" x2="54" y2="40" stroke="#0080FF" strokeWidth="2" />
  </svg>
);

// Tech Stack Section
const TechStackSection = () => {
  const techStack = [
    {
      category: "Native Development",
      technologies: [
        { name: "Swift", logo: "/swift.svg" },
        { name: "Kotlin", logo: "/kotlin.svg" },
        { name: "Java", logo: "/java.svg" },
        { name: "Objective-C", logo: "/objc.svg" }
      ]
    },
    {
      category: "Cross-Platform",
      technologies: [
        { name: "React Native", logo: "/reactjs.svg" },
        { name: "Flutter", logo: "/flutter.svg" },
        { name: "Xamarin", logo: "/xamarin.svg" },
        { name: "Ionic", logo: "/ionic.svg" }
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
      question: 'How long does it take to develop a mobile app?',
      answer: (
        <>
          <p>Development time varies by complexity. A simple app takes 2-3 months, while complex apps may take 6-12 months including testing and deployment.</p>
        </>
      )
    },
    {
      question: 'Do you develop apps for both iOS and Android?',
      answer: (
        <>
          <p>Yes, we develop native apps for both platforms and cross-platform solutions that work on both iOS and Android simultaneously.</p>
        </>
      )
    },
    {
      question: 'Can you help with app store submission?',
      answer: (
        <>
          <p>Absolutely! We handle the entire submission process for both Apple App Store and Google Play Store, ensuring compliance with all guidelines.</p>
        </>
      )
    },
    {
      question: 'Do you provide app maintenance services?',
      answer: (
        <>
          <p>Yes, we offer ongoing maintenance packages including updates, bug fixes, feature enhancements, and performance monitoring.</p>
        </>
      )
    },
    {
      question: 'What is your pricing model for mobile app development?',
      answer: (
        <>
          <p>We offer both fixed-price and hourly pricing models depending on project scope and requirements. Contact us for a detailed quote.</p>
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
const MobileDev = () => {
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
          <MobileDevServices />
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

export default MobileDev;
