import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
// import { FaCheck } from "react-icons/fa";
import { Pencil, Smartphone, BarChart2, Puzzle } from 'lucide-react';
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Check } from 'lucide-react';
import { CertificationsSection } from "@/components/ui/Certification";
import Contact from "@/components/home/Contact";
import FAQ from "../components/ui/faq";
import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from 'react';
import { FaCheck, FaFilePdf } from 'react-icons/fa';

const HeroSection = () => {

  return (
    <>
      <RevealOnScroll>
        <div className="p-8 mr-0 bg-gradient-to-r from-[#0a1f44] to-[#0a1f44]">
          <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className='text-white hover:text-pink-400 transition-colors duration-200'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services" className='text-white hover:text-pink-400 transition-colors duration-200'>Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Ux/ui design services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="hero" className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-16 sm:py-20 px-4 md:px-16 lg:px-20 -mt-4 sm:-mt-6 md:-mt-8">
          <div className="max-w-5xl mx-auto text-center md:text-left md:ml-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-500">UX/UI design </span> services
            </h1>
            <p className="text-base sm:text-lg mt-4 sm:mt-6 text-gray-300 max-w-3xl mx-auto md:mx-0">
              FoxSolution offers UI/UX design services that help brands create a human-centered design to attract new users, inspire them to buy your product, and build trust.

              Want to build your product with a team that establishes a clear design process and produces valuable results on time?
            </p>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 text-base sm:text-lg mt-6 sm:mt-8 text-gray-100">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
                  <span>websites and web applications;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
                  <span>mobile applications;</span>
                </li>
              </ul>
              <ul className="space-y-2 mt-2 md:mt-0">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
                  <span>mobile applications;</span>
                </li>
              </ul>
            </div>

            {/* Mobile-optimized buttons and rating section */}
            <div className="mt-8 sm:mt-10 flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:items-center md:gap-6">
              {/* First button - full width on mobile */}
              <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold px-5 py-3 sm:py-2 transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-full md:w-fit">
                Free quote
              </button>

              {/* Rating section - flex layout changes on mobile vs desktop */}
              <div className="text-sm text-gray-300 flex flex-row md:flex-col items-center md:items-start justify-center gap-3 md:gap-0 mt-4 md:mt-0">
                <div>Clients rate our services</div>
                <div className="text-yellow-400 text-xl font-bold md:mt-1">★★★★★ 5.0</div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  )
}

const points = [
  "plan and develop MVP from scratch;",
  "no-code/low-code and custom MVPs;",
  "help you shape your product idea and validate it;",
  "create detailed, investor-ready documentation and estimates;",
  "advice on the optimal technology use;",
  "support you post-launch with analytics, user feedback collection, and roadmap planning."
];

const MvpServicesSection = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Our MVP development <span className="text-blue-600">services</span> scope
        </h2>

        {/* Description */}
        <p className="text-center max-w-4xl mx-auto text-lg text-gray-700 mb-10">
          We support startups through every stage of MVP development, providing the skills, tools, and guidance needed to
          launch quickly and grow strategically. We go far beyond code and provide expert support at every critical point.
          The complete list of our offerings to startups is here:
        </p>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Bullet List */}
          <ul className="space-y-5 text-gray-800 text-lg">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheck className="text-blue-500 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/1397678880/photo/closeup-of-a-black-businesswoman-typing-on-a-laptop-keyboard-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=Qj9WWpAoKB0W7k-c68Y-8neN6c1mCExnEO9UKG-eoXY=" // Replace with actual path
              alt="MVP development"
              className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
const UXUIServices = () => {
  return (
   <RevealOnScroll>
    <section id="services">
    <div className="bg-gray-900 text-white py-16 px-8 w-full mt-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Our UX/UI design <span className="text-blue-400">services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Web UX/UI Design */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Pencil size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Web UX/UI design</h2>
            <p className="text-gray-300">
              Our approach to web UI/UX design, especially for the US market,
              follows proven best practices in usability, compatibility, and
              accessibility.
            </p>
          </div>

          {/* Mobile UX/UI Design */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Smartphone size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Mobile UX/UI design</h2>
            <p className="text-gray-300">
              In creating a superior user experience for mobile applications
              tailored for the US, the challenge lies in balancing standard
              guidelines with adjustments that cater to the unique tastes and
              preferences of North American users.
            </p>
          </div>

          {/* Data Visualization */}
          <div className="flex flex-col">
            <div className="mb-4">
              <BarChart2 size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Data visualization</h2>
            <p className="text-gray-300">
              Data visualization is the process of converting measurable
              information from text/graphics to graphical formats. Our designers
              will help you transform complex segmented information into
              simple and intuitive infographic.
            </p>
          </div>

          {/* Wireframing and Prototyping */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Puzzle size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Wireframing and prototyping</h2>
            <p className="text-gray-300">
              Prototypes (done in HTML or using InVision) and wireframes help
              to quickly visualize complex ideas and put them into practice.
              At FoxSolution design studio, a part of UI and UX design services
              is prototyping. We start prototyping after conducting preliminary
              research and formulating requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
    </RevealOnScroll>
  );
};

const UXUIProcess = () => {
  const processSteps = [
    {
      number: 1,
      title: 'Research',
      tasks: [
        'interview stakeholders;',
        'analyze apps of key competitors;',
        'research users and marketing analysis.'
      ]
    },
    {
      number: 2,
      title: 'Analysis',
      tasks: [
        'develop personas;',
        'define application functionality;',
        'make customer journey map;',
        'create app user flowcharts;',
        'define web and mobile functionality.'
      ]
    },
    {
      number: 3,
      title: 'Design',
      tasks: [
        'develop information architecture (IA);',
        'make application wireframes;',
        'create clickable prototypes;',
        'prepare visual design;',
        'animate the interface.'
      ]
    },
    {
      number: 4,
      title: 'Implementation',
      tasks: [
        'supervise the design;',
        'create design systems.'
      ]
    },
    {
      number: 5,
      title: 'Post-release support',
      tasks: [
        'analyze users experience;',
        'design optimization.'
      ]
    }
  ];

  return (
    <RevealOnScroll>
      <section id="process">
    <div className="bg-gray-900 text-white py-16 px-8 w-full bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          UX/UI design <span className="text-blue-400">process</span> explained
        </h1>

        <p className="text-center mb-16 text-gray-300 max-w-3xl mx-auto">
          At FoxSolution, we apply a full range of UI/UX services to formulate effective customer retention strategies. We help
          brands to define their image through UI design services and have a lasting impact, driving and motivating users to
          buy your product or services by providing a great user experience. User experience design services include:
        </p>

        <div className="relative">
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700"
              style={{ left: 'calc(24px + 8px)' }}></div>

            {/* Process steps */}
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex mb-16 relative">
                {/* Circle with number */}
                <div className="mr-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-3">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <Check size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
    </RevealOnScroll>
  );
};

const BenefitsSection = () => {
  return (
    <RevealOnScroll>
      <section id="benefits">
    <div className="bg-gray-50 bg-opacity-50 py-16 px-8 w-full">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-blue-500">Benefits</span> you get from working with us
        </h1>

        <p className="text-center mb-16 text-gray-700 max-w-4xl mx-auto">
          At FoxSolution, we apply a full range of services to formulate effective customer retention strategies. We help
          brands to define their image through UI and UX design services and have a lasting impact, driving and motivating
          users to buy your product or services by providing a great user experience. User experience design services include
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-blue-500">
                <path d="M12 12L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 36L36 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 16L12 36L32 36L40 28L40 8L20 8L12 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="24" cy="22" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              2x less time spent on development-ready design
            </h3>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-blue-500">
                <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
                <path d="M24 14V24L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35 30L39 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M32 36H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              25% cut time on UI design
            </h3>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-blue-500">
                <path d="M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z" stroke="currentColor" strokeWidth="2" />
                <path d="M12 25C14.2091 25 16 23.2091 16 21C16 18.7909 14.2091 17 12 17C9.79086 17 8 18.7909 8 21C8 23.2091 9.79086 25 12 25Z" stroke="currentColor" strokeWidth="2" />
                <path d="M36 25C38.2091 25 40 23.2091 40 21C40 18.7909 38.2091 17 36 17C33.7909 17 32 18.7909 32 21C32 23.2091 33.7909 25 36 25Z" stroke="currentColor" strokeWidth="2" />
                <path d="M24 24L24 42" stroke="currentColor" strokeWidth="2" />
                <path d="M18 30L24 36L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 25L12 38" stroke="currentColor" strokeWidth="2" />
                <path d="M36 25L36 38" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              30% cut time on new design delivery
            </h3>
          </div>
        </div>
      </div>
    </div>
    </section>
    </RevealOnScroll>
  );
};

const StartDesignBanner = () => {
  return (
    <div className="flex justify-between items-center px-8 py-12 rounded-md text-white"
      style={{
        background: 'linear-gradient(90deg, #0a1e3f 0%, #1c2d5c 30%, #2c1d4c 70%, #3c0b2f 100%)'
      }}>
      <div>
        <h2 className="text-3xl font-semibold">
          <span className="text-blue-500">Start</span> Your Design Journey
        </h2>
        <p className="mt-2 text-lg">Book a Free Consultation Today!</p>
      </div>
      <button className="bg-[#FF4155] text-white  border border-[#FF4155] hover:bg-transparent hover:text-[#FF4155]  font-medium px-8 py-3 rounded-sm shadow-md transition duration-300">
        Get in Touch
      </button>
    </div>
  );
};


const TestimonialsGrid = () => {
  const testimonials = [
    {
      name: "Alexander McCaig",
      title: "Co-Founder & CEO",
      company: "Tartle",
      imageSrc: "https://sumatosoft.com/wp-content/uploads/2023/01/photo.png",
      quote: {
        main: "The system has produced a significant competitive advantage in the industry thanks to FoxSolution's well-thought opinions.",
        secondary: "They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution."
      }
    },
    {
      name: "Damian Gevertz",
      title: "Founder & CEO",
      company: "Widgety",
      imageSrc: "https://sumatosoft.com/wp-content/uploads/2023/01/photo6.png",
      quote: {
        main: "We tried another company that one of our partners had used but they didn't work out. I feel that FoxSolution does a better investigation of what we're asking for.",
        secondary: "They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us."
      }
    },
    {
      name: "David Logan",
      title: "Founder",
      company: "Emergence",
      imageSrc: "https://sumatosoft.com/wp-content/uploads/2023/01/photo13.png",
      quote: {
        main: "FoxSolution is great in every regard including costs, professionalism, transparency, and willingness to guide.",
        secondary: "I think they were great advisors early on when we weren't ready with a fully fleshed idea that could go to market. They know the business and startup scene as well globally."
      }
    },
    {
      name: "Paul S. Chun",
      title: "CTO",
      company: "Rivalfox GmbH",
      imageSrc: "https://sumatosoft.com/wp-content/uploads/2023/01/photo5.png",
      quote: {
        main: "The Rivalfox had the pleasure to work with FoxSolution in building out core portions of our product, and the results really couldn't have been better.",
        secondary: "FoxSolution provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly."
      }
    }
  ];

  return (
   <RevealOnScroll>
   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-pink-50 p-6 rounded-lg">
          <div className="mb-4">
            <span className="text-5xl font-serif text-gray-800">"</span>
            <div className="mt-2">
              <p className="text-gray-800 italic mb-4">{testimonial.quote.main}</p>
              {testimonial.quote.secondary && (
                <p className="text-gray-800 italic">{testimonial.quote.secondary}</p>
              )}
            </div>
          </div>
          <div className="flex items-center mt-4">
            <img
              src={testimonial.imageSrc}
              alt={testimonial.name}
              className="w-12 h-12 rounded-md object-cover mr-3"
            />
            <div>
              <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.title}, {testimonial.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    </RevealOnScroll>
  );
}

const FAQSection = () => {
  const UxuiFaqs = [
    {
      question: "What are UI and UX design services?",
      answer: "UI and UX design services are activities of designers focused on designing user-friendly interfaces for software and applications. UX stands for “user experience”, and UX design is responsible for the “friendliness” (read convenience) of the interface. UI stands for “user interface”, and UI design is the process of designing user interfaces itself."
    },
    {
      question: "What does a UI/UX designer do?",
      answer: "The final result of the UI/UX designer’s job is a user-friendly interface for software.They draw it using graphic design software such as Adobe Photoshop, CorelDraw, Sketch. To build a top-notch interface designers must know a lot of things about the project: business goals, app functionality, customer journey map, and more. ",
    },
   
    { 
         question: "How do you develop an MVP?",
            answer: (
                <>
                    <p>UX design services typically include the following areas:</p>
                    <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span> User research – gathering insights and data about users through various methods such as surveys, focus groups, and usability testing.;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span> Information architecture – organizing and structuring the content and navigation of a website or app.;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span> Interaction design – designing the behavior and interactions between a user and the product.;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>Visual design – creating a visual aesthetic for the product, including typography, color, and iconography.
          Prototyping – creating a working model of the product to test and refine the design.;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span> User testing – evaluating the design through user testing and incorporating feedback to improve the overall user experience.;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span> These services work together to create a seamless and enjoyable experience for the user.
        </span>
                        </li>
                    </ul>
                </>
            )
        },
    {
      question: "Why are UX design services important?",
        answer: (
        <>
        Great UX results in high user satisfaction.
        UX design is important for businesses, because it improves SEO ranking and makes your website more convenient for users, thus, increasing their willingness to use your product.
        Great UX is a must for every online business.
          </>
      )
    },
    {
    question: "How UX design services can help your product?",
    answer : "With great UX design, your product will stand out from your multiple competitors. UX design engages users on an emotional level and builds their loyalty. Finally, UX design improves your SEO ranking in search results, so more users likely to see your product."
    },
  ];

  return (
    <section id="faq" className="px-4 mb-16">
      <FAQ faqs={UxuiFaqs} />
    </section>
  )
};

const StoriesSection = () => {
  const articles = [
    {
      title: "FoxSolution Ranked Among Top Mobile App Development Companies in the USA by AppFirmsReview",
      time: "52 mins",
      date: "March 24, 2025",
      image: "https://sumatosoft.com/wp-content/uploads/2025/04/USA-2048x1622.png",
      path: "/articles/chatgpt-alternatives"
    },
    {
      title: "Top 10 ChatGPT Alternatives for Business Use in 2025",
      time: "52 mins",
      date: "February 24, 2025",
      path: "/articles/iot-oil-gas"
    },
    {
      title: "Top 25 MVP Development Companies",
      time: "12 mins",
      date: "February 20, 2025",
      path: "/articles/iot-logistics"
    },
    {
      title: "IoT Apps for Oil & Gas Industry – What’s in It?",
      time: "11 mins",
      date: "February 18, 2025",
      path: "/articles/iot-education"
    },
  ];

  return (
    <RevealOnScroll>
   <section id="awsome" className="px-4 mb-16">
  <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
    We have awesome <span className="text-blue-600">stories</span> to tell you
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <section className="bg-gray-100 p-4 rounded-xl">
      {/* Modified image container with slightly decreased width and height */}
      <div className="w-11/12 mx-auto overflow-hidden rounded-xl">
        <img
          src={articles[0].image}
          alt={articles[0].title}
          className="rounded-xl mb-4 w-full h-[260px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
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
 
function PortfolioSection () {
const [hoveredId, setHoveredId] = useState<number | null>(null);
const projects = [
  {
    id: 1,
    title: "Graphical user interface for robot operation",
    description: "Foxsolution developed a graphic user interface (GUI) that helps to communicate with the robot Alfred, an automated robotic arm.",
    image: "/Casestudies1.webp",
    bgColor: "bg-purple-900",
    hoverBgColor: "bg-purple-800",
    logo: "DEXAI ROBOTICS",
  },
  {
    id: 2,
    title: "Innovative big data trading platform",
    description: "A blockchain-based web and mobile platform that allows companies and individuals to buy and sell big data sets securely through a private digital identity and pay with Bitcoin.",
    image: "/Casestudies2.webp",
    bgColor: "bg-blue-950",
    hoverBgColor: "bg-blue-900",
  },
  {
    id: 3,
    title: "Transportation management system",
    description: "A comprehensive solution for companies operating in the logistics industry, covering all the major aspects of transport and cargo management.",
    image: "/Casestudies3.webp",
    bgColor: "bg-purple-800",
    hoverBgColor: "bg-purple-700",
    logo: "NIKA",
  }
];
return (
  <RevealOnScroll>
  <section id="portfolio">
  <div className="max-w-6xl mx-auto py-6 px-4">
  {projects.map((project) => (
    <div 
      key={project.id}
      className="mb-4 overflow-hidden rounded shadow-md transition-all duration-300"
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={{ 
        backgroundColor: hoveredId === project.id 
          ? project.hoverBgColor.replace('bg-', '') 
          : project.bgColor.replace('bg-', '')
      }}
    >
      <div className={`flex flex-col md:flex-row ${hoveredId === project.id ? project.hoverBgColor : project.bgColor}`}>
        <div className="w-full md:w-1/2 overflow-hidden max-h-52">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto transition-transform duration-300 object-cover"
            style={{ 
              transform: hoveredId === project.id ? 'scale(0.95)' : 'scale(1)'
            }}
          />
        </div>
        <div className="w-full md:w-1/2 p-3 text-white">
          {project.logo && (
            <div className="text-xs font-semibold mb-1">{project.logo}</div>
          )}
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
    </div>
  ))}

  <div className="text-center mt-6">
    <a href="#" className="text-pink-500 font-bold text-sm hover:underline">
      All projects →
    </a>
  </div>
</div>
  </section>
  </RevealOnScroll>
);
 };

 const VideoSection = () => {
     return (
         <RevealOnScroll>
         <section className="p-8 mb-12">
             <h1 className="text-4xl md:text-5xl mb-4 text-center font-medium">
                 <span className="text-blue-600 font-semibold">Expert</span>  video Guide Into UX/UI Design Process
             </h1>
 
             <div className="w-full aspect-video bg-gray-100 rounded shadow-lg overflow-hidden">
                 <iframe
                     className="w-full h-full"
                     src="https://www.youtube.com/embed/dummyurl"
                     title="Foxsolution's Exceptional Pre-Sale Process - Unlocking the Path to Successful Software Solutions"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                 ></iframe>
             </div>
         </section>
         </RevealOnScroll>
     );
 };

const CompanyProfileSection = () => {
  return (
    <section id="profiles" className="w-full text-white py-16 px-6 md:px-20 bg-gradient-to-r from-[#0b234a] via-[#0c1f3f] to-[#3e1635] mb-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-white">Download</span>{' '}
            <span className="text-blue-500">company’s profile</span>
          </h2>
          <p className="text-lg mt-4">
            All information about the company in one PDF-document:
          </p>
          <ul className="mt-6 space-y-3 text-base">
            <li className="flex items-start">
              <FaCheck className="text-blue-500 mt-1 mr-2" />
              services;
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-500 mt-1 mr-2" />
              how we work;
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-500 mt-1 mr-2" />
              our projects.
            </li>
          </ul>
        </div>

        {/* Button Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <button className="bg-[#FF4155] text-white  border border-[#FF4155] hover:bg-transparent hover:text-[#FF4155] transition px-8 py-4 rounded text-lg font-medium flex items-center gap-2 shadow-lg">
            <FaFilePdf className="text-white text-xl" />
            Download
          </button>
        </div>
      </div>
    </section>
  );
};


const UserInterface = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'UX/UI Design Services', id: 'services' },
    { title: 'UI/UX Design Process', id: 'process' },
    { title: 'Benefits', id: 'benefits' },
    { title: 'Portfolio', id: 'portfolio' },
    { title: 'FoxSolution Profiles', id: 'profiles' },
     { title: 'Awards & Recognitions', id: 'awards' },
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
    <div>
      <Navbar />
       {/* Mobile Menu Toggle Button - Wider and more visible */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors w-16 h-16 flex items-center justify-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Contents Menu - Slide from left */}
      <div 
        className={`lg:hidden fixed inset-y-0 left-0 z-40 w-full sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
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
        
        <div className="p-6">
          <ul className="space-y-2">
            {contentsMenu.map((item, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-600 font-medium border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <HeroSection />
      {/* Flex container for main content and TOC */}
      <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 md:px-8">
        {/* Main content column */}
        <div className="w-full lg:w-[200%] px-2">
          <UXUIServices />
          <MvpServicesSection />
          <UXUIProcess />
          <VideoSection />
          <BenefitsSection />
           <StartDesignBanner />
          <PortfolioSection />
          <TestimonialsGrid />
          <CompanyProfileSection />
          <section id="awards" className='mb-6 w-auto'>
            <CertificationsSection
              heading={<>
                <span className="text-blue-500">Awards</span> & recognitions
              </>}
              description="Foxsolutions has been recognized by the leading analytics agencies working with the best software development companies from all over the world. Our values and partners help us to provide the best software development services for startups in the field."
              imageSize="w-16 md:w-24"
            />
          </section>
            <FAQSection />
          <Contact />
        
          <StoriesSection/>
          
        </div>

        {/* Table of Contents - Sticky on large screens */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)] overflow-y-auto pt-2">
            <TableOfContents sections={contentsMenu} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserInterface;