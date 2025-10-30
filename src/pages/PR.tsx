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
                <span className="text-blue-300">PR & Reputation Management</span>
              </div>

              {/* Hero Content */}
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                PR & <span className="text-blue-400">Reputation Management</span> services
              </h1>

              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                At Oditech Global, we specialize in protecting and enhancing your brand's reputation through comprehensive PR services. Our expert team excels in crisis communications, swiftly addressing and mitigating potential threats to your brand's image.
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
          <span className="text-blue-500">PR & Reputation Management?</span>
        </h1>

        <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
          Our PR experts develop tailored reputation management strategies that proactively build trust and credibility with your audience. We ensure your brand maintains a strong, positive presence in any scenario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Crisis Communications
            </h2>
            <p>Swiftly addressing and mitigating potential threats to your brand's image.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Media Relations
            </h2>
            <p>Building strong relationships with media outlets for positive coverage.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Stakeholder Engagement
            </h2>
            <p>Effective communication with all stakeholders to maintain trust.</p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Services Section
const PRServices = () => {
  const [activeTab, setActiveTab] = useState("crisis");

  const services = [
    {
      id: "crisis",
      title: "Crisis Communications",
      icon: <CrisisIcon />,
      content: {
        title: "Crisis Communications",
        description: "Swift and effective crisis management to protect your brand's reputation.",
        items: [
          "24/7 crisis monitoring",
          "Rapid response strategies",
          "Stakeholder communication",
          "Damage control planning"
        ],
        link: "Crisis services ›",
        image: "/crisis-comm.webp"
      }
    },
    {
      id: "media",
      title: "Media Relations",
      icon: <MediaIcon />,
      content: {
        title: "Media Relations",
        description: "Building and maintaining strong relationships with media outlets.",
        items: [
          "Press release distribution",
          "Media kit development",
          "Journalist networking",
          "Story pitching"
        ],
        link: "Media services ›",
        image: "/media-relations.webp"
      }
    },
    {
      id: "reputation",
      title: "Reputation Management",
      icon: <ReputationIcon />,
      content: {
        title: "Reputation Management",
        description: "Proactive strategies to build and maintain positive brand perception.",
        items: [
          "Online reputation monitoring",
          "Review management",
          "Brand storytelling",
          "Influencer partnerships"
        ],
        link: "Reputation services ›",
        image: "/reputation-mgmt.webp"
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id='services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          PR & Reputation Management
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
const CrisisIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M32 4v8M32 52v8M16 16h32M16 32h32M16 48h32" />
    <circle cx="32" cy="32" r="20" />
    <path d="M22 22l20 20M42 22l-20 20" />
  </svg>
);

const MediaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="32" rx="4" />
    <circle cx="32" cy="28" r="8" />
    <path d="M16 44h32" />
    <circle cx="24" cy="48" r="2" />
    <circle cx="32" cy="48" r="2" />
    <circle cx="40" cy="48" r="2" />
  </svg>
);

const ReputationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M32 8l12 24h24l-20 16 8 24L32 48 12 72l8-24L4 32h24z" />
  </svg>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <MonitoringIcon />,
      title: 'Reputation Monitoring',
      description: 'Continuous monitoring of your brands online presence and reputation.'
    },
    {
      icon: <StrategyIcon />,
      title: 'Strategic Planning',
      description: 'Comprehensive PR strategies tailored to your brands needs.'
    },
    {
      icon: <CommunicationIcon />,
      title: 'Stakeholder Communication',
      description: 'Effective communication strategies for all stakeholders.'
    },
    {
      icon: <CrisisIcon />,
      title: 'Crisis Management',
      description: 'Rapid response and mitigation strategies for reputation threats.'
    },
    {
      icon: <MediaIcon />,
      title: 'Media Relations',
      description: 'Building and maintaining relationships with media outlets.'
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Performance Analytics',
      description: 'Measuring the impact of PR efforts on brand reputation.'
    }
  ];

  return (
    <RevealOnScroll>
    <section id='features' className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our PR & reputation management <span className="text-blue-500">features</span>
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
const MonitoringIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M30 16V30L38 38" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="30" cy="30" r="3" fill="#0080FF" fillOpacity="0.5" />
    <path d="M30 16V20" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 22L42 18" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M44 30H40" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 30H18" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 22L18 18" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const StrategyIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="44" height="36" rx="4" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="16" y="20" width="28" height="6" rx="1" fill="#0080FF" fillOpacity="0.3" />
    <rect x="16" y="30" width="28" height="6" rx="1" fill="#0080FF" fillOpacity="0.3" />
    <circle cx="22" cy="23" r="2" fill="#0080FF" />
    <circle cx="30" cy="23" r="2" fill="#0080FF" />
    <circle cx="38" cy="23" r="2" fill="#0080FF" />
    <circle cx="22" cy="33" r="2" fill="#0080FF" />
    <circle cx="30" cy="33" r="2" fill="#0080FF" />
    <circle cx="38" cy="33" r="2" fill="#0080FF" />
  </svg>
);

const CommunicationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M30 14C22.3 14 16 20.3 16 28C16 32.4 18.1 36.3 21.4 38.9L19.6 46.4L27.1 44.6C28.4 44.8 29.7 45 31 45C38.7 45 45 38.7 45 31C45 23.3 38.7 17 31 17" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="30" r="3" fill="#0080FF" />
    <path d="M26 26L34 34" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="44" height="36" rx="4" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M16 36L24 28L32 32L44 20" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="36" r="2" fill="#0080FF" />
    <circle cx="24" cy="28" r="2" fill="#0080FF" />
    <circle cx="32" cy="32" r="2" fill="#0080FF" />
    <circle cx="44" cy="20" r="2" fill="#0080FF" />
  </svg>
);

// Tech Stack Section
const TechStackSection = () => {
  const techStack = [
    {
      category: "PR Tools",
      technologies: [
        { name: "Google Alerts", logo: "/google-alerts.svg" },
        { name: "Hootsuite", logo: "/hootsuite.svg" },
        { name: "Meltwater", logo: "/meltwater.svg" },
        { name: "Cision", logo: "/cision.svg" }
      ]
    },
    {
      category: "Analytics Platforms",
      technologies: [
        { name: "Google Analytics", logo: "/google-analytics.svg" },
        { name: "Brandwatch", logo: "/brandwatch.svg" },
        { name: "Sprout Social", logo: "/sprout-social.svg" },
        { name: "Mention", logo: "/mention.svg" }
      ]
    }
  ];

  return (
    <RevealOnScroll>
    <section id="tech-stack" className="w-full py-16 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-blue-500">Tools & platforms</span> we use
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
      question: 'How quickly can you respond to a PR crisis?',
      answer: (
        <>
          <p>We provide 24/7 crisis monitoring and can initiate response strategies within hours of detecting an issue.</p>
        </>
      )
    },
    {
      question: 'What types of PR services do you offer?',
      answer: (
        <>
          <p>We offer crisis communications, media relations, reputation management, stakeholder engagement, and strategic PR planning.</p>
        </>
      )
    },
    {
      question: 'How do you measure PR success?',
      answer: (
        <>
          <p>We track media coverage, sentiment analysis, brand mentions, and stakeholder feedback to measure PR campaign effectiveness.</p>
        </>
      )
    },
    {
      question: 'Can you help with international PR?',
      answer: (
        <>
          <p>Yes, we have experience managing PR campaigns across multiple countries and can adapt strategies for international audiences.</p>
        </>
      )
    },
    {
      question: 'What is your typical PR campaign timeline?',
      answer: (
        <>
          <p>Campaign timelines vary, but most PR initiatives span 3-6 months with ongoing monitoring and adjustments as needed.</p>
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
const PR = () => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <PRServices />
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

export default PR;
