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
                <span className="text-blue-300">Web development</span>
              </div>
  
              {/* Hero Content */}
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Custom <span className="text-blue-400">web development</span> services
              </h1>
  
              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                Using best IT innovations, we develop custom web and mobile applications that increase 
                our customers' competitive advantage and improve their business efficiency.
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

  // Benifits Section
  const BenifitsSection = () => {
    return (
      <RevealOnScroll>
        <section id='benefits' className="py-16 px-4 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2">
            Why make custom web apps with{' '}
            <span className="text-blue-500">Oditech Global?</span>
          </h1>
          
          <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
            Our team, comprising 70% senior web developers, brings extensive experience to businesses on all continents. We
            select our web technology stack with a deep understanding of business needs, focusing on scalability and the
            resources required for maintaining future products.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                30% less time to market with custom web development
              </h2>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                25% reduction in project overhead through web consulting
              </h2>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                90% success in reviving stalled projects through rescue missions
              </h2>
            </div>
          </div>
        </section>
        </RevealOnScroll>
      );
    }

    //Services section
const WebServices = () => {
  const [activeTab, setActiveTab] = useState("rd");

  // Custom SVG Icons
  const FileTextIcon = () => (
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

  const PenToolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M32,50L14,32L39,7c2.8-2.8,7.2-2.8,10,0l0,0c2.8,2.8,2.8,7.2,0,10L32,50z" />
      <circle cx="24" cy="40" r="3" />
      <path d="M14,32L8,56l24-6" />
      <path d="M46 18 L36 28" strokeDasharray="2,2" />
      <path d="M42 14 L50 22" strokeDasharray="2,2" />
    </svg>
  );

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

  const BeakerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16,20V8h32v12c0,5.3,4,23,4,23H12c0,0,4-17.7,4-23z" />
      <path d="M12,43v8c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4v-8" />
      <path d="M24 8 L24 20" strokeDasharray="2,2" />
      <path d="M40 8 L40 20" strokeDasharray="2,2" />
      <circle cx="24" cy="32" r="3" fill="currentColor" />
      <circle cx="40" cy="36" r="2" fill="currentColor" />
      <circle cx="32" cy="28" r="2" fill="currentColor" />
    </svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="32" cy="18" r="8" />
      <path d="M48,52c0-8.8-7.2-16-16-16s-16,7.2-16,16" />
      <circle cx="12" cy="22" r="6" />
      <path d="M22,52c0-6.6-5.4-12-12-12s-6,5.4-6,12" strokeDasharray="2,2" />
      <circle cx="52" cy="22" r="6" />
      <path d="M42,52c0-6.6,5.4-12,12-12s6,5.4,6,12" strokeDasharray="2,2" />
    </svg>
  );

  const services = [
    {
      id: "rd",
      title: "R&D & Analysis",
      icon: <FileTextIcon />,
      content: {
        title: "R&D & Analysis",
        description: "Our R&D and business analyst team study your business and ideas in detail to help you reduce market and technical risks across the entire web app development:",
        items: [
          "validate business idea;",
          "choose the right technology;",
          "get exact project estimation;",
          "create solution vision;",
          "plan the product release;",
          "avoid unplanned costs."
        ],
        link: "Business analysis services ›",
        image: "/RD-Analysis.webp"
      }
    },
    {
      id: "ux",
      title: "UX/UI design",
      icon: <PenToolIcon />,
      content: {
        title: "UX/UI Design",
        description: "Our design team crafts intuitive and engaging user experiences that help your application stand out:",
        items: [
          "user research and analysis;",
          "wireframing and prototyping;",
          "visual design and branding;",
          "usability testing;",
          "responsive design;",
          "design system creation."
        ],
        link: "UX/UI design services ›",
        image: "/App-Design.webp"
      }
    },
    {
      id: "web",
      title: "Web development",
      icon: <CodeIcon />,
      content: {
        title: "Web Development",
        description: "We build robust, scalable web applications using modern technologies and best practices:",
        items: [
          "frontend development;",
          "backend development;",
          "database design;",
          "API integration;",
          "cloud deployment;",
          "performance optimization."
        ],
        link: "Web development services ›",
        image: "/Web-Development.webp"
      }
    },
    {
      id: "qa",
      title: "QA & Testing",
      icon: <BeakerIcon />,
      content: {
        title: "QA & Testing",
        description: "Our quality assurance team ensures your application works flawlessly across all devices and scenarios:",
        items: [
          "manual testing;",
          "automated testing;",
          "performance testing;",
          "security testing;",
          "cross-browser compatibility;",
          "continuous integration."
        ],
        link: "QA services ›",
        image: "/QA-Testing.webp"
      }
    },
    {
      id: "staff",
      title: "Staff augmentation",
      icon: <UsersIcon />,
      content: {
        title: "Staff Augmentation",
        description: "Enhance your team with our skilled professionals to meet project demands and deadlines:",
        items: [
          "developers and engineers;",
          "UX/UI designers;",
          "project managers;",
          "QA specialists;",
          "DevOps engineers;",
          "business analysts."
        ],
        link: "Staff augmentation services ›",
        image: "/Staff-Augmentation.webp"
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id='services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Custom web application development
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

// Web Applications Section
    export function WebApplicationsComponent() {
      const [activeSection, setActiveSection] = useState('Enterprise web apps');
    
      const sections = [
        'Enterprise web apps',
        'MVPs for startups',
        'Internet of Things solutions',
        'SaaS product development',
        'Super apps',
        'Analytics web apps',
        'Progressive Web Apps (PWA)',
      ];
    
      const sectionContent = {
        'Enterprise web apps': {
          title: 'Enterprise web apps',
          description: 'Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment systems etc.',
          buttonText: 'Enterprise development',
        },
        'MVPs for startups': {
          title: 'MVPs for startups',
          description: 'Fast and cost-effective development of minimum viable products for startups and new business initiatives.',
          buttonText: 'MVP development',
        },
        'Internet of Things solutions': {
          title: 'Internet of Things solutions',
          description: 'Connected devices and IoT platforms that help businesses collect and analyze data for better decision-making.',
          buttonText: 'IoT development',
        },
        'SaaS product development': {
          title: 'SaaS product development',
          description: 'End-to-end development of cloud-based software-as-a-service solutions with subscription-based models.',
          buttonText: 'SaaS development',
        },
        'Super apps': {
          title: 'Super apps',
          description: 'All-in-one platforms that combine multiple services and functionalities within a single application.',
          buttonText: 'Super app development',
        },
        'Analytics web apps': {
          title: 'Analytics web apps',
          description: 'Data visualization and analytics tools that transform complex data into actionable insights.',
          buttonText: 'Analytics development',
        },
        'Progressive Web Apps (PWA)': {
          title: 'Progressive Web Apps (PWA)',
          description: 'Web applications that offer native-like experience across devices with offline capabilities.',
          buttonText: 'PWA development',
        },
      };
    
      const handleSectionClick = (section) => {
        setActiveSection(section);
      };
    
      return (
        <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">
              Web <span className="text-blue-500">applications</span> we develop
            </h1>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
              We build high-performance, interactive, and user-friendly web applications that help companies streamline
              operations, improve customer experiences, and scale their businesses. SumatoSoft delivers solutions tailored to each
              Client's needs, ensuring efficiency, security, and long-term success.
            </p>
          </div>
    
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left sidebar */}
            <div className="w-full md:w-64 bg-blue-50">
              {sections.map((section) => (
                <div
                  key={section}
                  className={`p-4 cursor-pointer ${
                    activeSection === section ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section}
                </div>
              ))}
            </div>

            <div className="flex-1 p-4">
              <h2 className="text-2xl font-bold mb-4">{sectionContent[activeSection].title}</h2>
              <p className="text-gray-700 mb-6">{sectionContent[activeSection].description}</p>
              <button className="border border-red-500 text-red-500 px-6 py-2 hover:bg-red-50 transition-colors">
                {sectionContent[activeSection].buttonText}
              </button>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      );
    }

    // Custom Web App Features Section
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
      <div className="mb-6 text-blue-500">{icon}</div>
      <h3 className="text-lg font-semibold text-center mb-3">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

// SVG Icons
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

const CloudIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45 34C45 29.5 41 26 36 26C36 20 33 16 30 16C27 16 24 20 24 26C19 26 15 29.5 15 34" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="15" y="34" width="30" height="10" rx="2" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <line x1="22" y1="38" x2="38" y2="38" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="42" x2="38" y2="42" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="26" r="4" fill="#0080FF" fillOpacity="0.3" />
  </svg>
);

const MicroservicesIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="16" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <circle cx="22" cy="22" r="5" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <circle cx="38" cy="22" r="5" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <circle cx="22" cy="38" r="5" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <circle cx="38" cy="38" r="5" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M25 22H35" stroke="#0080FF" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 38H35" stroke="#0080FF" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 25V35" stroke="#0080FF" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38 25V35" stroke="#0080FF" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="22" cy="22" r="2" fill="#0080FF" />
    <circle cx="38" cy="22" r="2" fill="#0080FF" />
    <circle cx="22" cy="38" r="2" fill="#0080FF" />
    <circle cx="38" cy="38" r="2" fill="#0080FF" />
  </svg>
);

const AccessibilityIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="16" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M30 22V38" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M22 30H38" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="30" cy="30" r="4" fill="#0080FF" fillOpacity="0.5" />
    <circle cx="30" cy="30" r="2" fill="#0080FF" />
  </svg>
);

const StabilityIcon = () => (
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

const PlanningIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="16" width="32" height="28" rx="3" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M14 24H46" stroke="#0080FF" strokeWidth="2" />
    <rect x="20" y="19" width="6" height="2" rx="1" fill="#0080FF" />
    <rect x="34" y="19" width="6" height="2" rx="1" fill="#0080FF" />
    <rect x="20" y="28" width="6" height="2" rx="1" fill="#0080FF" />
    <rect x="34" y="28" width="6" height="2" rx="1" fill="#0080FF" />
    <rect x="20" y="32" width="6" height="2" rx="1" fill="#0080FF" />
    <rect x="34" y="32" width="6" height="2" rx="1" fill="#0080FF" />
    <rect x="20" y="36" width="6" height="2" rx="1" fill="#0080FF" />
    <rect x="34" y="36" width="6" height="2" rx="1" fill="#0080FF" />
    <rect x="20" y="28" width="4" height="10" rx="1" fill="#0080FF" fillOpacity="0.3" />
    <rect x="34" y="28" width="4" height="10" rx="1" fill="#0080FF" fillOpacity="0.3" />
  </svg>
);

const MobileFirstIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="12" width="20" height="36" rx="4" fill="#E6F4FF" stroke="#0080FF" strokeWidth="2" />
    <path d="M20 18H40" stroke="#0080FF" strokeWidth="2" />
    <path d="M20 42H40" stroke="#0080FF" strokeWidth="2" />
    <circle cx="30" cy="45" r="2" fill="#0080FF" />
    <rect x="24" y="22" width="12" height="16" rx="2" fill="#0080FF" fillOpacity="0.3" />
    <path d="M28 16H32" stroke="#0080FF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FastIcon = () => (
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

export function CustomWebAppFeatures() {
  const features = [
    {
      icon: <IntegrationIcon />,
      title: '3rd party services integration',
      description: 'Web applications are easily connected to multiple third-party services, starting with payment gateways and ending with business automation services.'
    },
    {
      icon: <SecurityIcon />,
      title: 'Highest security',
      description: 'We focus on securing our web apps during custom web application development by implementing role-based permission systems, transactions and data-sharing protection.'
    },
    {
      icon: <CloudIcon />,
      title: 'Cloud-based',
      description: 'In addition to the modular architectural approach, cloud-native architecture implies the adoption of cloud services, cutting-edge real-time technologies and leveraging managed services from cloud vendors.'
    },
    {
      icon: <MicroservicesIcon />,
      title: 'Microservices-based applications',
      description: 'We follow a microservices-based architectural approach that creates independent, reusable software modules that communicate via APIs to external and internal services.'
    },
    {
      icon: <AccessibilityIcon />,
      title: 'Universal accessibility',
      description: 'Users can access the functionality and content of custom web applications from anywhere, anytime and from any device. All the data and content are synchronized in real-time.'
    },
    {
      icon: <StabilityIcon />,
      title: 'Stability',
      description: 'Our applications feature an error-free user experience and 99.99% uptime.'
    },
    {
      icon: <PlanningIcon />,
      title: 'Well-planned',
      description: 'We follow a well-established development process that was refined multiple times over more than 10 years. Our processes allow us to deliver projects on time and within budget.'
    },
    {
      icon: <MobileFirstIcon />,
      title: 'Mobile-first approach',
      description: 'We optimize web application interfaces for smartphones, tablets, and other devices, ensuring applications comply with Google\'s mobile-first standards.'
    },
    {
      icon: <FastIcon />,
      title: 'Fast',
      description: 'Every web application goes through rigorous performance testing with interface load times optimized to under one second.'
    }
  ];

  return (
    <RevealOnScroll>
    <section id='features' className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our custom web app development <span className="text-blue-500">features</span>
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
}

export function UXUIComponent() {
  return (
    <RevealOnScroll>
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="p-8 md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Crafting intuitive experience: 
          <span className="text-blue-500"> the role of UX/UI</span>
        </h1>
        
        <p className="text-gray-700 mb-6">
          A great user experience increases the chances of users returning to a
          website by 88%. UX stands for user experience, which is a
          cornerstone of user engagement and loyalty. However, great UX
          requires significant effort and talented developers.
        </p>
        
        <p className="text-gray-700">
          When we provide custom web application development services, our
          UX designers conduct in-depth user research, prepare prototypes,
          mockups, designs, and interfaces, run usability tests, and more. We
          follow industry best practices in accessibility, responsiveness,
          performance, and visuals.
        </p>
      </div>
      
      {/* Right Image */}
      <div className="md:w-1/2">
        <div className="h-full w-full bg-gray-200 relative">
          <img 
            src="/man-designing-websites-high-angle-scaled.jpg" 
            alt="Designer working on UX/UI mockups and wireframes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    </RevealOnScroll>
  );
}

// Consultation Section
const ConsultationSection = () => {
  return (
    <RevealOnScroll>
    <div className=" w-full bg-gradient-to-r from-white via-blue-100 to-pink-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Request a Free Consultation
          </h2>
          <p className="text-gray-700 text-lg">
            Let’s discuss your SaaS goals and how we can help you achieve them.
          </p>
        </div>
        <div>
          <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold py-3 px-8 rounded-none transition-all duration-300 hover:bg-opacity-0 hover:text-[#F63D53] hover:shadow-md transform hover:-translate-y-0.5 border border-[#F63D53] inline-flex items-center justify-center w-fit">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
    </RevealOnScroll>
  );
};

// Recent Works Section Component
const RecentWorksSection = () => {
    const recentWorks = [
        {
            title: 'Custom ERP system for Toyota car dealer',
            description: 'The custom ERP system helps implementation for 20 dealers to manage their supply chain, inventory, sales of cars.',
            image: 'https://assets.techreviewer.co/uploads/portfolio_item/image/47/webp_95e8c487-5aec-4f69-995d-e528cda52bfa.jpg.webp',
            bgColor: 'bg-red-600'
        },
        {
            title: 'Custom AI-powered HRM system',
            description: 'An AI-backed HRM system that boosted OpenAI\'s overall employee management capabilities.',
            image: 'https://img.freepik.com/free-photo/person-surrounded-by-ai-robots-coworkers_23-2151015281.jpg?semt=ais_hybrid',
            bgColor: 'bg-blue-900'
        },
        {
            title: 'Transportation management system',
            description: 'A comprehensive solution for companies operating in the logistics industry.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBwCR4syd5POLiM0-PWIx_mPOUUCJ5uB04Mku2JlNx52gbR0U3HFNGoYTxgRjSgFpK_c&usqp=CAU',
            bgColor: 'bg-purple-700'
        }
    ];

    return (
        <section id="recent-works" className="bg-white py-16 px-4 md:px-6">
            <RevealOnScroll>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Recent Works
                    </h2>
                </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-6">
                {recentWorks.map((work, index) => (
                    <RevealOnScroll key={index} delay={index * 0.2}>
                        <div className={`rounded-lg overflow-hidden shadow-lg ${work.bgColor} text-white`}>
                            <img
                                src={work.image}
                                alt={work.title}
                                loading="lazy"
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">{work.title}</h3>
                                <p className="mb-4">{work.description}</p>
                                <AnimatedButton>
                                    <a href="#" className="flex items-center hover:underline">
                                        Learn More
                                    </a>
                                </AnimatedButton>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
};

export function DevelopmentProcessTimeline() {
  const steps = [
    {
      number: 1,
      title: "Research",
      tasks: [
        "interview stakeholders;",
        "key apps competitor analysis;",
        "marketing and user analysis."
      ]
    },
    {
      number: 2,
      title: "Discovery",
      tasks: [
        "creating of a shared product vision;",
        "development of a requirements specification with release priorities;",
        "preparation of a roadmap with a release timeline;",
        "building of an app architecture."
      ]
    },
    {
      number: 3,
      title: "Design",
      tasks: [
        "development of information architecture;",
        "wireframing;",
        "prototyping;",
        "animation of the interfaces."
      ]
    },
    {
      number: 4,
      title: "Programming",
      tasks: [
        "backend development;",
        "frontend development;",
        "performance optimization;",
        "API integration."
      ]
    },
    {
      number: 5,
      title: "Quality assurance",
      tasks: [
        "functional testing;",
        "non-functional testing;",
        "change testing."
      ]
    },
    {
      number: 6,
      title: "Deployment",
      tasks: [
        "App Store;",
        "Google Play;",
        "software implementation."
      ]
    },
    {
      number: 7,
      title: "Post-release support",
      tasks: [
        "modification of existing functionality;",
        "new features development;",
        "libraries and frameworks update."
      ]
    }
  ];

  return (
    <RevealOnScroll>
    <section id='process' className="min-h-screen bg-[#0a1733] bg-gradient-to-br from-[#0a1733] to-[#11274d] text-white p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Our custom web application development</h1>
        <h2 className="text-3xl font-bold text-center text-[#1e90ff] mb-6">process</h2>
        
        <p className="text-center mb-16 max-w-3xl mx-auto">
          We adhere to a holistic web development approach with a focus on meeting your business requirements and 
          ensuring the software will improve the effectiveness and efficiency of your business.
        </p>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-24 top-10 bottom-10 w-0.5 bg-[#2c3e62]"></div>
          
          {/* Steps */}
          {steps.map((step) => (
            <div 
              key={step.number}
              className="flex mb-16 relative"
              
            >
              {/* Step circle */}
              <div className="flex-shrink-0 mr-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-semibold bg-[#2a3b59] border border-[#3d4d70] transition-colors duration-300">
                  {step.number}
                </div>
              </div>
              
              {/* Step content */}
              <div className="pt-2">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <ul>
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start mb-1.5">
                      <span className="text-[#1e90ff] mr-2">✓</span>
                      <span className="text-gray-200">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
}

// Contact Expert Section
export function ContactExpertSection() {
  return (
    <RevealOnScroll>
    <div className="w-full bg-gradient-to-r from-[#0a1733] via-[#11274d] to-[#321e44] text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold mb-3">Contact an Expert</h2>
          <p className="text-lg text-gray-200">Talk to us about your specific web development needs.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-[#ff4361] hover:bg-[#ff2d4e] transition-colors duration-300 text-white font-medium py-3 px-10 rounded">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
    </RevealOnScroll>
  );
}

// Security Measures Section
export function SecurityMeasuresSection() {
  const securityCategories = [
    {
      title: "Client security",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16 text-blue-500">
          <g fill="currentColor" stroke="none">
            <path d="M32 4L8 14v18c0 11.4 9.4 23.4 24 28 14.6-4.6 24-16.6 24-28V14L32 4zm0 8.6l16 6.7v12.7c0 7.6-6.2 15.6-16 18.7-9.8-3.1-16-11.1-16-18.7V19.3l16-6.7z" fillOpacity="0.8" />
            <path d="M28 30.8l-6-6 2.8-2.8L28 25.2l10.2-10.2 2.8 2.8z" fillOpacity="0.9" />
          </g>
        </svg>
      ),
      items: [
        "signing NDA and SLA from the start;",
        "clear policies that secure your intellectual property;",
        "secure authentication and access control for internal systems;"
      ]
    },
    {
      title: "Data security",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16 text-blue-500">
          <g fill="currentColor" stroke="none">
            <path d="M32 4c-8.8 0-16 3.6-16 8v40c0 4.4 7.2 8 16 8s16-3.6 16-8V12c0-4.4-7.2-8-16-8zm0 8c-6.6 0-12-2.2-12-4s5.4-4 12-4 12 2.2 12 4-5.4 4-12 4zm0 8c-6.6 0-12-2.2-12-4v-4c2.4 1.8 7 3.2 12 3.2s9.6-1.4 12-3.2v4c0 1.8-5.4 4-12 4zm0 8c-6.6 0-12-2.2-12-4v-4c2.4 1.8 7 3.2 12 3.2s9.6-1.4 12-3.2v4c0 1.8-5.4 4-12 4zm0 8c-6.6 0-12-2.2-12-4v-4c2.4 1.8 7 3.2 12 3.2s9.6-1.4 12-3.2v4c0 1.8-5.4 4-12 4zm0 16c-6.6 0-12-2.2-12-4v-4c2.4 1.8 7 3.2 12 3.2s9.6-1.4 12-3.2v4c0 1.8-5.4 4-12 4z" fillOpacity="0.8" />
          </g>
        </svg>
      ),
      items: [
        "adherence to GDPR, HIPAA, SOC 2, ISO 27001, and industry-specific regulations;",
        "AES-256 encryption for data at rest and TLS 1.2+ for data in transit to prevent breaches;",
        "zero trust security model with continuous verification of users, devices, and networks;",
        "automatic data backups and disaster recovery measures;"
      ]
    },
    {
      title: "Application security",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16 text-blue-500">
          <g fill="currentColor" stroke="none">
            <path d="M56 8H8c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h16v8h-4v4h32v-4h-4v-8h16c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zM36 56H28v-8h8v8zm20-12H8V12h48v32z" fillOpacity="0.8" />
            <path d="M18 28l8-8 4 4 10-10 6 6v-8H28l6 6-4 4-4-4-8 8z" fillOpacity="0.9" />
          </g>
        </svg>
      ),
      items: [
        "automated continuous scanning for vulnerabilities and compliance gaps;",
        "real-time DDoS & bot protection;",
        "compliance with OWASP's Top 10 security guidelines;",
        "regular security patches and updates;"
      ]
    },
    {
      title: "Network security",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16 text-blue-500">
          <g fill="currentColor" stroke="none">
            <path d="M32 4C17.6 4 6 15.6 6 30c0 12.3 8.6 22.6 20 25.3V50h12v5.3C49.4 52.6 58 42.3 58 30 58 15.6 46.4 4 32 4zM14 30c0-9.9 8.1-18 18-18s18 8.1 18 18-8.1 18-18 18-18-8.1-18-18z" fillOpacity="0.8" />
            <path d="M32 16c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 24c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" fillOpacity="0.9" />
            <circle cx="32" cy="30" r="4" fillOpacity="1" />
          </g>
        </svg>
      ),
      items: [
        "firewalls & intrusion detection systems (IDS) to detect and block malicious traffic;",
        "network segmentation that allows the isolation of critical services in case of a breach;",
        "encrypted tunnels for secure remote access;"
      ]
    },
    {
      title: "DevSecOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-16 h-16 text-blue-500">
          <g fill="currentColor" stroke="none">
            <path d="M16 4c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.5 0 2.8-.8 3.5-2L28 17.5c-.3.5-.5 1-.5 1.5 0 1.5 1 2.8 2.5 3.3V34c-1.5.5-2.5 1.8-2.5 3.3 0 .5.2 1 .5 1.5L16.7 47.6c-.6-.4-1.4-.6-2.2-.6-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-.9-.3-1.7-.8-2.4l11.6-8.9c.7.8 1.7 1.3 2.8 1.3 2.2 0 4-1.8 4-4 0-.8-.2-1.5-.6-2.1l8.2-10.5c.7.4 1.6.6 2.4.6 2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4c0 .9.3 1.7.8 2.4l-8.2 10.5c-.7-.4-1.6-.6-2.4-.6-.5 0-1 .1-1.5.3V23.2c1.2-.7 2-2 2-3.5 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.5.8 2.8 2 3.5v11c-.5-.2-1-.3-1.5-.3-.8 0-1.6.2-2.2.6L19.2 26c.5-.8.8-1.7.8-2.6 0-1.2-.5-2.3-1.4-3.1L11 13c.6-.8 1-1.8 1-2.9 0-2.3-1.8-4.1-4-4.1z" fillOpacity="0.8" />
          </g>
        </svg>
      ),
      items: [
        "automated security checks in CI/CD pipelines;",
        "implementation of best security practices and regular code reviews;",
        "safeguarding containerized apps against misconfigurations;",
        "logging & real-time security monitoring;"
      ]
    }
  ];

  return (
    <RevealOnScroll>
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          Comprehensive multi-layer <span className="text-blue-500">web security</span>
        </h2>
        <h3 className="text-3xl font-bold text-center text-blue-500 mb-16">
          measures
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {securityCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon Container */}
              <div className="mb-4">
                {category.icon}
              </div>
              
              {/* Category Title */}
              <h4 className="text-xl font-semibold mb-4 text-center">
                {category.title}
              </h4>
              
              {/* List Items */}
              <ul className="w-full">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start mb-3">
                    <span className="text-blue-500 mr-2 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    </RevealOnScroll>
  );
}

// Tech Stack Section
export function TechStackSection() {
  const techStack = [
    {
      category: "Backend development",
      technologies: [
        { name: "Java", logo: "/java.svg" },
        { name: ".NET", logo: "/dotnet-logo.svg" },
        { name: "Ruby", logo: "/rubyrails.svg" },
        { name: "Python", logo: "/python.svg" },
        { name: "Node.js", logo: "/nodejs.svg" },
        { name: "JavaScript", logo: "/javascript.svg" }
      ]
    },
    {
      category: "Frontend development",
      technologies: [
        { name: "React", logo: "/reactjs.svg" },
        { name: "Angular", logo: "/angular.svg" },
        { name: "Next.js", logo: "/nextjs.svg" },
        { name: "Vue.js", logo: "/vuejs.svg" },
        { name: "Bootstrap", logo: "/Bootstrap.png" },
        { name: "jQuery", logo: "/jquery.svg" },
        { name: "Django", logo: "/django.svg" }
      ]
    }
  ];

  return (
    <RevealOnScroll>
    <section id="tech-stack" className="w-full py-16 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-blue-500">Core tech stack</span> we use
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
}

// Engagement Models Component
export function EngagementModels() {
  const [activeTab, setActiveTab] = useState('Outsourcing');
  
  const tabContent = {
    'Outsourcing': 'This is a classic approach in which we take complete responsibility for the entire development process. Our project management team organizes the work for our designers, developers, QA specialists, and other team members. You act as a stakeholder who focuses on strategic goals, communicating with our business analysts on project and business requirements and with our project managers on the project status.',
    'Outstaffing': 'In this model, you gain access to our skilled professionals who work exclusively on your project but remain our employees. You manage the team directly while we handle administrative tasks like payroll and benefits. This gives you full control of the development process while avoiding recruitment and HR responsibilities.',
    'Dedicated team': 'When you need to augment your in-house team, we provide dedicated specialists who work alongside your team. This hybrid approach combines your domain expertise with our technical skills. Our team members integrate with your processes and tools while we manage administrative aspects of their employment.'
  };

  return (
    <RevealOnScroll>
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Web development<br />
          <span className="text-blue-500">engagement models</span>
        </h1>
        
        <p className="text-gray-800 mt-4">
          Depending on your business needs, project scope, and team structure, we offer three flexible cooperation models for our custom web application development services.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left content column */}
        <div className="w-full md:w-3/5">
          <h2 className="text-3xl font-bold mb-6">{activeTab}</h2>
          <p className="text-gray-800 leading-relaxed">
            {tabContent[activeTab]}
          </p>
        </div>
        
        {/* Right tabs column */}
        <div className="w-full md:w-2/5">
          <div className="bg-blue-50 rounded-md overflow-hidden">
            {/* Tab buttons */}
            <div 
              onClick={() => setActiveTab('Outsourcing')}
              className={`py-4 px-6 cursor-pointer ${activeTab === 'Outsourcing' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800'}`}
            >
              Outsourcing
            </div>
            
            <div 
              onClick={() => setActiveTab('Outstaffing')}
              className={`py-4 px-6 cursor-pointer ${activeTab === 'Outstaffing' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800'}`}
            >
              Outstaffing
            </div>
            
            <div 
              onClick={() => setActiveTab('Dedicated team')}
              className={`py-4 px-6 cursor-pointer ${activeTab === 'Dedicated team' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800'}`}
            >
              Dedicated team
            </div>
            
            {/* Red button at bottom */}
            <div className="p-6">
              <button className="text-red-500 font-medium flex items-center hover:underline">
                Engagement models <span className="ml-1">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </RevealOnScroll>
  );
}

// Advanced Tech Grid Component
export function AdvancedTechGrid() {
  const services = [
    {
      title: "Internet of Things (IoT)",
      description: "We develop IoT-enabled web apps that collect, process, and visualize real-time sensor data. Our solutions enable remote monitoring, predictive maintenance, and automated control for industries like manufacturing, healthcare, logistics, and smart cities.",
      linkText: "Internet of Things development ›",
      url: "/iot-development"
    },
    {
      title: "Big Data",
      description: "We design high-performance data processing platforms that handle large-scale datasets for analytics, reporting, and business intelligence. Every business produces an enormous volume of unstructured data, our big data solutions help businesses store, process, and extract insights from these data.",
      linkText: "Big Data development services ›",
      url: "/big-data-services"
    },
    {
      title: "Data Science",
      description: "With deep expertise in the field of data science, we use advanced methods such as statistical models, pattern recognition, and predictive analytics to uncover trends, make forecasts, and identify hidden patterns in data. We integrate data science into business intelligence, financial solutions, customer behavior analysis, and more.",
      linkText: "Data Analytics services ›",
      url: "/data-analytics"
    },
    {
      title: "Artificial Intelligence (AI)",
      description: "We develop multi-purpose AI-powered platforms and integrate AI into existing solutions. Our AI solutions include chatbots, recommendation engines, fraud detection, NLP-powered analytics, and intelligent automation tools.",
      linkText: "AI development services ›",
      url: "/ai-development"
    },
    {
      title: "Machine Learning (ML)",
      description: "We develop robust ML algorithms with self-learning algorithms, setting them for predictive analytics, anomaly detection, and other business needs. Our AI-enhanced data processing systems serve industries like finance, healthcare, and eCommerce.",
      linkText: "ML development services ›",
      url: "/ml-development"
    },
    {
      title: "Blockchain",
      description: "We implement decentralized and secure blockchain solutions for smart contracts, digital identity management, and transparent transaction systems. Our blockchain applications enhance data integrity, security, and trust in financial services, supply chain, and enterprise solutions.",
      linkText: "Blockchain development services ›",
      url: "/blockchain-services"
    }
  ];

  // Function to handle card click
  const handleCardClick = (url) => {
    console.log(`Navigating to: ${url}`);
    // In a real implementation, you would use router navigation here
    // router.push(url) or window.location.href = url
  };

  return (
    <RevealOnScroll>
    <section id='advance-tech' className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-blue-500">Advanced tech</span> we use in web development
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-6 rounded-lg transition-all duration-200 cursor-pointer hover:bg-pink-50 border border-gray-100 shadow-sm"
            onClick={() => handleCardClick(service.url)}
          >
            <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {service.description}
            </p>
            <a className="text-red-500 text-sm font-medium hover:underline">
              {service.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
    </RevealOnScroll>
  );
}

// Industry Specific Grid Component
export function IndustrySpecificGrid() {
  // First row of industries
  const firstRowIndustries = [
    {
      title: "E-learning",
      description: "Bring innovation to the whole educational process with EdTech custom solutions allowing teachers to make learning engaging, and highly efficient. We make user-friendly and easy-to-use eLearning portals with wide sets of functions and possibilities for extension. We develop multipurpose applications: document management systems, learning management platforms, knowledge management, content & digital asset management.",
      linkText: "E-learning development ›",
      url: "/e-learning-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="14" width="44" height="36" rx="2" />
          <line x1="10" y1="22" x2="54" y2="22" />
          <line x1="24" y1="40" x2="40" y2="40" />
          <line x1="24" y1="34" x2="40" y2="34" />
          <line x1="24" y1="28" x2="40" y2="28" />
        </svg>
      )
    },
    {
      title: "E-commerce & Retail",
      description: "Build stronger connections with customers by creating web and mobile e-commerce applications and bringing shopping high-level experience. Our progressive e-commerce applications ensure your business is on 24/7/365 days a year. We develop product catalog management, price optimization, product information management, inventory management and order management systems.",
      linkText: "E-commerce development ›",
      url: "/e-commerce-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 14H18L24 40H46L50 24H20" />
          <circle cx="26" cy="50" r="4" />
          <circle cx="44" cy="50" r="4" />
          <path d="M24 32H46" />
        </svg>
      )
    },
    {
      title: "Transport & Logistics",
      description: "Start boosting your transportation and logistics business with custom web development for freight reservation management, transportation management, and supply chain. We develop complex web applications for inventory management and optimization, fleet management, order management, warehouse management, procurement and vendor management, delivery management.",
      linkText: "Logistics development ›",
      url: "/logistics-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="44" cy="42" r="6" />
          <circle cx="16" cy="42" r="6" />
          <path d="M16 42H44" />
          <path d="M44 42V22H28V42" />
          <path d="M28 22H8V42H16" />
          <path d="M8 32H28" />
        </svg>
      )
    }
  ];

  // Second row of industries
  const secondRowIndustries = [
    {
      title: "Marketing Automation",
      description: "Build effective relationships with clients thanks to marketing automation tools. Optimize your strategy, gather insights, and set new business goals with custom top-notch analytical software.",
      linkText: "MarTech development ›",
      url: "/martech-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="32" cy="32" r="24" />
          <circle cx="32" cy="32" r="16" />
          <circle cx="32" cy="32" r="8" />
          <line x1="32" y1="8" x2="32" y2="16" />
          <line x1="32" y1="48" x2="32" y2="56" />
          <line x1="56" y1="32" x2="48" y2="32" />
          <line x1="16" y1="32" x2="8" y2="32" />
        </svg>
      )
    },
    {
      title: "Healthcare & Lifestyle",
      description: "Develop healthcare & lifestyle services, tools, and systems to provide patients and staff with the up-to-date technological tools to bring healthcare to a new level. Medical inventory management, patient record management systems, and much more.",
      linkText: "Healthcare development ›",
      url: "/healthcare-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 32h34" />
          <path d="M32 15v34" />
          <path d="M22 12c0-4.418 4.477-8 10-8s10 3.582 10 8c0 4.418-4.477 9-10 18-5.523-9-10-13.582-10-18z" />
        </svg>
      )
    },
    {
      title: "Blockchain",
      description: "Empower your business with decentralized blockchain networks that can secure financial operations and your inner data. Imply the state-of-art technology with our custom web development services.",
      linkText: "Blockchain development ›",
      url: "/blockchain-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="10" width="12" height="12" rx="2" />
          <rect x="42" y="10" width="12" height="12" rx="2" />
          <rect x="10" y="42" width="12" height="12" rx="2" />
          <rect x="42" y="42" width="12" height="12" rx="2" />
          <line x1="22" y1="16" x2="42" y2="16" />
          <line x1="22" y1="48" x2="42" y2="48" />
          <line x1="16" y1="22" x2="16" y2="42" />
          <line x1="48" y1="22" x2="48" y2="42" />
          <line x1="22" y1="22" x2="42" y2="42" />
          <line x1="42" y1="22" x2="22" y2="42" />
        </svg>
      )
    }
  ];

  // Additional industries from the second image
  const additionalIndustries = [
    {
      title: "Media & Entertainment",
      description: "Bring an innovative entertainment experience to the audience with the applications which support the advanced and trendy technologies. We develop feature-rich and easily scalable digital content distribution web solutions.",
      linkText: "Media development ›",
      url: "/media-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="16" width="48" height="32" rx="2" />
          <circle cx="32" cy="32" r="8" />
          <path d="M20 16v-4a4 4 0 014-4h16a4 4 0 014 4v4" />
          <path d="M24 48v4a4 4 0 004 4h8a4 4 0 004-4v-4" />
        </svg>
      )
    },
    {
      title: "Fintech",
      description: "Facilitate financial operations with tech-savvy solutions. Our custom solutions are fast, secure, scalable, and can be easily integrated with payment technologies. We develop systems for resource & workload management, risk management, compliance management, and more.",
      linkText: "FinTech development ›",
      url: "/fintech-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="20" width="44" height="30" rx="2" />
          <path d="M20 20v-6a6 6 0 016-6h12a6 6 0 016 6v6" />
          <circle cx="32" cy="34" r="6" />
          <path d="M22 44h20" />
        </svg>
      )
    },
    {
      title: "Travel & Hospitality",
      description: "Present unforgettable user experience of planning, booking, and making trips with your online service to attract and potential users all over the world. Booking management systems, revenue management platforms, property management web applications, guest experience management, and much more.",
      linkText: "Travel systems development ›",
      url: "/travel-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-blue-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="32" cy="32" r="24" />
          <path d="M32 8v48" />
          <path d="M8 32h48" />
          <path d="M32 32l16-16" />
        </svg>
      )
    }
  ];

  // Function to handle card click
  const handleCardClick = (url) => {
    console.log(`Navigating to: ${url}`);
    // In a real implementation, you would use router navigation here
    // router.push(url) or window.location.href = url
  };

  return (
    <RevealOnScroll>
    <section id='industries' className="max-w-6xl mx-auto px-4 py-8 bg-blue-50">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-blue-500">Industry</span>-specific web development
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We specialize in developing multi-integrated, easily customizable, and fully controllable custom web software.
        </p>
      </div>
      
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {firstRowIndustries.map((industry, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg transition-all duration-200 cursor-pointer hover:bg-pink-50 flex flex-col h-full"
            onClick={() => handleCardClick(industry.url)}
          >
            <div className="flex justify-start items-center mb-2">
              {industry.icon}
            </div>
            <h2 className="text-xl font-semibold mb-3">{industry.title}</h2>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">
              {industry.description}
            </p>
            <a className="text-red-500 text-sm font-medium hover:underline mt-auto">
              {industry.linkText}
            </a>
          </div>
        ))}
      </div>
      
      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {secondRowIndustries.map((industry, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg transition-all duration-200 cursor-pointer hover:bg-pink-50 flex flex-col h-full"
            onClick={() => handleCardClick(industry.url)}
          >
            <div className="flex justify-start items-center mb-2">
              {industry.icon}
            </div>
            <h2 className="text-xl font-semibold mb-3">{industry.title}</h2>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">
              {industry.description}
            </p>
            <a className="text-red-500 text-sm font-medium hover:underline mt-auto">
              {industry.linkText}
            </a>
          </div>
        ))}
      </div>
      
      {/* Third row (optional - from second image) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {additionalIndustries.map((industry, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg transition-all duration-200 cursor-pointer hover:bg-pink-50 flex flex-col h-full"
            onClick={() => handleCardClick(industry.url)}
          >
            <div className="flex justify-start items-center mb-2">
              {industry.icon}
            </div>
            <h2 className="text-xl font-semibold mb-3">{industry.title}</h2>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">
              {industry.description}
            </p>
            <a className="text-red-500 text-sm font-medium hover:underline mt-auto">
              {industry.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
    </RevealOnScroll>
  );
}

// Web Development Approach Component
const WebDevelopmentApproach = () => {
  const [activeTab, setActiveTab] = useState('Project scoping');

  const tabs = [
    'Project scoping',
    'Project resource allocation',
    'Project cost estimation',
    'Risk management',
    'Knowledge management & sharing',
    'Code review',
    'Reporting',
    'Post-launch warranty'
  ];

  const tabContent = {
    'Project scoping': {
      title: 'Project scoping',
      description: 'We define clear goals, requirements, and deliverables that align with business needs and expectations.',
      points: [
        'conduct stakeholder interviews and workshops to refine the project vision;',
        'identify business objectives, technical constraints, and success metrics;',
        'develop a detailed project roadmap with key milestones.'
      ]
    },
    'Project resource allocation': {
      title: 'Project resource allocation',
      description: 'Our resource manager assigns the right specialists with the necessary skills and expertise to each phase, avoiding both underqualified and overqualified allocations.',
      points: [
        'build a cross-functional team including developers, designers, QA engineers, and project managers;',
        'define roles, responsibilities, and workflows;',
        'ensure efficient resource distribution to prevent bottlenecks.'
      ]
    },
    'Project cost estimation': {
      title: 'Project cost estimation',
      description: 'We provide accurate, data-driven cost estimates based on extensive research of project requirements and user needs.',
      points: [
        'use of different estimation techniques: expert judgment, analogous estimation, bottom-up estimation, and more;',
        'separate estimation for every phase and effort: development, design, testing, and business analysis;',
        'we prepare the estimation in accordance with the desired project budget and timelines.'
      ]
    },
    'Risk management': {
      title: 'Risk management',
      description: 'We identify, assess, and mitigate risks before they impact project timelines or quality.',
      points: [
        'conduct early risk assessments to identify technical, operational, and business risks;',
        'implement proactive risk mitigation strategies',
        'monitor risks throughout the development lifecycle, adjusting plans as needed.'
      ]
    },
    'Knowledge management & sharing': {
      title: 'Knowledge management & sharing',
      description: 'While providing our custom web application development services, we document all meaningful information about the project, allowing us to easily onboard new developers and transfer knowledge between different development phases.',
      points: [
        'maintain centralized documentation in our internal or Client’s Confluence, Notion, or wikis;',
        'well-established knowledge transfer between specialists to prevent information loss;',
        'regular project syncs and documentation reviews.'
      ]
    },
    'Code review': {
      title: 'Code review',
      description: 'We implement rigorous core reviews to maintain clean, secure, and efficient code.',
      points: [
        'follow industry best practices and coding standards (e.g., SOLID, DRY, KISS);',
        'use automated code analysis tools like SonarQube and ESLint;',
        'our Tech Lead regularly reviews the code.'
      ]
    },
    'Reporting': {
      title: 'Reporting',
      description: 'We ensure transparent collaboration during the whole development process and keep our Clients informed about every aspect of the project development. ',
      points: [
        'the PM provides biweekly reports on development progress, risks, and blockers;',
        'at the end of each development interaction, we provide status updates, QA testing reports, and budget/scope alignment insights;',
        'QA specialists showcase completed work at the start of each sprint for review and feedback.'
      ]
    },
    'Post-launch warranty': {
      title: 'Post-launch warranty',
      description: 'We offer a warranty period to fix unexpected issues and ensure system stability.',
      points: [
        'provide bug fixes, security patches, and performance enhancements post-launch;',
        'offer technical support and monitoring to detect and resolve potential issues;',
        'ensure seamless transitions to long-term support and maintenance if needed.'
      ]
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <RevealOnScroll>
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Our web development <span className="text-blue-500">approach</span></h1>
        <p className="text-sm text-gray-700 max-w-2xl mx-auto">
          We follow a well-established process in our custom web application development and consulting services, perfected
          and refined over a decade to ensure it is capable of delivering high-quality apps on time, within budget, and with
          minimal risk.
        </p>
      </div>

      {/* Main Content - Tabs and Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - Tabs */}
        <div className="w-full md:w-1/3">
          {tabs.map((tab) => (
            <div 
              key={tab}
              className={`py-4 px-6 cursor-pointer ${
                activeTab === tab 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-blue-50 text-gray-700 hover:bg-blue-100'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              <span className="text-sm font-medium">{tab}</span>
            </div>
          ))}
          
          {/* Get in touch button */}
          <div className="py-4 px-6 mt-2 bg-blue-50">
            <button className="text-red-500 text-sm flex items-center">
              Get in touch to find out more 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="w-full md:w-2/3 p-6 bg-white">
          <h2 className="text-xl font-medium mb-4">{tabContent[activeTab].title}</h2>
          <p className="text-sm text-gray-700 mb-4">{tabContent[activeTab].description}</p>
          
          {tabContent[activeTab].points.length > 0 && (
            <ul className="space-y-2">
              {tabContent[activeTab].points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    </RevealOnScroll>
  );
};

// Pricing Model Component
const PricingModel = () => {
  const [activeTab, setActiveTab] = useState("fixed");

  return (
    <RevealOnScroll>
    <section id='pricing' className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        <span className="text-blue-500">Pricing model</span>
        <span className="text-black"> for web development</span>
      </h1>

      <p className="text-center text-gray-700 mb-12">
        The cost of web development varies based on complexity, project scope, necessary integrations, and team
        composition. A simple web app can start at $30,000, while more advanced solutions can exceed $200,000. We
        provide two pricing models for our custom web application development services.
      </p>

      <div className="flex justify-center mb-0">
        <div className="grid grid-cols-2 w-full">
          <button
            className={`flex flex-col items-center justify-center py-4 px-6 border-b-2 ${
              activeTab === "fixed"
                ? "border-blue-500 text-blue-500"
                : "border-gray-200 text-gray-400"
            }`}
            onClick={() => setActiveTab("fixed")}
          >
            <div className="w-16 h-16 mb-2 flex items-center justify-center">
              {/* Fixed Price Icon */}
              <svg 
                className={`w-full h-full ${activeTab === "fixed" ? "text-blue-500" : "text-gray-400"}`}
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M32 12C33.1046 12 34 12.8954 34 14V32H42C43.1046 32 44 32.8954 44 34C44 35.1046 43.1046 36 42 36H30C28.8954 36 28 35.1046 28 34V14C28 12.8954 28.8954 12 30 12H32Z" fill="currentColor" />
                <path d="M22 22L42 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M32 18V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M32 44V46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M44 32L46 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 32L20 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M26 42H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 46H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="42" cy="22" r="8" fill="currentColor" fillOpacity="0.2" />
                <path d="M42 18V22H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M39 26L45 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className={activeTab === "fixed" ? "font-medium" : ""}>Fixed price</span>
          </button>

          <button
            className={`flex flex-col items-center justify-center py-4 px-6 border-b-2 ${
              activeTab === "time"
                ? "border-blue-500 text-blue-500"
                : "border-gray-200 text-gray-400"
            }`}
            onClick={() => setActiveTab("time")}
          >
            <div className="w-16 h-16 mb-2 flex items-center justify-center">
              {/* Time & Materials Icon */}
              <svg 
                className={`w-full h-full ${activeTab === "time" ? "text-blue-500" : "text-gray-400"}`}
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M32 18V32L42 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="42" y="20" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="40" y="36" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="44" y1="24" x2="50" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="44" y1="28" x2="50" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="44" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="32" r="3" fill="currentColor" />
                <line x1="32" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className={activeTab === "time" ? "font-medium" : ""}>Time & Materials</span>
          </button>
        </div>
      </div>

      <div className="pt-8 pb-12">
        {activeTab === "fixed" ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Fixed price</h2>
            <p className="text-gray-700">
              A predefined budget and scope are agreed upon upfront. This model is ideal for
              projects with clearly defined requirements. It offers low financial risks but has
              minimal flexibility for changes. When we start cooperating, we clearly define the
              budget, timelines, and work scope.
            </p>
            <div className="mt-6">
              <a href="#" className="text-red-500 hover:text-red-600 inline-flex items-center">
                Engagement models <span className="ml-1">›</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Time & Materials</h2>
            <p className="text-gray-700">
              Time and Materials is the most popular pricing model. It implies that billing is based on actual hours worked during the reporting period. This model allows greater flexibility in terms of evolving project requirements since the exact scope of work is not fixed. A popular modification of this model is a fixed budget, where we commit to delivering a working app within a fixed budget, but the exact scope and features can be adjusted as long as they fit within the agreed cost constraints.
            </p>
            <div className="mt-6">
              <a href="#" className="text-red-500 hover:text-red-600 inline-flex items-center">
                Engagement models <span className="ml-1">›</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
    </RevealOnScroll>
  );
};

// Year Showcase Component
const YearShowcase = () => {
  const stats = [
    { value: "10+", description: "Developed custom solutions" },
    { value: "25+", description: "States, including Maharashtra" },
    { value: "70%", description: "Senior engineers" },
    { value: "98%", description: "Satisfaction rate" },
    { value: "3+", description: "Years' Client engagement", isWide: true }
  ];

  return (
    <RevealOnScroll>
    <section id='about' className="w-full bg-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left side with heading */}
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold">
            For <span className="text-blue-500">3+ years</span>, we have proudly taken 
            responsibility for your IoT projects!
          </h1>
        </div>
        
        {/* Right side with stats */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${stat.isWide ? "col-span-2 md:col-span-1" : ""}`}
            >
              <span className="text-4xl md:text-5xl font-bold text-gray-800">{stat.value}</span>
              <span className="text-sm md:text-base text-gray-600">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
};

// Certifications Section Component
const CertificationsWrapper = () => {
  return (
    <RevealOnScroll>
      <div className='mb-6 w-auto'>
          <CertificationsSection
              heading={<>
                  <span className="text-blue-500">Awards</span> & recognitions
              </>}
              description="Oditech Global has been recognized by the leading analytics agencies working with the best software development companies from all over the world. Our values and partners help us to provide the best software development services for startups in the field."
              imageSize="w-16 md:w-24"
          />
      </div>
      </RevealOnScroll>
  )
}

// FAQ Section Component
const FAQSection = () => {
  const WebAppDevelopmentFaqs = [
    {
      question: "How to choose a reliable web application development company?",
      answer: (
        <>
          <p>Look for a company with proven expertise, a strong portfolio, and positive Client reviews. Ensure the company follows agile processes, prioritizes security, and offers post-launch support as a part of their custom web application development services.</p>
          <p className="mt-2">The opposite of custom software is off-the-shelf and template-based applications</p>
        </>
      )
    },
    {
      question: "How much does it cost to create a custom web application?",
      answer: (
        <>
          <p>The cost varies based on complexity, project scope, necessary integrations, and team composition. Simple web apps start at $30,000, the majority of projects and MVP solutions cost around $200,000, and more complex enterprise solutions can exceed $500,000. We recommend referring to a professional development company to get a detailed estimation. Contact us for a free quote.</p>
        </>
      )
    },
    {
      question: "How long does it take to develop a web application?",
      answer: (
        <>
          <p>Development time depends on requirements, project complexity, and team size. A basic MVP may take 3-4 months, while a fully-featured enterprise app can take 6-12 months or more. Ask for a company to get a detailed estimation.</p>
        </>
      )
    },
    {
      question: "What programming languages and technologies do you use for web app development?",
      answer: (
        <>
          <p>We use modern technologies, such as front-end frameworks React, Angular, and Vue, and programming languages Python, Ruby on Rails, Node.js, .NET, Java, and PHP. For databases, we work with PostgreSQL, MySQL, and MongoDB, and we deploy using AWS, Azure, and Google Cloud.</p>
        </>
      )
    },
    {
      question: "Can you develop both the frontend and backend of web applications?",
      answer: (
        <>
          <p>Yes, we provide full-stack development, handling both frontend and backend development during our custom web application development services. Our team ensures seamless integration, high performance, and secure, scalable solutions.</p>
        </>
      )
    },
    {
      question: "How do you ensure the security of web applications?",
      answer: (
        <>
          <p>We follow OWASP Top 10 guidelines, and implement AES-256 encryption, multi-factor authentication, firewalls, and regular security audits. Our team also conducts penetration testing, compliance checks, and real-time monitoring to protect against cyber threats.</p>
        </>
      )
    },
    {
      question: "Do you provide maintenance and support after developing a web app?",
      answer: (
        <>
          <p>Yes, we offer post-launch maintenance, security updates, bug fixes, and feature enhancements. The exact service levels and the amount of our efforts in monthly hours can be tailored based on requirements.</p>
        </>
      )
    }
  ];

  return (
    <RevealOnScroll>
    <section id="faq" className="px-4 mb-16">
      <FAQ faqs={WebAppDevelopmentFaqs} />
    </section>
    </RevealOnScroll>
  );
};

// Stories Section Component
const StoriesSection = () => {
  const articles = [
      {
          title: "Top 10 ChatGpt Alternatives for Business Use in2025",
          time: "52 mins",
          date: "March 24, 2025",
          image: "https://thimpress.com/wp-content/uploads/2025/03/best-character-ai-alternatives.webp",
          path: "/articles/chatgpt-alternatives"
      },
      {
          title: "Top 25 MVP Development Companies?",
          time: "52 mins",
          date: "February 24, 2025",
          path: "/articles/iot-oil-gas"
      },
      {
          title: "IoT Apps For Oil & Gas Industry-Whats in It?",
          time: "12 mins",
          date: "February 20, 2025",
          path: "/articles/iot-logistics"
      },
      {
          title: "Internet Of Things in Logistic Development",
          time: "11 mins",
          date: "February 18, 2025",
          path: "/articles/iot-education"
      },
  ];

  return (
    <RevealOnScroll>
      <section id="blog" className="px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
              We have awesome <span className="text-blue-600">stories</span> to tell you
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-gray-100 p-4 rounded-xl">
                  <img
                      src={articles[0].image}
                      alt={articles[0].title}
                      className="rounded-xl mb-4 w-[800px] h-[260px] hover:scale-105 transition-transform duration-300"
                  />
                  <Link
                      to={articles[0].path}
                      className="text-xl font-semibold text-black hover:text-red-500 transition-colors"
                  >
                      {articles[0].title}
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">
                      🕒 {articles[0].time} | {articles[0].date}
                  </p>
              </section>

              <section>
                  {articles.slice(1).map((article, index) => (
                      <div key={index} className="mb-6 border-b pb-4">
                          <Link
                              to={article.path}
                              className="text-lg font-medium text-black hover:text-red-500 transition-colors"
                          >
                              {article.title}
                          </Link>
                          <p className="text-gray-500 text-sm mt-1">
                              🕒 {article.time} | {article.date}
                          </p>
                      </div>
                  ))}
              </section>
          </div>

          <p className="text-red-500 font-medium mt-6 cursor-pointer hover:underline">
              All articles &gt;
          </p>
      </section>
      </RevealOnScroll>
  );
};

// Main WebDevelopment Component
const WebDevelopemnt = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const contentsMenu = [
        { title: 'Benefits', id: 'benefits' },
        { title: 'Services', id: 'services' },
        { title: 'Features', id: 'features' },
        { title: 'Case studies', id: 'recent-works' },
        { title: 'Process', id: 'process' },
        { title: 'Advance tech', id: 'advance-tech' },
        { title: 'Industries', id: 'industries' },
        { title: 'Pricing', id: 'pricing' },
        { title: 'About Oditech Global', id: 'about' },
        { title: 'FAQ', id: 'faq' },
        { title: 'Blog', id: 'blog' }
    ];

    // Track active section for mobile menu highlighting
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
            // Calculate offset considering mobile header height
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

                    {/* Close button at bottom for easier access */}
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

            {/* Start the flex container for main content and TOC */}
            <div className="container mx-auto flex flex-col lg:flex-row ">
                {/* Main content column - takes 3/4 width on desktop */}
                <div className="w-full lg:w-[200%] px-2">
                    
                <BenifitsSection />
                <WebServices />
                <WebApplicationsComponent />
                <CustomWebAppFeatures />
                <UXUIComponent />
                <ConsultationSection />
                <RecentWorksSection />
                <DevelopmentProcessTimeline />
                {/* Client Reviews Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                  What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <ReviewCarousel />
              </div>
            </section>
                <ContactExpertSection />
                <SecurityMeasuresSection />
                <TechStackSection />
                <AdvancedTechGrid />
                <EngagementModels />
                <IndustrySpecificGrid />
                <WebDevelopmentApproach />
                <PricingModel />
                <YearShowcase />
                <CertificationsWrapper />
                <Contact />
                <FAQSection />
                <StoriesSection />
                </div>

                {/* Table of Contents - improved sticky behavior */}
                <div className="hidden lg:block lg:w-[23%]">
                    <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)] overflow-y-auto pt-2">
                        <TableOfContents
                            sections={contentsMenu}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WebDevelopemnt;