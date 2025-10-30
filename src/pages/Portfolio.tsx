
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';
import { cn } from '@/lib/utils';

const portfolioItems = [

  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    description: 'Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversion rate and improved user experience.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Healthcare Patient Portal',
    description: 'Development of a secure patient portal for a healthcare provider, enabling patients to access records, schedule appointments, and communicate with providers.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Angular', 'Express', 'PostgreSQL', 'Docker'],
    link: '#',
  },
  {
    id: 3,
    title: 'Financial Services Mobile App',
    description: 'Created a user-friendly mobile application for a financial services company, allowing customers to manage accounts, make transactions, and track spending habits.',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    technologies: ['React Native', 'Redux', 'Firebase', 'Plaid API'],
    link: '#',
  },
  {
    id: 4,
    title: 'Educational Platform UI/UX Redesign',
    description: 'Comprehensive redesign of the user interface and experience for an educational platform, improving student engagement and learning outcomes.',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
    link: '#',
  },
  {
    id: 5,
    title: 'Real Estate Listing Platform',
    description: 'Development of a comprehensive real estate listing platform with advanced search functionality, virtual tours, and agent-client communication tools.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    link: '#',
  },
  {
    id: 6,
    title: 'fitnes appliation ',
    description: 'Designed and developed a fitness tracking app with workout plans, progress monitoring, and social sharing features, resulting in high user engagement.',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Fitness APIs'],
    link: '#',
  },
  {
    id: 7,
    title: 'Corporate Brand Identity Redesign',
    description: 'Complete overhaul of brand identity for a corporate client, including logo design, style guide development, and marketing materials.',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80',
    technologies: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy', 'Design Systems'],
    link: '#',
  },
  {
    id: 8,
    title: 'Restaurant Online Ordering System',
    description: 'Custom-built online ordering system for a restaurant chain, integrating with their existing POS system and enabling smooth order processing.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'POS API'],
    link: '#',
  },
  {
    id: 9,
    title: 'Travel Experience Mobile App',
    description: 'Developed a feature-rich travel app that helps users discover, plan, and book unique experiences in destinations worldwide.',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    technologies: ['React Native', 'Redux', 'Firebase', 'Google Maps API'],
    link: '#',
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];

const PortfolioCard = ({ item }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <AnimatedButton href={item.link} size="sm">View Project</AnimatedButton>
      </div>
    </div>
    <div className="p-6">
      <div className="mb-2">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-fox-blue/10 text-fox-blue">
          {item.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-fox-darkBlue mb-2">{item.title}</h3>
      <p className="text-fox-darkGray mb-4 line-clamp-2">{item.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {item.technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-fox-gray px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [darkMode, setDarkMode] = useState(false);




  
  
  const filteredItems = portfolioItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-fox-gray to-white">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-fox-blue/10 text-fox-blue font-medium text-sm mb-4">
                  Our Portfolio
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-fox-darkBlue mb-6">
                  Our Work Speaks for Itself
                </h1>
                <p className="text-lg text-fox-darkGray mb-8">
                  Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Portfolio Filters & Grid */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      activeCategory === category
                        ? "bg-fox-blue text-white"
                        : "bg-fox-gray text-fox-darkGray hover:bg-fox-blue/10 hover:text-fox-blue"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <RevealOnScroll key={item.id} delay={index * 100}>
                  <PortfolioCard item={item} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-fox-darkBlue text-white">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl opacity-90 mb-8">
                  Let's discuss how we can help bring your vision to life.
                </p>
                <AnimatedButton variant="primary" size="lg">
                  Get in Touch
                </AnimatedButton>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
