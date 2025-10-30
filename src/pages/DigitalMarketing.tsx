import { useState, useCallback, useEffect } from 'react';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import FAQ from '@/components/ui/faq';

const HeroSection = () => {
    return (
      <>
        <section id="hero" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white">
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl">
              <div className="flex items-center text-sm mb-8">
                <a href="/" className="text-gray-300 hover:text-white">Home</a>
                <span className="mx-2">›</span>
                <a href="/services" className="text-gray-300 hover:text-white">Services</a>
                <span className="mx-2">›</span>
                <span className="text-blue-300">Digital Marketing & Online Advertising</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Digital <span className="text-blue-400">marketing & online advertising</span> services
              </h1>

              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                At Oditech Global, we create comprehensive digital marketing strategies that drive traffic, increase conversions, and boost your online presence. Our data-driven approach combines SEO, PPC, social media, and content marketing to deliver measurable results.
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
          <span className="text-blue-500">digital marketing?</span>
        </h1>

        <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
          Our experienced digital marketing team delivers results-driven strategies that increase brand visibility, drive qualified traffic, and boost conversions. We use advanced analytics and cutting-edge techniques to maximize your ROI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Data-Driven Approach
            </h2>
            <p>Strategies based on analytics and insights for optimal results.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Multi-Channel Campaigns
            </h2>
            <p>Integrated campaigns across all digital platforms and channels.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Measurable ROI
            </h2>
            <p>Trackable results with detailed reporting and performance metrics.</p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Services Section
const DigitalMarketingServices = () => {
  const [activeTab, setActiveTab] = useState("seo");

  const services = [
    {
      id: "seo",
      title: "SEO Services",
      icon: <SeoIcon />,
      content: {
        title: "Search Engine Optimization",
        description: "Improve your search rankings and drive organic traffic with our comprehensive SEO strategies.",
        items: [
          "Keyword research and analysis",
          "On-page optimization",
          "Technical SEO audits",
          "Link building strategies",
          "Local SEO optimization"
        ],
        link: "SEO services ›",
        image: "/seo-services.webp"
      }
    },
    {
      id: "ppc",
      title: "PPC Advertising",
      icon: <PpcIcon />,
      content: {
        title: "Pay-Per-Click Advertising",
        description: "Targeted PPC campaigns on Google Ads, Bing Ads, and social media platforms.",
        items: [
          "Google Ads management",
          "Facebook & Instagram Ads",
          "Campaign optimization",
          "A/B testing",
          "Conversion tracking"
        ],
        link: "PPC services ›",
        image: "/ppc-services.webp"
      }
    },
    {
      id: "social",
      title: "Social Media Marketing",
      icon: <SocialIcon />,
      content: {
        title: "Social Media Marketing",
        description: "Build brand awareness and engage your audience across social media platforms.",
        items: [
          "Social media strategy",
          "Content creation",
          "Community management",
          "Influencer partnerships",
          "Social media advertising"
        ],
        link: "Social media services ›",
        image: "/social-media.webp"
      }
    },
    {
      id: "content",
      title: "Content Marketing",
      icon: <ContentIcon />,
      content: {
        title: "Content Marketing",
        description: "Create valuable content that attracts, engages, and converts your target audience.",
        items: [
          "Content strategy development",
          "Blog writing and management",
          "Video content creation",
          "Email marketing campaigns",
          "Content distribution"
        ],
        link: "Content marketing services ›",
        image: "/content-marketing.webp"
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id='services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Digital Marketing
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-16">
          services
        </h2>

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
const SeoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="32" r="24" />
    <path d="M20 20L25 25L40 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 35L50 40L55 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 35L10 40L15 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 45L35 50L40 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PpcIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="16" width="48" height="32" rx="4" />
    <path d="M8 24H56" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="20" r="2" fill="currentColor" />
    <circle cx="24" cy="20" r="2" fill="currentColor" />
    <circle cx="32" cy="20" r="2" fill="currentColor" />
    <path d="M16 32H32" stroke="currentColor" strokeWidth="2" />
    <path d="M16 36H40" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SocialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="6" />
    <circle cx="44" cy="20" r="6" />
    <circle cx="20" cy="44" r="6" />
    <circle cx="44" cy="44" r="6" />
    <path d="M26 20L38 20" stroke="currentColor" strokeWidth="2" />
    <path d="M20 26L20 38" stroke="currentColor" strokeWidth="2" />
    <path d="M44 26L44 38" stroke="currentColor" strokeWidth="2" />
    <path d="M26 44L38 44" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ContentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="12" y="8" width="40" height="48" rx="2" />
    <line x1="22" y1="20" x2="42" y2="20" />
    <line x1="22" y1="28" x2="42" y2="28" />
    <line x1="22" y1="36" x2="36" y2="36" />
    <circle cx="16" cy="18" r="2" fill="currentColor" />
    <circle cx="16" cy="26" r="2" fill="currentColor" />
    <circle cx="16" cy="34" r="2" fill="currentColor" />
    <path d="M20 46 H44 M20 52 H36" />
  </svg>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <AnalyticsIcon />,
      title: 'Advanced Analytics',
      description: 'Comprehensive tracking and reporting of campaign performance and ROI.'
    },
    {
      icon: <TargetIcon />,
      title: 'Precise Targeting',
      description: 'Reach your ideal audience with advanced targeting and segmentation.'
    },
    {
      icon: <AutomationIcon />,
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes with automated workflows and campaigns.'
    },
    {
      icon: <ConversionIcon />,
      title: 'Conversion Optimization',
      description: 'Optimize your campaigns to maximize conversions and improve ROI.'
    },
    {
      icon: <BrandIcon />,
      title: 'Brand Management',
      description: 'Build and maintain a strong brand presence across all digital channels.'
    },
    {
      icon: <SupportIcon />,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for your digital marketing campaigns.'
    }
  ];

  return (
    <RevealOnScroll>
    <section id='features' className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our digital marketing <span className="text-blue-500">features</span>
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
const AnalyticsIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="35" width="8" height="15" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="22" y="25" width="8" height="25" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="34" y="15" width="8" height="35" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="46" y="20" width="8" height="30" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <line x1="10" y1="40" x2="54" y2="40" stroke="#0080FF" strokeWidth="2" />
  </svg>
);

const TargetIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <circle cx="30" cy="30" r="16" stroke="#0080FF" strokeWidth="2" />
    <circle cx="30" cy="30" r="8" stroke="#0080FF" strokeWidth="2" />
    <line x1="30" y1="6" x2="30" y2="18" stroke="#0080FF" strokeWidth="2" />
    <line x1="30" y1="42" x2="30" y2="54" stroke="#0080FF" strokeWidth="2" />
    <line x1="6" y1="30" x2="18" y2="30" stroke="#0080FF" strokeWidth="2" />
    <line x1="42" y1="30" x2="54" y2="30" stroke="#0080FF" strokeWidth="2" />
  </svg>
);

const AutomationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="17" width="32" height="24" rx="3" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M14 25H46" stroke="#0080FF" strokeWidth="2" />
    <path d="M30 41V45" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 45H38" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="19" cy="21" r="1.5" fill="#0080FF" />
    <circle cx="24" cy="21" r="1.5" fill="#0080FF" />
    <circle cx="29" cy="21" r="1.5" fill="#0080FF" />
    <rect x="18" y="29" width="24" height="8" rx="1" fill="#0080FF" fillOpacity="0.3" />
  </svg>
);

const ConversionIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30H40V45H20V30Z" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M25 30V20C25 17.79 26.79 16 29 16H31C33.21 16 35 17.79 35 20V30" stroke="#0080FF" strokeWidth="2" />
    <circle cx="30" cy="48" r="3" fill="#0080FF" />
    <path d="M35 20H40C41.1 20 42 20.9 42 22V26" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BrandIcon = () => (
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

// Tools & Platforms Section
const ToolsSection = () => {
  const tools = [
    {
      category: "Analytics & Tracking",
      technologies: [
        { name: "Google Analytics", logo: "/google-analytics.svg" },
        { name: "Google Tag Manager", logo: "/gtm.svg" },
        { name: "Hotjar", logo: "/hotjar.svg" },
        { name: "Mixpanel", logo: "/mixpanel.svg" }
      ]
    },
    {
      category: "Advertising Platforms",
      technologies: [
        { name: "Google Ads", logo: "/google-ads.svg" },
        { name: "Facebook Ads", logo: "/facebook-ads.svg" },
        { name: "LinkedIn Ads", logo: "/linkedin-ads.svg" },
        { name: "Twitter Ads", logo: "/twitter-ads.svg" }
      ]
    }
  ];

  return (
    <RevealOnScroll>
    <section id="tools" className="w-full py-16 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-blue-500">Tools & platforms</span> we use
        </h2>

        {tools.map((category, index) => (
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
      question: 'How long does it take to see results from digital marketing?',
      answer: (
        <>
          <p>Results vary by strategy. SEO typically shows results in 3-6 months, while PPC campaigns can show immediate results. Social media marketing results are usually visible within 1-3 months.</p>
        </>
      )
    },
    {
      question: 'What is your pricing model for digital marketing services?',
      answer: (
        <>
          <p>We offer both monthly retainer packages and project-based pricing depending on your needs. Contact us for a customized quote based on your goals and budget.</p>
        </>
      )
    },
    {
      question: 'Do you provide reporting and analytics?',
      answer: (
        <>
          <p>Yes, we provide detailed monthly reports with key metrics, insights, and recommendations. We also offer real-time dashboard access for ongoing campaign monitoring.</p>
        </>
      )
    },
    {
      question: 'Can you manage multiple marketing channels?',
      answer: (
        <>
          <p>Absolutely! We create integrated multi-channel strategies that work together to maximize your reach and ROI across SEO, PPC, social media, and content marketing.</p>
        </>
      )
    },
    {
      question: 'Do you work with local businesses?',
      answer: (
        <>
          <p>Yes, we specialize in local SEO and digital marketing strategies that help local businesses compete effectively in their markets and attract nearby customers.</p>
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
const DigitalMarketing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'Benefits', id: 'benefits' },
    { title: 'Services', id: 'services' },
    { title: 'Features', id: 'features' },
    { title: 'Tools & Platforms', id: 'tools' },
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

      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-[200%] px-2">
          <BenefitsSection />
          <DigitalMarketingServices />
          <FeaturesSection />
          <ToolsSection />
          <Contact />
          <FAQSection />
        </div>

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

export default DigitalMarketing;
