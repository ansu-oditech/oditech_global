import { useState, useCallback, useEffect } from 'react';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import FAQ from '@/components/ui/faq';
import ReviewCarousel from '../components/ui/reviewCarousel';
import { Smartphone, Tablet, Layers, Monitor, Watch } from 'lucide-react';
import { CertificationsSection } from '@/components/ui/Certification';


const HeroSection = () => {
    return (
      <>
        {/* Hero Section with integrated breadcrumb */}
        <section 
        id="hero" 
        className="h-screen w-full flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-950 to-purple-900 text-white relative"
        style={{ height: '100vh', minHeight: '100vh' }}>
        <div className="container mx-auto px-6 absolute inset-0 flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <div className="max-w-4xl">
              <div className="flex items-center text-sm mb-8">
                <a href="/" className="text-gray-300 hover:text-white">Home</a>
                <span className="mx-2">›</span>
                <a href="/services" className="text-gray-300 hover:text-white">Services</a>
                <span className="mx-2">›</span>
                <span className="text-gray-300">Custom mobile application development services</span>
              </div>
    
              {/* Hero Content */}
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Custom <span className="text-blue-400">mobile software</span> crafted<br />
                for your next big idea
              </h1>
    
              <p className="text-lg md:text-xl mb-12 max-w-3xl">
                Unlock your business potential with our expertly crafted mobile apps. Let's create
                something remarkable together.
              </p>
    
              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-10 py-3 rounded transition duration-300">
                  Contact us
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
                  <span className="ml-2 font-semibold">5,0</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Logos Section Component
  const Logos = () => {
    const logos = [
      {
        name: 'Toyota',
        svg: (
          <img
            src="https://sumatosoft.com/wp-content/uploads/2022/12/5c98e3297e3bc92bd580af14_toyota_l-1.svg"
            alt="Toyota Logo"
            className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
          />
        )
      },
      {
        name: 'Desai',
        svg: (
          <img src="https://sumatosoft.com/wp-content/uploads/2022/12/5ecce35506c123c4936b0303_dexai-logo-1.svg" alt="Desai logo"
            className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />
  
        )
      },
      {
        name: 'Beiersdorf',
        svg: (
          <img src="https://sumatosoft.com/wp-content/uploads/2022/12/5ecba50d2b50b63a7a1871ad_beiersdorf-logo-1.svg" alt="Beiersdorf logo"
            className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />
  
        )
      },
      {
        name: 'SMI',
        svg: (
          <img src="https://sumatosoft.com/wp-content/uploads/2024/10/SMI_Logo-1-2-2.svg" alt="SMI logo"
            className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />
  
  
        )
      },
      {
        name: 'ClimeCo',
        svg: (
          <img src="https://sumatosoft.com/wp-content/uploads/2025/01/ClimeCo.svg" alt="ClimeCo logo"
            className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />
  
        )
      },
      {
        name: 'Tartle',
        svg: (
          <img src="	https://sumatosoft.com/wp-content/uploads/2025/01/Tartle.svg" alt="Tartle logo"
            className="w-24 h-24 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />
  
  
        )
      },
      {
        name: 'Nika Group',
        svg: (
          <img src="https://sumatosoft.com/wp-content/uploads/2025/01/TL-Nika.svg" alt="NikeGroup logo"
            className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />
  
        )
      },
    ]
    return (
      <section className='mb-0 -mt-24 '>
        <div className=' bg-white py-24 px-24 -mt-2'>
          <div className='mx-auto max-w-7xl px-4 mt-0'>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center'>
  
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2 transition-all duration-300 hover:bg-white rounded-lg"
                >
                  <div className='relative group'>
                    {logo.svg}
                  </div>
                </div>
              ))}
            </div>
  
          </div>
        </div>
      </section>
    )
  };

  // Mobile App Explainer Section
  const MobileAppExplainer = () => {
    return (
      <section id="explainer" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            How to create a <span className="text-blue-500">custom mobile app?</span>
          </h2>
          
          <p className="text-lg text-gray-700 mb-16 leading-relaxed">
            Creating a custom mobile app is like building a car. First, you decide what kind of car you want to make and how it 
            should look and work(design). Then, you gather all the parts (write the code) and carefully put them together, 
            making sure each piece fits perfectly. Finally, you test(QA) your car to see if it runs smoothly and make any tweaks to 
            get it just right.
          </p>
          
          <div className="flex flex-wrap items-center justify-between bg-gray-50 p-8 rounded-lg">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-gray-800">Stats:</h3>
            </div>
            
            <div className="w-full md:w-3/4 text-left">
              <p className="text-lg text-gray-700 italic">
                "Studies show that the average Indian smartphone user spends over 4.8 hours per day on mobile apps. 
                That's nearly 30% of their waking hours." *Statista
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Mobile App Solutions Section
  const MobileAppSolutions = () => {
    return (
      <section id="solutions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              Explore our custom <span className="text-blue-500">mobile app development solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We build only industry-relevant mobile app solutions that increase business effectiveness and efficiency.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* eLearning mobile app development */}
            <div className="flex bg-white rounded-md overflow-hidden">
              <div className="w-2/3 pr-4">
                <h3 className="text-lg font-semibold mb-2">eLearning mobile app development</h3>
                <p className="text-sm text-gray-700 mb-4">
                  eLearning mobile app development involves creating an app that turns your phone into a classroom. It's like having a school in your pocket, where students can learn, take courses, and connect with teachers and classmates. This app makes education accessible and engaging, allowing learning to happen anytime and anywhere.
                </p>
                <a href="/elearning-apps" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                  Learn more &gt;
                </a>
              </div>
              <div className="w-1/3">
                <img src="/Rectangle-2041.webp" alt="eLearning App" className="object-cover h-full rounded-md" />
              </div>
            </div>
            
            {/* eCommerce mobile app development */}
            <div className="flex bg-white rounded-md overflow-hidden">
              <div className="w-2/3 pr-4">
                <h3 className="text-lg font-semibold mb-2">eCommerce mobile app development</h3>
                <p className="text-sm text-gray-700 mb-4">
                  eCommerce mobile app development is about creating a special app that lets people shop online using their phones. It's like building a digital store where customers can browse, pick, and buy products easily. This app helps businesses sell more and gives shoppers a convenient and fun shopping experience, all from their smartphone.
                </p>
                <a href="/ecommerce-apps" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                  Learn more &gt;
                </a>
              </div>
              <div className="w-1/3">
                <img src="/Rectangle-2042.webp" alt="eCommerce App" className="object-cover h-full rounded-md" />
              </div>
            </div>
            
            {/* FinTech mobile app development */}
            <div className="flex bg-white rounded-md overflow-hidden">
              <div className="w-2/3 pr-4">
                <h3 className="text-lg font-semibold mb-2">FinTech mobile app development</h3>
                <p className="text-sm text-gray-700 mb-4">
                  FinTech mobile app development is about creating an app that lets people manage their finances using their smartphones. It's like having a bank and financial advisor in your pocket, where you can do things like transferring money, tracking your spending, and investing. This app makes managing money easy, secure, and convenient, giving users more control over their financial life.
                </p>
                <a href="/fintech-apps" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                  Learn more &gt;
                </a>
              </div>
              <div className="w-1/3">
                <img src="/Rectangle-2044.webp" alt="FinTech App" className="object-cover h-full rounded-md" />
              </div>
            </div>
            
            {/* Healthcare mobile app development */}
            <div className="flex bg-white rounded-md overflow-hidden">
              <div className="w-2/3 pr-4">
                <h3 className="text-lg font-semibold mb-2">Healthcare mobile app development</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Healthcare mobile app development means making an app that helps people manage their health and wellness through their phones. It's like having a personal doctor and health tracker in your pocket, where you can schedule appointments, get medical advice, and monitor your health state. This app supports better health care by making medical services and information more accessible to everyone.
                </p>
                <a href="/healthcare-apps" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                  Learn more &gt;
                </a>
              </div>
              <div className="w-1/3">
                <img src="/Rectangle-2045.webp" alt="Healthcare App" className="object-cover h-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
// Gradient Banner Component
const GradientBanner = () => {
  return (
    <section id='banner' className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 p-12 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          We develop custom mobile applications
          <br />
          for any business challenges.
        </h1>
        <p className="text-xl">
          Get proof of our successfully completed projects.
        </p>
      </div>
    </section>
  );
};

// Mobile App Reasons Section
const MobileAppReasons = () => {
  const reasons = [
    {
      title: "Revenue",
      description: "Mobile apps are expected to generate over $935 billion in revenue in 2024."
    },
    {
      title: "Apple App Store",
      description: "The Apple App Store has 1.96 million apps available for download."
    },
    {
      title: "Google Play Market",
      description: "There are 2.87 million apps available for download on the Google Play Store."
    },
    {
      title: "Millennials' mobile use",
      description: "21% of Millennials open an app 50+ times per day."
    },
    {
      title: "Frequent usage",
      description: "49% of people open an app 11+ times each day."
    },
    {
      title: "Mobile dominance",
      description: "70% of all US digital media time comes from mobile apps."
    },
    {
      title: "Daily routine",
      description: "The average smartphone owner uses 10 apps per day and 30 apps each month."
    },
    {
      title: "Daily screen time",
      description: "The average smartphone user spends 3 hours and 10 minutes each day using their device."
    }
  ];

  return (
    <section id='responses' className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center">
        8 reasons why your business needs a{" "}
        <span className="text-blue-500">mobile app</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
            <p className="text-gray-700">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Mobile Applications Section
const MobileApplications = () => {
  return (
    <section id='applications' className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3">
          Discover the mobile <span className="text-blue-500">applications</span> we develop
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Our mobile app developers deliver bug-free iOS, Android, or cross-platform applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* iOS Applications */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg viewBox="0 0 24 24" width="48" height="48" className="text-blue-500 fill-current">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">iOS applications</h3>
            <p className="text-gray-600">
              We reached high proficiency in custom mobile app development services with Swift 
              language for all types of gadgets: iOS, iPad, macOS, tvOS, and watchOS.
            </p>
          </div>

          {/* Android Applications */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
              <svg viewBox="0 0 24 24" width="48" height="48" className="text-green-500 fill-current">
                  <path d="M7.2,16.8a.8.8,0,0,0,.8.8h.8v2.4a1.2,1.2,0,0,0,2.4,0V17.6h1.6v2.4a1.2,1.2,0,0,0,2.4,0V17.6H16a.8.8,0,0,0,.8-.8V9.6H7.2Z" />
                  <path d="M6,9.6a1.2,1.2,0,0,0-1.2,1.2v4a1.2,1.2,0,0,0,2.4,0v-4A1.2,1.2,0,0,0,6,9.6Z" />
                  <path d="M18,9.6a1.2,1.2,0,0,0-1.2,1.2v4a1.2,1.2,0,0,0,2.4,0v-4A1.2,1.2,0,0,0,18,9.6Z" />
                  <path d="M14.824,3.976l.849-1.473a.337.337,0,1,0-.6-.312l-.859,1.491a4.063,4.063,0,0,0-1.669-.362,4.024,4.024,0,0,0-1.7.368L9.982,2.191a.337.337,0,1,0-.6.312l.858,1.487a3.849,3.849,0,0,0-1.995,3.358h8.528A3.886,3.886,0,0,0,14.824,3.976ZM10.456,6.044a.481.481,0,1,1,.481-.481A.482.482,0,0,1,10.456,6.044Zm3.088,0a.481.481,0,1,1,.481-.481A.482.482,0,0,1,13.544,6.044Z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Android applications</h3>
            <p className="text-gray-600">
              We provide predictable delivery of high-end Android apps with the most reliable and 
              stable technology for android applications – Kotlin.
            </p>
          </div>

          {/* Cross-platform Applications */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <div className="grid grid-cols-2 gap-2">
                  <Smartphone size={24} className="text-purple-500" />
                  <Tablet size={24} className="text-purple-500" />
                  <Layers size={24} className="text-purple-500" />
                  <Monitor size={24} className="text-purple-500" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Cross-platform applications</h3>
            <p className="text-gray-600">
              If you target both iOS and Android, we can share 10 years of expertise of delivering 
              cross-platform applications for both mobile platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


// App Development Services Section
const MobileAppServices = () => {
  return (
    <section id='services' className="bg-[#091336] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-5">
            Our custom mobile app development <span className="text-blue-500">services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200 text-sm leading-relaxed">
            Our team specializes in finding the most optimal mobile app solutions for businesses in the US, balancing time, cost, 
            and quality to meet North American market standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Native Mobile App Development */}
          <div className="flex flex-col">
            <div className="mb-5">
              <img src="/Native-mobile-app-development.svg" alt="Native App Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-xl font-bold mb-3">Native mobile app development</h2>
            <p className="text-gray-300 text-sm">
              Native mobile development implies superior user experience and the best performance. We offer high-quality native mobile app 
              development for iOS and Android platform for a reasonable price.
            </p>
          </div>
          
          {/* Hybrid Mobile App Development */}
          <div className="flex flex-col">
            <div className="mb-5">
              <img src="/Non-functional-testing-2.svg" alt="Hybrid App Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-xl font-bold mb-3">Hybrid mobile app development</h2>
            <p className="text-gray-300 text-sm">
              Thanks to the latest frameworks, we can develop hybrid applications that blend native and web apps and work well both 
              on the web and mobile.
            </p>
          </div>
          
          {/* Progressive Web App Development */}
          <div className="flex flex-col">
            <div className="mb-5">
              <img src="/Technology-expertise-1.svg" alt="Progressive Web App Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-xl font-bold mb-3">Progressive web app development</h2>
            <p className="text-gray-300 text-sm">
              Make a step further than your competitor with our custom mobile app development services and get a competitive advantage by 
              building a progressive web application(PWA), the most modern type of application on the market.
            </p>
          </div>
          
          {/* Wearable and Embedded Software Development */}
          <div className="flex flex-col">
            <div className="mb-5">
              <img src="/Wearable-and-embedded-software-development.svg" alt="Wearable App Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-xl font-bold mb-3">Wearable and embedded software development</h2>
            <p className="text-gray-300 text-sm">
              We apply the best IT technologies to create applications for the smallest devices and platforms on the market, like smart things, 
              watches, and embedded systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseFoxSolutions = () => {
  return (
    <section id="why" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-blue-500">Why</span> choose Oditech Global
        </h2>
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-start gap-3">
              <div className="text-blue-500 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-800">
                <span className="font-semibold">2 years</span> of successfully providing custom mobile app development services, with a strong focus on the US market.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-blue-500 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-800">
                <span className="font-semibold">150</span> developed projects for 11 industries
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-blue-500 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-800">
                <span className="font-semibold">Well-established</span> processes across all departments
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-blue-500 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-800">
                We deliver <span className="font-semibold">aesthetic mobile app design</span> with a team of professional designers
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-blue-500 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-800">
                <span className="font-semibold">Bugfree software</span> at a reasonable cost
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img 
              src="/image-4.webp" 
              alt="Developer working on mobile application" 
              className="w-full h-auto rounded-md shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Certifications Section Component
const CertificationsWrapper = () => {
    return (
        <div className='mb-6 w-auto'>
            <CertificationsSection
                heading={<>
                    <span className="text-blue-500">Awards</span> & recognitions
                </>}
                description= "Oditech Global has been recognized by the leading analytics agencies working with the best software development companies from all over the world. Our values and partners help us to provide the best software development services for startups in the field."
                imageSize="w-16 md:w-24"
            />
        </div>
    );
};

// How Do We Work Section Component
const HowDoWeWork = () => {
  const steps = [
    {
      number: '1',
      title: 'Step 1: fill out the form below and provide a brief description of your app.',
      description: 'Begin by filling out the form with your project details, outlining your goals, requirements, and any specific needs you have in mind.'
    },
    {
      number: '2',
      title: 'Step 2: consultation with our specialist',
      description: 'Within 24 hours, one of our specialists will contact you to discuss the finer details of your project. This conversation ensures that we fully understand your objectives and expectations.'
    },
    {
      number: '3',
      title: 'Step 3: receive our proposal in a few days',
      description: 'In a remarkably short time, you will receive a comprehensive proposal from us, detailing our understanding of your project, the scope of work, and our proposed solutions.'
    },
    {
      number: '4',
      title: 'Step 4: contract finalization',
      description: 'After reviewing the proposal and ensuring it aligns with your vision, we\'ll proceed to contract finalization. This formal agreement solidifies our commitment to your project.'
    }
  ];

  return (
    <section id='how' className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
          How do we work?
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-500 font-bold text-xl">
                  {step.number}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const MobileAppFAQSection = [
    {
      question: "What is Oditech Global  known for in the realm of a mobile app development?",
      answer: "SumatoSoft is renowned as a mobile application development company that specializes in creating highly tailored and innovative mobile applications tailored to meet specific business needs."
    },
    {
      question: "How much does mobile app development cost?",
      answer: "The final cost of mobile app development services depends on 5 key factors: target platform and devices, features, MVP, team size, and location. The average price range for a full-fledged application will be between $100,000 and $300,000, while MVP development (the initial version of a mobile app) will require $10,000 - $50,000."
    },
    {
      question: "What is cross-platform mobile app development?",
      answer: "Cross-platform custom mobile app development is the practice of creating an application that targets both iOS and Android platform. Cross-platform app development services also sometimes include the third platform: the web."
    },
    {
      question: "How to choose a mobile app development platform?",
      answer: "It depends on several factors, where the key one is the most popular operating system among your target audience. You should focus on building the application for the platform that is most used by your users."
    },
    {
      question: "What types of mobile app development services does Oditech Global offer?",
      answer: "Our custom mobile app development solutions encompass a wide range of solutions, including eCommerce, eLearning, healthcare, and fintech app development, ensuring versatility and expertise in various domains."
    },
    {
      question: "How does Oditech Global ensure the quality of its mobile applications?",
      answer: "As a dedicated mobile application development company, SumatoSoft employs rigorous testing and quality assurance processes to ensure each app is reliable, user-friendly, and meets the highest standards."
    },
    {
      question: "Can Oditech Global build mobile apps for both iOS and Android platforms?",
      answer: "Absolutely, our mobile app developers are skilled in creating cross-platform applications that perform optimally on both iOS and Android devices, maximizing your app's reach."
    },
    {
      question: "How does Oditech Global approach client involvement during the app development process?",
      answer: "We believe in a collaborative approach, keeping our clients involved at every stage of the mobile app development process, ensuring the final product aligns perfectly with their vision and objectives."
    },
    {
      question: "What makes Oditech Global stand out from other mobile app development companies?",
      answer: "SumatoSoft sets itself apart as a custom mobile app development company with its client-centric approach, innovative solutions, and a proven track record of delivering high-quality, effective mobile applications."
    },
    {
      question: "Does Oditech Global provide post-launch support and maintenance for mobile apps?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance as part of our mobile app development services, ensuring your app remains up to date and performs at its best."
    },
    {
      question: "Can Oditech Global help in updating and optimizing existing mobile applications?",
      answer: "Certainly, our mobile app developers are adept at enhancing and upgrading existing apps, providing services to optimize performance, add new features, or improve user experience."
    }
  ];

  return (
    <RevealOnScroll>
    <section id="faq" className="px-4 mb-16">
      <FAQ faqs={MobileAppFAQSection} />
    </section>
    </RevealOnScroll>
  );
};


// Main MobileAppDevelopment Component
const MobileAppDevelopemnt = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const contentsMenu = [
        { title: 'How to create a custom mobile app?', id: 'explainer' },
        { title: 'Our solutions', id: 'solutions' },
        { title: 'Successfully completed projects', id: 'banner' },
        { title: 'Why your business needs a mobile app?', id: 'responses' },
        { title: 'Mobile apps we develop', id: 'applications' },
        { title: 'Our services', id: 'services' },
        { title: 'Why choose Oditech Global?', id: 'why' },
        { title: 'How do we work?', id: 'how' },
        { title: 'FAQ', id: 'faq' }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            aria-label="Close menu">
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
            <Logos />

            {/* Start the flex container for main content and TOC */}
            <div className="container mx-auto flex flex-col lg:flex-row ">
                {/* Main content column - takes 3/4 width on desktop */}
                <div className="w-full lg:w-[200%] px-2">

            <MobileAppExplainer />
            <MobileAppSolutions />      
            <GradientBanner />        
            <MobileAppReasons />
            <MobileApplications />
            <MobileAppServices />
            <WhyChooseFoxSolutions />
            <CertificationsWrapper />
                {/* Client Reviews Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                  What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <ReviewCarousel />
              </div>
            </section>
                <HowDoWeWork />
                <Contact />
                <FAQSection />
                
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

export default MobileAppDevelopemnt;