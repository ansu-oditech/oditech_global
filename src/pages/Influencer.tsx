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
                <span className="text-blue-300">Influencer & Social Media Management</span>
              </div>

              {/* Hero Content */}
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Influencer & <span className="text-blue-400">Social Media Management</span> services
              </h1>

              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                At Oditech Global, we connect brands with authentic influencers and manage comprehensive social media strategies that drive engagement, build communities, and boost brand visibility across all platforms.
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
          <span className="text-blue-500">Influencer & Social Media Management?</span>
        </h1>

        <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
          Our expert team leverages influencer partnerships and strategic social media management to amplify your brand's reach, foster authentic connections, and drive meaningful engagement with your target audience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Influencer Partnerships
            </h2>
            <p>Connecting brands with authentic influencers who align with your values and audience.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Content Strategy
            </h2>
            <p>Developing engaging content calendars that resonate with your followers.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Community Building
            </h2>
            <p>Fostering loyal communities through consistent engagement and interaction.</p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Services Section
const InfluencerServices = () => {
  const [activeTab, setActiveTab] = useState("influencer");

  const services = [
    {
      id: "influencer",
      title: "Influencer Marketing",
      icon: <InfluencerIcon />,
      content: {
        title: "Influencer Marketing",
        description: "Strategic partnerships with influencers to amplify your brand's message and reach new audiences.",
        items: [
          "Influencer identification and vetting",
          "Campaign planning and execution",
          "Performance tracking and analytics",
          "ROI measurement and reporting"
        ],
        link: "Influencer services ›",
        image: "/influencer-marketing.webp"
      }
    },
    {
      id: "social",
      title: "Social Media Management",
      icon: <SocialIcon />,
      content: {
        title: "Social Media Management",
        description: "Comprehensive management of your social media presence across all platforms.",
        items: [
          "Content creation and scheduling",
          "Community engagement",
          "Social media advertising",
          "Analytics and reporting"
        ],
        link: "Social media services ›",
        image: "/social-media-mgmt.webp"
      }
    },
    {
      id: "strategy",
      title: "Social Strategy",
      icon: <StrategyIcon />,
      content: {
        title: "Social Strategy",
        description: "Data-driven strategies to maximize your social media impact and achieve business goals.",
        items: [
          "Audience analysis and insights",
          "Platform-specific strategies",
          "Competitor analysis",
          "Trend monitoring"
        ],
        link: "Strategy services ›",
        image: "/social-strategy.webp"
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id='services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Influencer & Social Media Management
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
const InfluencerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="20" r="8" />
    <path d="M16 48c0-8.8 7.2-16 16-16s16 7.2 16 16" />
    <circle cx="24" cy="16" r="2" fill="currentColor" />
    <circle cx="40" cy="16" r="2" fill="currentColor" />
    <path d="M20 32l8 8 16-16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SocialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="40" rx="4" />
    <circle cx="20" cy="20" r="3" fill="currentColor" />
    <circle cx="32" cy="20" r="3" fill="currentColor" />
    <circle cx="44" cy="20" r="3" fill="currentColor" />
    <rect x="16" y="28" width="32" height="4" rx="2" />
    <rect x="16" y="36" width="24" height="4" rx="2" />
    <circle cx="20" cy="44" r="2" fill="currentColor" />
    <circle cx="32" cy="44" r="2" fill="currentColor" />
  </svg>
);

const StrategyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="40" rx="4" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="16" y="20" width="32" height="6" rx="1" fill="#0080FF" fillOpacity="0.3" />
    <rect x="16" y="30" width="32" height="6" rx="1" fill="#0080FF" fillOpacity="0.3" />
    <circle cx="22" cy="23" r="2" fill="#0080FF" />
    <circle cx="30" cy="23" r="2" fill="#0080FF" />
    <circle cx="38" cy="23" r="2" fill="#0080FF" />
    <circle cx="22" cy="33" r="2" fill="#0080FF" />
    <circle cx="30" cy="33" r="2" fill="#0080FF" />
    <circle cx="38" cy="33" r="2" fill="#0080FF" />
  </svg>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <EngagementIcon />,
      title: 'Audience Engagement',
      description: 'Building meaningful connections with your audience through authentic interactions.'
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Performance Analytics',
      description: 'Detailed insights and analytics to measure campaign success and ROI.'
    },
    {
      icon: <ContentIcon />,
      title: 'Content Creation',
      description: 'High-quality, engaging content tailored for each social media platform.'
    },
    {
      icon: <InfluencerIcon />,
      title: 'Influencer Network',
      description: 'Access to a curated network of authentic influencers across various niches.'
    },
    {
      icon: <AdvertisingIcon />,
      title: 'Social Advertising',
      description: 'Targeted advertising campaigns to maximize reach and engagement.'
    },
    {
      icon: <CommunityIcon />,
      title: 'Community Management',
      description: 'Proactive management of online communities and customer relationships.'
    }
  ];

  return (
    <RevealOnScroll>
    <section id='features' className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our influencer & social media <span className="text-blue-500">features</span>
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
const EngagementIcon = () => (
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

const ContentIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="44" height="36" rx="4" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="16" y="20" width="28" height="4" rx="2" fill="#0080FF" fillOpacity="0.3" />
    <rect x="16" y="28" width="28" height="4" rx="2" fill="#0080FF" fillOpacity="0.3" />
    <circle cx="22" cy="22" r="2" fill="#0080FF" />
    <circle cx="30" cy="22" r="2" fill="#0080FF" />
    <circle cx="38" cy="22" r="2" fill="#0080FF" />
  </svg>
);

const AdvertisingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="44" height="36" rx="4" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M16 20L28 16L40 20V32L28 36L16 32V20Z" fill="#0080FF" fillOpacity="0.3" />
    <circle cx="28" cy="26" r="4" fill="#0080FF" />
    <path d="M20 24L24 28" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M36 24L32 28" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CommunityIcon = () => (
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

// Tech Stack Section
const TechStackSection = () => {
  const techStack = [
    {
      category: "Social Media Platforms",
      technologies: [
        { name: "Instagram", logo: "/instagram.svg" },
        { name: "Facebook", logo: "/facebook.svg" },
        { name: "Twitter", logo: "/twitter.svg" },
        { name: "TikTok", logo: "/tiktok.svg" }
      ]
    },
    {
      category: "Analytics & Tools",
      technologies: [
        { name: "Hootsuite", logo: "/hootsuite.svg" },
        { name: "Sprout Social", logo: "/sprout-social.svg" },
        { name: "Google Analytics", logo: "/google-analytics.svg" },
        { name: "Influencer Marketing Hub", logo: "/imh.svg" }
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
      question: 'How do you select influencers for campaigns?',
      answer: (
        <>
          <p>We carefully vet influencers based on audience demographics, engagement rates, content quality, and brand alignment to ensure authentic partnerships.</p>
        </>
      )
    },
    {
      question: 'What social media platforms do you manage?',
      answer: (
        <>
          <p>We manage campaigns across all major platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, YouTube, and emerging platforms.</p>
        </>
      )
    },
    {
      question: 'How do you measure social media ROI?',
      answer: (
        <>
          <p>We track engagement metrics, conversion rates, website traffic, brand mentions, and sales attribution to provide comprehensive ROI analysis.</p>
        </>
      )
    },
    {
      question: 'Can you handle crisis management on social media?',
      answer: (
        <>
          <p>Yes, we provide 24/7 social media monitoring and rapid response strategies for crisis situations to protect and maintain your brand's reputation.</p>
        </>
      )
    },
    {
      question: 'What is your typical campaign timeline?',
      answer: (
        <>
          <p>Campaign timelines vary, but most influencer and social media campaigns span 1-3 months with ongoing community management and optimization.</p>
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
const Influencer = () => {
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
          <InfluencerServices />
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

export default Influencer;
