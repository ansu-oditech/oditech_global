
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import AnimatedButton from "../components/ui/AnimatedButton";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";


import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      title: "Information Technology",
      description:
        "We provide tailored software development, automation, and integration solutions that help IT companies innovate faster and scale smarter.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16V6a1 1 0 00-1-1H5a1 1 0 00-1 1v10m14 0V6a1 1 0 00-1-1h-2m4 11h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Healthcare & Wellness",
      description:
        "From appointment scheduling systems to patient management and telemedicine apps, we build secure, user-friendly healthcare software to enhance patient experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "E-Commerce & Retail",
      description:
        "We help online retailers boost sales with custom eCommerce platforms, mobile shopping apps, and seamless payment & inventory integrations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "Education & E-Learning",
      description:
        "We create next-gen learning management systems, online classroom tools, and gamified learning apps to make education more engaging and accessible.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      title: "Finance & FinTech",
      description:
        "We build secure and scalable FinTech apps for payments, analytics, and customer management—helping financial firms improve efficiency and trust.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7M12 4v16M4 12h16"
          />
        </svg>
      ),
    },
    {
      title: "Real Estate",
      description:
        "Our real estate software solutions include property listing portals, virtual tour integrations, and lead management tools to modernize client engagement.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.75L12 4l9 5.75v10.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 20.25v-10.5z"
          />
        </svg>
      ),
    },
    {
      title: "Travel & Hospitality",
      description:
        "From booking engines to tour management and digital branding, we help travel businesses deliver seamless customer journeys.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10l9-6 9 6M4 10v10h16V10M12 14h.01"
          />
        </svg>
      ),
    },
    {
      title: "Media & Marketing",
      description:
        "We create impactful branding, design, and digital marketing tools that help businesses increase visibility and customer engagement.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7 2l2 6"
          />
        </svg>
      ),
    },
    {
      title: "Startups & Entrepreneurs",
      description:
        "We help startups transform ideas into scalable digital products through MVP development, branding, and product strategy support.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm1 10V7h-2v5H8l4 4 4-4h-3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto bg-black rounded-3xl py-14 px-6 sm:px-10 lg:px-16 mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Industries{" "}
              <span className="text-[#FFB703]">We Empower</span>
            </h2>
            <p className="text-gray-300 mt-3 text-base max-w-2xl mx-auto">
              We collaborate across industries to deliver impactful, scalable, and future-ready digital solutions.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <RevealOnScroll
              key={index}
              delay={index * 80}
              className="
                bg-gradient-to-br from-[#111111] to-[#1a1a1a]
                rounded-xl p-6 transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_0_20px_#FFB70360]
                relative flex flex-col min-h-[200px]
              "
            >
              <div className="flex items-center mb-4 gap-4">
                <div className="p-2 bg-[#FFB7031A] rounded-lg">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {industry.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {industry.description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const techCategories = [
    {
      name: 'Backend Development',
      technologies: [
        { name: 'Java', image: '/java.svg', height: 'h-16' },
        { name: '.NET', image: '/dotnet-logo.svg', height: 'h-14' },
        { name: 'Ruby on Rails', image: '/rubyrails.svg', height: 'h-14' },
        { name: 'Python', image: '/python.svg', height: 'h-16' },
        { name: 'Node.js', image: '/nodejs.svg', height: 'h-16' },
        { name: 'JavaScript', image: '/javascript.svg', height: 'h-12' },
      ]
    },
    {
      name: 'Frontend Development',
      technologies: [
        { name: 'React', image: '/reactjs.svg', height: 'h-12' },
        { name: 'Angular', image: '/angular.svg', height: 'h-16' },
        { name: 'Next.js', image: '/nextjs.svg', height: 'h-12' },
        { name: 'Vue.js', image: '/vuejs.svg', height: 'h-12' },
        { name: 'Bootstrap', image: '/Bootstrap.png', height: 'h-12' },
        { name: 'jQuery', image: '/jquery.svg', height: 'h-16' },
        { name: 'Django', image: '/django.svg', height: 'h-16' },
      ]
    },
    {
      name: 'Mobile Development',
      technologies: [
        { name: 'React Native', image: '/reactnative.svg', height: 'h-12' },
        { name: 'iOS', image: '/ios.svg', height: 'h-12' },
        { name: 'Android', image: '/android.svg', height: 'h-12' },
      ]
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-blue-500">Core tech stack</span> we work with
        </h2>

        {techCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-60 text-gray-800 font-medium"></div>
              <div className="flex-grow h-px bg-gray-400"></div>
            </div>

            <div className="flex flex-wrap items-start gap-16">
              <h2 className="font-medium w-48">{category.name}</h2>
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex flex-col items-center">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className={tech.height}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdvancedTech = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const techCards = [
    {
      id: "web-development",
      title: "Website Development",
      description:
        "We build responsive, fast, and scalable websites that reflect your brand identity and drive measurable results. From static sites to enterprise-grade web apps, we deliver user-centric solutions powered by the latest technologies.",
      services: [
        "Progressive Web Apps (PWAs): Deliver app-like experiences through browsers, enhancing engagement.",
        "WebAssembly (Wasm): Enables high-performance web applications for speed and interactivity.",
        "Headless CMS: Offers flexibility by decoupling content management from presentation layers.",
        "Core Web Vitals Optimization: Focuses on improving SEO and user experience metrics.",
        "AI-Powered Personalization: Uses machine learning to tailor content to each visitor.",
      ],
      linkText: "Explore Website Development",
      link: "/services/web-development",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png"
          alt="Web Development"
          className="w-8 h-8"
        />
      ),
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description:
        "We design and develop engaging mobile experiences that connect your brand with customers anywhere. Our mobile solutions combine sleek UI with powerful functionality for both Android and iOS.",
      services: [
        "IoT Integration: Connects mobile apps with smart devices for advanced capabilities.",
        "Foldable Device Optimization: Designs adaptive layouts for foldable devices.",
        "5G Technology: Utilizes high-speed connectivity for real-time app performance.",
        "AI-Powered Personalization: Customizes experiences based on behavior and preferences.",
        "Cross-Platform Frameworks: Builds with Flutter and React Native for faster deployment.",
      ],
      linkText: "Explore Mobile App Development",
      icon: (
     <img
    src="https://cdn-icons-png.flaticon.com/512/254/254638.png"
    alt="Mobile App"
    className="w-8 h-8 object-contain"
  />

      ),
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Online Advertising",
      description:
        "We create data-driven marketing strategies that enhance visibility, attract leads, and boost conversions through cutting-edge AI and analytics.",
      services: [
        "AI-Driven Automation: Uses machine learning for smarter ad targeting and personalization.",
        "Omnichannel Experiences: Ensures cohesive engagement across all platforms.",
        "Social Media Battles: Leverages competitive content formats for viral engagement.",
        "Content Marketing Evolution: Builds brand loyalty through story-driven campaigns.",
        "Search Marketing Innovations: Adapts to modern SEO and algorithmic updates.",
      ],
      linkText: "Explore Digital Marketing",
      icon: (
        <img
    src="https://cdn-icons-png.flaticon.com/512/1968/1968750.png"
    alt="Social Media Marketing"
    className="w-10 h-10 object-contain"
  />
      ),
    },
    {
      id: "logo-design",
      title: "Logo & Brand Identity Designing",
      description:
        "We help brands create visual systems that are bold, memorable, and aligned with modern design principles for maximum recognition.",
      services: [
        "AI-Powered Design Tools: Accelerate creative processes with generative design AI.",
        "Bold Minimalism: Combines simplicity and impact for timeless aesthetics.",
        "Custom Typography: Creates fonts that reflect brand personality and tone.",
        "Sustainable Design Practices: Uses eco-friendly materials and production methods.",
        "Interactive Branding Elements: Integrates motion and dynamic visuals for engagement.",
      ],
      linkText: "Explore Brand Identity Services",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828742.png"
          alt="Brand Design"
          className="w-8 h-8"
        />
      ),
    },
    {
      id: "graphic-design",
      title: "Graphic Designing",
      description:
        "We design visuals that inspire and connect emotionally, blending art with innovation to create meaningful communication.",
      services: [
        "Motion Graphics: Adds dynamic storytelling elements to designs.",
        "Augmented Reality (AR): Creates immersive, interactive visual experiences.",
        "3D Design Elements: Adds realism and depth to digital visuals.",
        "Generative Design Algorithms: Utilizes AI to create complex structures.",
        "Sustainable Materials: Focuses on eco-conscious creative production.",
      ],
      linkText: "Explore Graphic Designing",
      icon: (
       <img
    src="https://cdn-icons-png.flaticon.com/512/2857/2857433.png"
    alt="Design Thinking"
    className="w-10 h-10 object-contain"
  />
      ),
    },
    {
      id: "video-production",
      title: "Video Production & Editing",
      description:
        "We produce cinematic, brand-driven video content powered by cutting-edge AI and immersive technologies.",
      services: [
        "AI-Enhanced Editing: Automates color correction and scene transitions.",
        "Virtual Production Techniques: Employs real-time rendering and LED stages.",
        "Drone Cinematography: Captures breathtaking aerial visuals.",
        "User-Generated Content (UGC) Integration: Adds authenticity through audience content.",
        "Interactive Video Elements: Enables clickable and engaging user experiences.",
      ],
      linkText: "Explore Video Production",
      icon: (
         <img
    src="https://cdn-icons-png.flaticon.com/512/711/711245.png"
    alt="Video Production"
    className="w-10 h-10 object-contain"
  />
      ),
    },
    {
      id: "pr",
      title: "PR & Reputation Management",
      description:
        "We manage your public image with AI-driven strategies that reinforce trust, transparency, and long-term credibility.",
      services: [
        "AI-Powered Sentiment Analysis: Tracks public perception in real-time.",
        "Crisis Management Platforms: Enables quick digital response systems.",
        "Integrated Storytelling: Crafts unified brand narratives across media.",
        "Influencer Partnerships: Leverages trusted voices for credibility.",
        "Transparency and Authenticity: Builds audience trust through openness.",
      ],
      linkText: "Explore PR & Reputation Management",
      icon: (
        <img
    src="https://cdn-icons-png.flaticon.com/512/1769/1769041.png"
    alt="People"
    className="w-10 h-10 object-contain"
  />
      ),
    },
    {
      id: "influencer",
      title: "Influencer & Social Media Management",
      description:
        "We help brands and creators scale their online presence through analytics-driven content strategies and engagement systems.",
      services: [
        "AI-Driven Content Scheduling: Optimizes post timings for best engagement.",
        "Social Listening Tools: Monitors brand mentions and audience sentiment.",
        "Influencer Analytics Platforms: Tracks performance metrics accurately.",
        "Augmented Reality Filters: Creates interactive social experiences.",
        "Live Streaming Integration: Boosts audience interaction and reach.",
      ],
      linkText: "Explore Social Media Management",
      icon: (
         <img
    src="https://cdn-icons-png.flaticon.com/512/1769/1769041.png"
    alt="People"
    className="w-10 h-10 object-contain"
  />
      ),
    },
    {
      id: "3dDesign",
      title: "3D Designing & Elevation",
      description:
        "We turn your architectural vision into lifelike 3D experiences using advanced visualization tools and sustainable practices.",
      services: [
        "Generative Design Algorithms: Creates optimized architectural forms.",
        "Virtual Reality (VR) Walkthroughs: Immersive exploration of spaces.",
        "3D Printing: For rapid prototyping and construction visualization.",
        "Building Information Modeling (BIM): Integrates detailed digital twins.",
        "Sustainable Design Technologies: Promotes eco-conscious architecture.",
      ],
      linkText: "Explore 3D Designing & Elevation",
      icon: (
        <img
    src="https://cdn-icons-png.flaticon.com/512/3094/3094806.png"
    alt="User Network"
    className="w-10 h-10 object-contain"
  />
      ),
    },
    {
      id: "political",
      title: "Political Campaigns & Social Media-PR Management",
      description:
        "We power political campaigns with AI, analytics, and digital storytelling for unmatched reach and real-time influence.",
      services: [
        "AI-Powered Voter Analysis: Uses ML to segment voters for personalized outreach.",
        "Deepfake Technology: Enables multilingual, creative digital campaigns.",
        "Algorithmic Party Platforms: Adapts content based on live sentiment data.",
        "Disinformation Detection Tools: Detects fake profiles and mitigates threats.",
        "Influencer Collaborations: Engages youth through digital political influencers.",
      ],
      linkText: "Explore Political Campaign Management",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/128/4206/4206479.png"
          alt="Political Campaign"
          className="w-8 h-8"
        />
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 mt-10">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-16 text-center text-black">
            Advanced <span className="text-[#FFB703]">Technologies We Work With</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {techCards.map((card) => (
              <div
                key={card.id}
                className={`bg-white rounded-xl p-6 sm:p-8 border border-gray-200 transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-xl relative overflow-hidden flex flex-col`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#FFB703]/10 to-transparent 
                    opacity-0 transition-opacity duration-300 ${
                      hoveredCard === card.id ? "opacity-100" : ""
                    }`}
                ></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FFB703]/20 rounded-full flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-black">
                    {card.title}
                  </h3>
                  <p className="text-black/80 mb-5 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-5">
                    {card.services.map((service, index) => (
                      <li key={index} className="flex text-sm sm:text-base text-black/80 items-start">
                        <span className="text-[#FFB703] font-bold mr-2 mt-[2px]">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>

              <Link
  to={`/services/${card.id}`}
  className="inline-flex items-center text-[#FFB703] hover:text-black text-sm sm:text-base font-medium mt-auto transition-colors"
>
  {card.linkText} <span className="ml-1 text-lg">›</span>
</Link>

                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

const WhyChooseUS = () => {
  const benefits = [
    {
      title: "Unwavering Transparency",
      description:
        "We prioritize clear and open communication from the outset. Our process begins with a detailed roadmap, setting explicit KPIs, defining reporting structures, scheduling regular sync-ups, and establishing rigorous testing protocols. This transparency ensures alignment and fosters trust throughout our partnership.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Competitive and Fair Pricing",
      description:
        "At ODITECH, we offer pricing that reflects the value we deliver. Our clients receive robust, scalable solutions built on maintainable code, while we invest in continuous professional growth. It's a mutually beneficial approach that drives long-term success.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Strategic Resource Allocation",
      description:
        "Success hinges on the right talent. With over 1 years of experience, we've honed a meticulous selection process to match the perfect candidate to each role. We ensure that every team member's skills and aspirations align with project needs, optimizing efficiency and outcomes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Adaptive Change Management",
      description:
        "In the dynamic realm of software development, change is constant. Our structured change management framework allows us to swiftly assess, prioritize, and implement modifications without disrupting timelines or compromising quality. This agility keeps projects on track and aligned with evolving goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Collaborative Client Engagement",
      description:
        "We tailor our collaboration model to suit your preferences. Whether you seek a turnkey solution or a more hands-on approach with direct involvement from your management team, we adapt our processes to seamlessly integrate with your workflow.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Precise Scoping for Success",
      description:
        "Accurate scoping is the cornerstone of effective project execution. Through comprehensive analysis and collaborative planning, we define clear objectives, prioritize features, and establish a realistic development roadmap, mitigating risks like scope creep and budget overruns.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Proactive Risk Management",
      description:
        "We approach risk with honesty and foresight. By continuously evaluating potential operational, technological, and external threats, we proactively implement mitigation strategies. This vigilance ensures project stability and protects against unforeseen challenges.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#FFB703]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="container px-8 md:px-12 mx-auto bg-black rounded-3xl py-16 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why Leading Brands Choose{" "}
              <span className="text-[#FFB703]">ODITECH Global</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
          {benefits.map((benefit, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center gap-3">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Clutch rating section */}
        <div className="mt-12 text-center">
          <div className="inline-block">
            <span className="text-white font-medium text-lg mb-1">
              Clutch Rating:
            </span>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#FFB703]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-medium ml-2">4.9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BuildingStrong = () => {
  const Values = [
    {
      title: 'Sustainability Commitment',
      description:
        'We are committed to supporting sustainable growth and contributing to a better future. As proud members of the Council for Inclusive Capitalism, we integrate sustainable practices into our projects and operations, prioritizing long-term solutions that positively impact the environment, society, and economy.'
    },
    {
      title: 'Agility and Adaptability',
      description:
        'As evangelists of Agile and modern technologies, we embrace change in the technological landscape and adapt quickly. Our agile approach and well-established processes enable us to meet dynamic client requirements and stay ahead of market trends.'
    },
    {
      title: 'Cultural Sensitivity',
      description:
        'We respect and adapt to the cultural nuances of our clients, employees, and partners. Our international operations span the USA, EU, Africa, Asia, and Latin America, ensuring global understanding and collaboration.'
    },
    {
      title: 'Client-Centric Approach',
      description:
        'Our clients are at the heart of everything we do. We work tirelessly to understand their needs, exceed expectations, and deliver solutions that align with their goals — building long-lasting, mutually beneficial relationships.'
    },
    {
      title: 'Security and Confidentiality',
      description:
        'As an ISO 9001 and ISO 27001-certified company, we uphold the highest standards for information security. From NDAs and two-factor authentication to strict internal data protocols, we ensure every client’s data remains safe and confidential.'
    }
  ];

  return (
    <div className="container mx-auto bg-white rounded-3xl py-14 px-6 sm:px-10 lg:px-16 mt-10 shadow-[0_0_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Building on Strong <span className="text-[#FFB703]">Values</span>
            </h2>
            <p className="text-gray-600 mt-3 text-base max-w-3xl mx-auto">
              At ODITECH Global, our values form the foundation of every decision we make —
              guiding our actions, shaping our culture, and driving meaningful innovation.
            </p>
          </div>
        </RevealOnScroll>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          {Values.map((value, index) => (
            <RevealOnScroll key={index} delay={index * 80}>
              <div
                className="
                  bg-[#FAFAFA] border border-[#FFB703]/30
                  p-8 rounded-xl transition-all duration-300
                  hover:-translate-y-2 hover:shadow-[0_0_20px_#FFB70340]
                "
              >
                <h3 className="text-xl font-semibold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

const serviceItems = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: `At Oditech Global, we deliver powerful web solutions that position your business at the forefront of digital excellence. Our dedicated team of experts designs and develops responsive, SEO-optimised websites that function flawlessly on any device — from smartphones to desktop monitors. You’ll benefit from a clean, intuitive user experience that keeps visitors engaged, drives conversions, and clearly reflects your brand identity. We don’t stop at launch: we provide full-service support including hosting, security updates, performance optimisation and ongoing maintenance. With Oditech, you gain a trusted technology partner committed to strengthening your online presence, accelerating your growth and ensuring you stand out as a leader in your industry.`,
    icon: (
      // 💻 Code window / web layout
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18M9 16l-2-2 2-2M15 12l2 2-2 2" />
      </svg>
    ),
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: `At Oditech Global, we turn your mobile app vision into reality — and we lead the field in doing so. Our highly-skilled developers specialise in crafting top-tier apps for Android, iOS, and cross-platform frameworks like Flutter, enabling your business to hit bold targets. Using the latest tools, best practices and performance-driven architecture, we build powerful, user-centric mobile solutions that don’t just work — they dominate. From initial strategy and design through development, deployment and ongoing support, we deliver full-lifecycle mobile excellence at competitive rates with dedicated local support. Choose Oditech and position your brand at the forefront of the mobile world.`,
    icon: (
      // 📱 Smartphone icon
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Online Advertising',
    description: `At Oditech Global, we don’t just market your brand — we elevate it to industry leadership. As a trusted digital marketing agency, we implement proven strategies across platforms — including Google — to deliver measurable outcomes. Whether you need a local partner or a full-service campaign, our performance-driven solutions and custom strategies help you build a powerful online presence.
Our expert team crafts data-driven campaigns that drive traffic, boost conversions, and build lasting customer relationships. From SEO and PPC to social media marketing and content creation, we provide end-to-end solutions tailored to your business goals. With a focus on measurable results and transparent reporting, we ensure your marketing investment delivers maximum ROI. Partner with us to dominate the digital landscape and achieve sustainable growth.`,
    icon: (
      // 📢 Megaphone for marketing
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path d="M3 10v4a1 1 0 001 1h2v5l4-5h8a1 1 0 001-1V9a1 1 0 00-1-1H7l-4-5v5a1 1 0 001 1H5" />
      </svg>
    ),
  },
  {
    id: 'logoandbrand',
    title: 'Logo & Brand Identity Designing',
    description: `At Oditech Global, we understand that your logo is more than just a symbol—it's the cornerstone of your brand identity. Our team of seasoned designers crafts unique, memorable logos that encapsulate your brand's essence and set you apart in a crowded market. Unlike generic online tools, we offer personalized design solutions that reflect your company's values, mission, and vision. We collaborate closely with you throughout the design process, ensuring every element aligns with your brand's story. From initial concept to final output, we deliver high-quality, scalable logos suitable for all platforms and mediums. Our designs are not only visually appealing but also strategically crafted to foster brand recognition and loyalty. Choose Oditech Global for a logo that speaks volumes about your brand's professionalism and commitment to excellence.`,
    icon: (
      // 🎨 Pen nib (design/brand)
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path d="M12 19l-2-5-5-2 9-9 2 5 5 2-9 9z" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    id: 'graphicdesign',
    title: 'Graphic Designing',
    description: `At Oditech Global, we specialize in crafting compelling visual identities that resonate with your audience. Our in-house team of graphic and motion designers creates impactful digital assets—from vector illustrations and brand collateral to dynamic motion graphics—that capture your brand’s essence. We go beyond templates, delivering custom designs that engage, inspire, and set you apart in a competitive market. Whether you need a reliable design partner or a full creative suite, our solutions are tailored to elevate your brand and drive meaningful connections with your audience.`,
    icon: (
      // 🖌️ Paintbrush / creative tool
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path d="M2 22l5-2a2 2 0 002-2l1-5 8-8a3 3 0 114 4l-8 8-5 1a2 2 0 01-2 2l-2 5z" />
      </svg>
    ),
  },
  {
    id: 'videoproduction',
    title: 'Video Production & Editing',
    description: `Oditech Global, we specialize in crafting compelling visual narratives that resonate with your audience. Our expert team delivers high-quality videos encompassing CGI animations, dynamic motion graphics, and authentic user-generated content (UGC) ads. Whether you're aiming to showcase your products with lifelike CGI visuals, engage audiences through creative motion graphics, or build trust with relatable UGC ads, we offer tailored solutions to meet your needs. From concept development to final edits, we ensure your brand message is delivered with clarity and impact, helping you connect with your audience and achieve your business objectives. Partner with us to bring your story to life and elevate your brand's presence.`,
    icon: (
      // 🎬 Clapboard for video
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path d="M4 4h16v16H4zM4 8h16M4 12h16" />
        <path d="M9 4l2 4M15 4l2 4" />
      </svg>
    ),
  },
  {
    id: 'pr',
    title: 'PR & Reputation Management',
    description: `At Oditech Global, we specialize in protecting and enhancing your brand's reputation through comprehensive PR services. Our expert team excels in crisis communications, swiftly addressing and mitigating potential threats to your brand's image. We develop tailored reputation management strategies that proactively build trust and credibility with your audience. Whether you're navigating a challenging situation or aiming to strengthen your public perception, our strategic PR services provide the support and guidance you need. With a focus on clear messaging, media relations, and stakeholder engagement, we ensure your brand maintains a strong, positive presence in any scenario. Trust us to be your partner in reputation resilience and growth.`,
    icon: (
      // 📰 Newspaper / media icon
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h10" />
      </svg>
    ),
  },
  {
    id: 'influencer',
    title: 'Influencer & Social Media Management',
    description: `At Oditech Global, we understand that your online presence is your brand. Our expert team specializes in enhancing and managing your social media platforms to ensure consistent growth and engagement. We offer tailored strategies encompassing content creation, community management, and performance analytics, allowing you to focus on what you do best—creating authentic content. Whether you're aiming to expand your reach, increase follower engagement, or monetize your platforms, our comprehensive services are designed to support your journey. Partner with us to amplify your influence and achieve sustained success in the digital landscape.`,
    icon: (
      // 🌐 Globe + chat (social connectivity)
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a9 9 0 000 18M12 3c3.866 0 7 4.477 7 9s-3.134 9-7 9" />
      </svg>
    ),
  },
  {
    id: '3d-design',
    title: '3D Designing & Elevation',
    description: `At Oditech Global, we specialize in transforming your architectural concepts into detailed 3D visualizations. Our expert team creates realistic exterior renderings that showcase your building's design from multiple angles, allowing you to visualize the final structure before construction begins. We focus on elements such as façade design, material selection, and lighting effects to provide a comprehensive view of your project. Whether you're an architect, builder, or homeowner, our 3D elevation services help you make informed decisions, streamline approvals, and enhance client presentations. Partner with us to bring clarity and confidence to your design process.`,
    icon: (
      // 🏗️ 3D cube / building structure
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path d="M12 2l9 5v10l-9 5-9-5V7z" />
        <path d="M12 22V12l9-5M12 12L3 7" />
      </svg>
    ),
  },
  {
  id: 'political',
  title: 'Political Campaigns & Social Media PR Management',
  description: `At Oditech Global, we specialize in enhancing your political campaign's visibility and reputation through strategic public relations and impactful banner designs. Our expert team crafts tailored PR strategies that encompass crisis communications, media relations, and public image consulting, ensuring your message resonates with your audience. Additionally, we offer custom-designed political banners that capture attention and convey your platform effectively. Whether you're seeking to manage your public image, navigate media landscapes, or create compelling visual assets, our comprehensive services are designed to support your campaign's success. Partner with us to amplify your political presence and achieve your objectives.`,
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10v4a1 1 0 001 1h2v5l4-5h8a1 1 0 001-1V9a1 1 0 00-1-1H7l-4-5v5a1 1 0 001 1H5"
      />
    </svg>
  ),
},


];


const Services = () => {
  const location = useLocation();

  // ✅ Smooth scroll logic
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Delay ensures the page fully renders before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    } else {
      // Scroll to top when no hash present
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const [activeService, setActiveService] = useState("web-dev");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      {/* ========================= */}
      {/* SERVICES SECTION */}
      {/* ========================= */}
      <section id="services" className="pt-12 pb-12">
        <div className="container px-6 mx-auto bg-[#FFB703] rounded-lg py-10 -mt-8">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-black font-medium text-sm mb-4 transform -translate-y-2">
                Our Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Comprehensive Digital Solutions for Your Business
              </h2>
              <p className="text-black font-normal text-base leading-relaxed tracking-wide opacity-90 max-w-6xl mx-auto text-center">
                We are Oditech Global — a leader in IT, design, and digital
                marketing. We don’t just follow the future — we build it.
              </p>
            </div>
          </RevealOnScroll>

          {/* 🌐 Mobile View */}
          {isMobile ? (
            <div className="space-y-4">
              {serviceItems.map((service) => (
                <div key={service.id} className="bg-gray-100 rounded-xl p-4">
                  <button
                    onClick={() =>
                      setActiveService(
                        activeService === service.id ? "" : service.id
                      )
                    }
                    className="w-full flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-black/10 text-black flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-black">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {service.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                    <motion.span
                      animate={{
                        rotate: activeService === service.id ? 180 : 0,
                      }}
                      className="text-black transition-transform duration-100"
                    >
                      ▼
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-16 space-y-4">
                          <p className="text-gray-700">
                            {service.description}
                          </p>
                          <a
                            href={`/brochures/${service.id}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AnimatedButton className="w-full">
                              Download Brochure
                            </AnimatedButton>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ) : (
            /* 💻 Desktop View */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <RevealOnScroll className="lg:col-span-1">
                <div className="bg-gray-100 rounded-xl p-2">
                  <div className="space-y-2">
                    {serviceItems.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-4",
                          activeService === service.id
                            ? "bg-white shadow-md"
                            : "hover:bg-white/50"
                        )}
                      >
                        <div
                          className={cn(
                            "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
                            activeService === service.id
                              ? "bg-black text-white"
                              : "bg-gray-200 text-black"
                          )}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-black">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-700">
                            {service.description.substring(0, 60)}...
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100} className="lg:col-span-2">
                {serviceItems.map(
                  (service) =>
                    service.id === activeService && (
                      <div
                        key={service.id}
                        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-4/6 flex flex-col"
                      >
                        <div className="mb-4">
                          <div className="w-16 h-16 rounded-xl bg-black/10 flex items-center justify-center text-black mb-4">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-black mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 mb-5">
                            {service.description}
                          </p>
                        </div>

                        <div className="mt-auto pb-6">
                          <a
                            href={`/brochures/${service.id}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AnimatedButton className="text-sm w-full md:w-auto">
                              Download Brochure
                            </AnimatedButton>
                          </a>
                        </div>
                      </div>
                    )
                )}
              </RevealOnScroll>
            </div>
          )}
        </div>
      </section>




     
      <Industries />
      {/* <TechStack /> */}
      <AdvancedTech />
      <WhyChooseUS />
      <BuildingStrong />

    </div>
  );
};

export default Services;