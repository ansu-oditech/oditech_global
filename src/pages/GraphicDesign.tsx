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
                <span className="text-blue-300">Graphic Designing</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Professional <span className="text-blue-400">graphic design</span> services
              </h1>

              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                At Oditech Global, we create visually stunning graphics that communicate your message effectively. Our expert designers combine creativity with strategic thinking to produce designs that captivate audiences and drive results.
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
          <span className="text-blue-500">graphic design?</span>
        </h1>

        <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
          Our talented designers create compelling visual content that tells your story and engages your audience. We blend artistic creativity with marketing strategy to deliver designs that not only look great but also achieve your business objectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Creative Excellence
            </h2>
            <p>Innovative designs that stand out and capture attention in crowded markets.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Brand Consistency
            </h2>
            <p>Designs that maintain brand identity across all marketing materials.</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Strategic Approach
            </h2>
            <p>Designs informed by marketing strategy and target audience insights.</p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Services Section
const GraphicDesignServices = () => {
  const [activeTab, setActiveTab] = useState("print");

  const services = [
    {
      id: "print",
      title: "Print Design",
      icon: <PrintIcon />,
      content: {
        title: "Print Design Services",
        description: "Professional print materials that make a lasting impression in the physical world.",
        items: [
          "Brochures and flyers",
          "Business cards",
          "Posters and banners",
          "Magazine layouts",
          "Print-ready files"
        ],
        link: "Print design services ›",
        image: "/print-design.webp"
      }
    },
    {
      id: "digital",
      title: "Digital Design",
      icon: <DigitalIcon />,
      content: {
        title: "Digital Design Services",
        description: "Eye-catching digital graphics optimized for online platforms and social media.",
        items: [
          "Social media graphics",
          "Website graphics",
          "Email templates",
          "Digital advertisements",
          "Infographics"
        ],
        link: "Digital design services ›",
        image: "/digital-design.webp"
      }
    },
    {
      id: "branding",
      title: "Brand Materials",
      icon: <BrandIcon />,
      content: {
        title: "Brand Identity Materials",
        description: "Comprehensive brand materials that strengthen your visual identity.",
        items: [
          "Brand guidelines",
          "Letterheads and envelopes",
          "Presentation templates",
          "Signage design",
          "Brand collateral"
        ],
        link: "Brand materials services ›",
        image: "/brand-materials.webp"
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id='services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Graphic Design
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
const PrintIcon = () => (
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

const DigitalIcon = () => (
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

const BrandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="32" r="24" />
    <path d="M20 20L25 25L40 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 35L50 40L55 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 35L10 40L15 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 45L35 50L40 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <CreativeIcon />,
      title: 'Creative Design Process',
      description: 'Collaborative design process with unlimited revisions and concept development.'
    },
    {
      icon: <VersatileIcon />,
      title: 'Multi-Format Delivery',
      description: 'Designs delivered in all necessary formats for print, web, and digital applications.'
    },
    {
      icon: <BrandIconFeature />,
      title: 'Brand Consistency',
      description: 'Designs that maintain brand consistency across all marketing materials.'
    },
    {
      icon: <ResearchIcon />,
      title: 'Audience Research',
      description: 'Designs informed by target audience research and market analysis.'
    },
    {
      icon: <TypographyIcon />,
      title: 'Typography Expertise',
      description: 'Careful selection of fonts and typography that enhance readability and appeal.'
    },
    {
      icon: <ColorIcon />,
      title: 'Color Psychology',
      description: 'Strategic use of colors that evoke desired emotions and drive engagement.'
    }
  ];

  return (
    <RevealOnScroll>
    <section id='features' className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our graphic design <span className="text-blue-500">features</span>
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
const CreativeIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 15L16 21V32C16 38.5 22.12 44.74 30 47C37.88 44.74 44 38.5 44 32V21L30 15Z" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 30L29 34L36 27" stroke="#0080FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 15L16 21V32C16 38.5 22.12 44.74 30 47C37.88 44.74 44 38.5 44 32V21L30 15Z" fill="#E6F4FF" fillOpacity="0.5" />
  </svg>
);

const VersatileIcon = () => (
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

const BrandIconFeature = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M20 20L25 25L40 15" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 35L50 40L55 35" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 35L10 40L15 35" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 45L35 50L40 45" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ResearchIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="35" width="8" height="15" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="22" y="25" width="8" height="25" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="34" y="15" width="8" height="35" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <rect x="46" y="20" width="8" height="30" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <line x1="10" y1="40" x2="54" y2="40" stroke="#0080FF" strokeWidth="2" />
  </svg>
);

const TypographyIcon = () => (
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

const ColorIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0080FF" strokeWidth="2" />
    <path d="M30 14C22.3 14 16 20.3 16 28C16 32.4 18.1 36.3 21.4 38.9L19.6 46.4L27.1 44.6C28.4 44.8 29.7 45 31 45C38.7 45 45 38.7 45 31C45 23.3 38.7 17 31 17" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="30" r="3" fill="#0080FF" />
    <path d="M26 26L34 34" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Design Tools Section
const ToolsSection = () => {
  const tools = [
    {
      category: "Design Software",
      technologies: [
        { name: "Adobe Photoshop", logo: "/photoshop.svg" },
        { name: "Adobe Illustrator", logo: "/illustrator.svg" },
        { name: "Adobe InDesign", logo: "/indesign.svg" },
        { name: "Figma", logo: "/figma.svg" }
      ]
    },
    {
      category: "Creative Tools",
      technologies: [
        { name: "Sketch", logo: "/sketch.svg" },
        { name: "Canva", logo: "/canva.svg" },
        { name: "Affinity Designer", logo: "/affinity.svg" },
        { name: "CorelDRAW", logo: "/coreldraw.svg" }
      ]
    }
  ];

  return (
    <RevealOnScroll>
    <section id="tools" className="w-full py-16 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-blue-500">Design tools</span> we use
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
      question: 'How many design concepts do you provide?',
      answer: (
        <>
          <p>We provide 2-3 initial design concepts for each project. Each concept includes variations and we offer unlimited revisions until you're completely satisfied.</p>
        </>
      )
    },
    {
      question: 'What file formats do you deliver?',
      answer: (
        <>
          <p>We deliver designs in all necessary formats including AI, EPS, PDF, PNG, JPG, and SVG for both print and digital use.</p>
        </>
      )
    },
    {
      question: 'Do you provide source files?',
      answer: (
        <>
          <p>Yes, we provide all source files so you can make future edits if needed. We also include usage guidelines for each design.</p>
        </>
      )
    },
    {
      question: 'How long does the design process take?',
      answer: (
        <>
          <p>The timeline varies by project complexity. Simple designs take 3-5 days, while complex projects may take 2-4 weeks including revisions.</p>
        </>
      )
    },
    {
      question: 'Can you work with existing brand guidelines?',
      answer: (
        <>
          <p>Absolutely! We can work within your existing brand guidelines or help develop new ones to ensure consistency across all materials.</p>
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
const GraphicDesign = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'Benefits', id: 'benefits' },
    { title: 'Services', id: 'services' },
    { title: 'Features', id: 'features' },
    { title: 'Design Tools', id: 'tools' },
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
          <GraphicDesignServices />
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

export default GraphicDesign;
