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
                <span className="text-blue-300">Video Production & Editing</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Professional <span className="text-blue-400">video production</span> & editing services
              </h1>

              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                At Oditech Global, we create compelling video content that engages audiences and drives results. Our expert team handles everything from concept development to final editing, delivering high-quality videos that tell your story effectively.
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
          <span className="text-blue-500">video production?</span>
        </h1>

        <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
          Our experienced video production team creates engaging content that captivates audiences and drives business results. We combine creative storytelling with technical expertise to deliver videos that not only look professional but also achieve your marketing objectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Professional Quality
            </h2>
            <p>High-quality production with professional equipment and expert editing.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Creative Storytelling
            </h2>
            <p>Compelling narratives that engage viewers and communicate your message.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Multi-Platform Optimization
            </h2>
            <p>Videos optimized for all platforms including YouTube, social media, and websites.</p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Services Section
const VideoProductionServices = () => {
  const [activeTab, setActiveTab] = useState("corporate");

  const services = [
    {
      id: "corporate",
      title: "Corporate Videos",
      icon: <CorporateIcon />,
      content: {
        title: "Corporate Video Production",
        description: "Professional corporate videos that showcase your company culture and values.",
        items: [
          "Company overview videos",
          "Product demonstrations",
          "Employee testimonials",
          "Brand stories",
          "Training videos"
        ],
        link: "Corporate video services ›",
        image: "/corporate-video.webp"
      }
    },
    {
      id: "marketing",
      title: "Marketing Videos",
      icon: <MarketingIcon />,
      content: {
        title: "Marketing Video Production",
        description: "Engaging marketing videos designed to drive conversions and brand awareness.",
        items: [
          "Commercial advertisements",
          "Social media videos",
          "Product launch videos",
          "Promotional content",
          "Brand campaigns"
        ],
        link: "Marketing video services ›",
        image: "/marketing-video.webp"
      }
    },
    {
      id: "editing",
      title: "Video Editing",
      icon: <EditingIcon />,
      content: {
        title: "Professional Video Editing",
        description: "Expert editing services to transform raw footage into polished, professional videos.",
        items: [
          "Color grading and correction",
          "Sound design and mixing",
          "Motion graphics",
          "Special effects",
          "Format optimization"
        ],
        link: "Video editing services ›",
        image: "/video-editing.webp"
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id='services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Video Production
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
const CorporateIcon = () => (
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

const MarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="32" r="24" />
    <path d="M20 20L25 25L40 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 35L50 40L55 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 35L10 40L15 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 45L35 50L40 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EditingIcon = () => (
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
      icon: <StorytellingIcon />,
      title: 'Compelling Storytelling',
      description: 'Engaging narratives that connect with your audience and drive emotional responses.'
    },
    {
      icon: <QualityIcon />,
      title: 'Professional Quality',
      description: 'High-definition production with professional equipment and expert post-production.'
    },
    {
      icon: <OptimizationIcon />,
      title: 'Platform Optimization',
      description: 'Videos optimized for different platforms and devices for maximum reach and engagement.'
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Performance Analytics',
      description: 'Detailed analytics and insights to measure video performance and ROI.'
    },
    {
      icon: <DistributionIcon />,
      title: 'Multi-Channel Distribution',
      description: 'Strategic distribution across multiple platforms to maximize audience reach.'
    },
    {
      icon: <SupportIcon />,
      title: 'Ongoing Support',
      description: 'Post-production support and optimization to ensure continued success.'
    }
  ];

  return (
    <RevealOnScroll>
    <section id='features' className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our video production <span className="text-blue-500">features</span>
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
const StorytellingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 15L16 21V32C16 38.5 22.12 44.74 30 47C37.88 44.74 44 38.5 44 32V21L30 15Z" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 30L29 34L36 27" stroke="#0080FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 15L16 21V32C16 38.5 22.12 44.74 30 47C37.88 44.74 44 38.5 44 32V21L30 15Z" fill="#E6F4FF" fillOpacity="0.5" />
  </svg>
);

const QualityIcon = () => (
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

const OptimizationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M20 20L25 25L40 15" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 35L50 40L55 35" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 35L10 40L15 35" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 45L35 50L40 45" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
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

const DistributionIcon = () => (
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

const SupportIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M30 14C22.3 14 16 20.3 16 28C16 32.4 18.1 36.3 21.4 38.9L19.6 46.4L27.1 44.6C28.4 44.8 29.7 45 31 45C38.7 45 45 38.7 45 31C45 23.3 38.7 17 31 17" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="30" r="3" fill="#0080FF" />
    <path d="M26 26L34 34" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Production Process Section
const ProcessSection = () => {
  const processes = [
    {
      step: "01",
      title: "Pre-Production",
      description: "Script writing, storyboarding, location scouting, and casting to ensure a smooth production process."
    },
    {
      step: "02",
      title: "Production",
      description: "Professional filming with high-quality equipment and experienced crew for optimal results."
    },
    {
      step: "03",
      title: "Post-Production",
      description: "Expert editing, color grading, sound design, and special effects to polish your video."
    },
    {
      step: "04",
      title: "Distribution",
      description: "Strategic distribution across multiple platforms with performance tracking and optimization."
    }
  ];

  return (
    <RevealOnScroll>
    <section id="process" className="w-full py-16 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Our <span className="text-blue-500">production process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: 'How long does video production take?',
      answer: (
        <>
          <p>Timeline varies by project complexity. Simple videos take 1-2 weeks, while complex productions may take 4-8 weeks including pre-production, filming, and post-production.</p>
        </>
      )
    },
    {
      question: 'Do you provide script writing services?',
      answer: (
        <>
          <p>Yes, our team includes experienced scriptwriters who can develop compelling scripts tailored to your brand and objectives.</p>
        </>
      )
    },
    {
      question: 'What video formats do you deliver?',
      answer: (
        <>
          <p>We deliver videos in multiple formats optimized for web, social media, and broadcast including MP4, MOV, and various resolutions.</p>
        </>
      )
    },
    {
      question: 'Can you edit existing footage?',
      answer: (
        <>
          <p>Absolutely! We can work with your existing footage or combine it with new content to create professional, engaging videos.</p>
        </>
      )
    },
    {
      question: 'Do you handle music and voiceover?',
      answer: (
        <>
          <p>Yes, we provide music licensing, voiceover recording, and sound design services to complete your video production.</p>
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
const VideoProduction = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'Benefits', id: 'benefits' },
    { title: 'Services', id: 'services' },
    { title: 'Features', id: 'features' },
    { title: 'Production Process', id: 'process' },
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
          <VideoProductionServices />
          <FeaturesSection />
          <ProcessSection />
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

export default VideoProduction;
