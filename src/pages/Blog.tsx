import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2023',
    excerpt: 'Explore the emerging trends shaping the future of web development and how they\'ll impact businesses in the coming years.',
    category: 'Web Development',
    date: 'June 15, 2023',
    readTime: '8 min read',
    author: {
      name: 'Alex Johnson',
      role: 'Senior Developer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    title: 'How AI is Revolutionizing Mobile App Development',
    excerpt: 'Discover how artificial intelligence and machine learning are transforming the way mobile apps are designed, developed, and used.',
    category: 'Mobile Development',
    date: 'May 22, 2023',
    readTime: '6 min read',
    author: {
      name: 'Samantha Lee',
      role: 'Mobile Developer',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    title: 'The Psychology of UX Design: Creating Intuitive User Experiences',
    excerpt: 'Learn how understanding human psychology can help designers create more intuitive and engaging user experiences.',
    category: 'UI/UX Design',
    date: 'April 10, 2023',
    readTime: '7 min read',
    author: {
      name: 'Michael Chen',
      role: 'UX Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 4,
    title: 'SEO Strategies That Actually Work in Today\'s Digital Landscape',
    excerpt: 'Cut through the noise and discover proven SEO strategies that will help your business improve visibility and drive organic traffic.',
    category: 'Digital Marketing',
    date: 'March 15, 2023',
    readTime: '9 min read',
    author: {
      name: 'Olivia Wilson',
      role: 'SEO Specialist',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 5,
    title: 'The Rise of Progressive Web Apps: Benefits and Implementation',
    excerpt: 'Explore how Progressive Web Apps are changing the way businesses deliver mobile experiences and how to implement them effectively.',
    category: 'Web Development',
    date: 'February 28, 2023',
    readTime: '7 min read',
    author: {
      name: 'David Miller',
      role: 'Frontend Developer',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 6,
    title: 'How to Build a Successful Digital Transformation Strategy',
    excerpt: 'Learn the key components of a successful digital transformation strategy and how to implement them in your organization.',
    category: 'Digital Strategy',
    date: 'January 17, 2023',
    readTime: '10 min read',
    author: {
      name: 'Emma Thompson',
      role: 'Digital Strategist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
];

const categories = [
  'All Categories',
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Digital Marketing',
  'Digital Strategy',
];

const BlogCard = ({ post }) => (
  <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
    <div className="relative h-52 overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      <div className="absolute top-0 right-0 m-4">
        <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-vofox-blue shadow-sm">
          {post.category}
        </span>
      </div>
    </div>
    <CardHeader className="space-y-2">
      <div className="flex items-center text-sm text-gray-500 space-x-3">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <CardTitle className="text-xl text-vofox-darkBlue hover:text-vofox-blue transition-colors duration-300">
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </CardTitle>
      <CardDescription className="text-base line-clamp-2">{post.excerpt}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center space-x-3">
        <img 
          src={post.author.avatar} 
          alt={post.author.name} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-vofox-darkBlue">{post.author.name}</p>
          <p className="text-xs text-gray-500">{post.author.role}</p>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Link to={`/blog/${post.id}`} className="text-vofox-blue font-medium hover:underline">
        Read Full Article →
      </Link>
    </CardFooter>
  </Card>
);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    // Filter by category
    if (activeCategory !== 'All Categories' && post.category !== activeCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-vofox-gray to-white">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-vofox-blue/10 text-vofox-blue font-medium text-sm mb-4">
                  Our Blog
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-vofox-darkBlue mb-6">
                  Insights & Expertise
                </h1>
                <p className="text-lg text-vofox-darkGray mb-8">
                  Stay updated with the latest trends, insights, and expert advice in technology and digital innovation.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Blog Filters */}
        <section className="py-10">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      activeCategory === category
                        ? "bg-vofox-blue text-white"
                        : "bg-vofox-gray text-vofox-darkGray hover:bg-vofox-blue/10 hover:text-vofox-blue"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="w-full md:w-auto">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="w-full md:w-64 pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <RevealOnScroll key={post.id} delay={post.id * 100}>
                    <BlogCard post={post} />
                  </RevealOnScroll>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-lg text-vofox-darkGray">No articles found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-vofox-gray">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-vofox-darkBlue mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-vofox-darkGray mb-8">
                  Get the latest articles, insights, and updates delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input placeholder="Enter your email" type="email" className="bg-white" />
                  <AnimatedButton variant="primary">Subscribe</AnimatedButton>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
