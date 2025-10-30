import { Button } from '../ui/button';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { useState, useEffect, useRef } from 'react';
import HoverCarousel from "../../components/ui/HoverCarousel";

import Gloria from "../../assets/photos/team/gloria.jpeg";
import Ansu from "../../assets/photos/team/ansushree.jpg";
import Niharika from "../../assets/photos/team/niharika.jpeg";
import Sharmista from "../../assets/photos/team/sharmista.jpeg";
import Suchi from "../../assets/photos/team/suchi.jpeg";
import Ayush from "../../assets/photos/team/ayush.jpeg";
 import Deepak from "../../assets/photos/team/deepak.jpg";
import Jasmine from "../../assets/photos/team/jasmin.jpeg";
import Ritesh from "../../assets/photos/team/ritesh.jpg";
import Rohit from "../../assets/photos/team/rohitbhai.jpeg";
import Kunal from "../../assets/photos/team/kunal.jpg";
import Chandramani from "../../assets/photos/team/chandramani.jpg";
import Shreosi from "../../assets/photos/team/shreosi.jpg";
import Biswajit from "../../assets/photos/team/biswajit.jpg";
import Debendra from "../../assets/photos/team/P_Debendra_Rao.jpeg";
import aboutus from "../../assets/photos/about-us.jpg"
import whatwedo from "../../assets/photos/what-we-do.jpg"

const teamMembers = [
  { name: "Gloria", role: "Senior Content Writer", img: Gloria },
  { name: "Ansu", role: "Full Stack Developer", img: Ansu },
  { name: "Niharika", role: "Web Developer", img: Niharika },
  { name: "Sharmista", role: "Social Media Marketing Stratergist", img: Sharmista },
  { name: "Suchi", role: "SEO & SEM Expert", img: Suchi },
  { name: "Ayush", role: "UI/UX Designer", img: Ayush },
  { name: "Deepak", role: "Application Developer", img: Deepak },
  { name: "Kunal", role: "Application Developer", img: Kunal },
  { name: "Jasmin", role: "Client Account Executive", img: Jasmine },
  { name: "Ritesh", role: "Sales Expert", img: Ritesh },
  { name: "Rohit", role: "The Protagonist", img: Rohit },
  { name: "Shreosi", role: "The Sales Intern", img: Shreosi },
  { name: "Biswajit", role: "The Graphics Designer", img: Biswajit },
  { name: "Chandramani", role: "The Graphics Designer", img: Chandramani },
  
];

const About = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide for team members
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 14); 
    }, 2500);
    return () => clearInterval(interval);
  }, []);

 

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 hero">
        <div className="container mx-auto text-center space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            WHO WE ARE
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            HELPING BRANDS GROW THROUGH CREATIVITY, TECHNOLOGY, STRATEGY AND RESULTS
          </p>
          <div className="pt-6">
            <Button 
              onClick={() => setIsDialogOpen(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition-smooth hover:scale-105"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-64 items-center justify-between">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="hover:scale-110 hover:shadow-[2px_2px_0_#f0b100] transition-all duration-300">
                ABOUT US
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a technology-driven company dedicated to delivering innovative solutions that empower businesses to succeed in the digital age. With expertise in software development, consulting, data analytics, and emerging technologies, we combine strategy and creativity to solve complex challenges, foster growth, and build lasting value for clients across industries.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={aboutus}
              alt="About Us - Our Team"
              className="w-full max-w-md h-auto rounded-lg hover:scale-105 hover:shadow-[4px_4px_0_#f0b100] transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-32 items-center justify-between">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="hover:scale-110 hover:shadow-[2px_2px_0_#f0b100] transition-all duration-300">
                WHAT WE DO
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide end-to-end technology services tailored to meet diverse business needs. From application development, IT consulting, and data analytics to enterprise solutions, mobile apps, and digital transformation, our expertise spans industries. By integrating innovation with strategy, we help organizations optimize processes, enhance user experiences, and achieve sustainable growth in a digital-first world.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={whatwedo}
              alt="What We Do - Workspace"
              className="w-full max-w-md h-auto rounded-lg hover:scale-105 hover:shadow-[4px_4px_0_#f0b100] transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* The Leaders Section */}
     <section className="relative py-20 px-4 max-w-7xl mx-auto min-h-[400px]">
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px]">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold uppercase">THE LEADER</h2>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="relative w-[300px] h-[400px] group cursor-pointer overflow-hidden">
        <svg
          width="300"
          height="400"
          viewBox="0 0 382 555"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          overflow="hidden"
        >
          <defs>
            <clipPath id="leader-shape">
              <path d="M0 24C0 10.7452 10.7452 0 24 0H358C371.255 0 382 10.7452 382 24V531C382 544.255 371.255 555 358 555H300.5C287.245 555 276.5 544.255 276.5 531V466.195C276.5 452.94 265.755 442.195 252.5 442.195H24C10.7452 442.195 0 431.45 0 418.195V24Z" />
            </clipPath>
          </defs>

          <g clipPath="url(#leader-shape)">
            <image
              href={Debendra}
              width="382"
              height="555"
              preserveAspectRatio="xMidYMid slice"
              className="transition-all duration-300 opacity-100 group-hover:opacity-0"
            />
            <image
              href={Debendra}
              width="382"
              height="555"
              preserveAspectRatio="xMidYMid slice"
              className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 origin-center"
            />
          </g>
        </svg>

        <div className="absolute bottom-0 left-0 p-2 rounded ml-2 mb-2 z-10 bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-black">P. Debendra Rao</h3>
            <p className="text-sm text-gray-600">CEO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Meet The Team Section */}
      <section id="team-section" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground pb-4 border-b-4 border-orange-500 inline-block">
            MEET THE TEAM
          </h2>
           <HoverCarousel />
         
        </div>
      </section>

      {/* Team Members Auto Slider */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          OUR TEAM
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {teamMembers.map((member, i) => (
          <div
            key={i}
            className="min-w-full flex flex-col items-center space-y-2 px-4"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
            />
            <div className="flex flex-col items-center text-center mt-2">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yellow Banner Section */}
      <section className="py-12 bg-yellow-500 text-center">
        <p className="text-black font-bold font-serif text-lg md:text-xl max-w-4xl mx-auto px-4">
          Passionate about crafting online journeys that connect brands and people.
        </p>
      </section>

      <Footer />
      {/* <ContactUsDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} /> */}
    </>
  );
};

export default About;


