import { useEffect, useRef, useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import ContactPopup from '../ui/contactpopup';
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "@/assets/videos/hero_video.mp4";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Smooth scroll navigation handler
  const handleNavigateToServices = (e: React.MouseEvent) => {
    e.preventDefault(); // stop browser from instantly jumping
    navigate("/services#services"); // trigger React Router navigation
  };

  // Animated headlines
  const HEADLINES = ["INNOVATION.", "TRANSFORMATION.", "IMPACT."];
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = parallaxRef.current;
      if (!el) return;

      requestAnimationFrame(() => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const moveX = (x - width / 2) / 50;
        const moveY = (y - height / 2) / 50;
        el.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
      });
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headlineVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-black">
      <div className="container px-4 mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Section */}
          <div className="order-1 lg:order-1">
            <RevealOnScroll delay={100}>
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFB703] text-black font-medium text-sm mb-10">
                The IT Services Provider
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="h-[80px] overflow-hidden flex items-center mb-10">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={HEADLINES[headlineIndex]}
                    variants={headlineVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                  >
                    {HEADLINES[headlineIndex]}
                    <span className="text-[#FFB703]"></span>
                  </motion.h1>
                </AnimatePresence>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl">
                We partner with businesses to deliver smart, reliable technology
                solutions that simplify your journey through the digital landscape,
                enabling you to adapt with confidence, scale sustainably, and
                achieve growth that lasts.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">

                {/* Book Consultation */}
                <button
                  onClick={() => setIsContactPopupOpen(true)}
                  className="px-6 py-3 text-base md:text-lg font-semibold 
                        text-black bg-[#FFB703] 
                        border border-transparent rounded-lg shadow-md 
                        hover:bg-black hover:text-[#FFB703] hover:border-[#FFB703]
                        transition-all duration-300"
                >
                  Book Consultation
                </button>

                {/* ✅ Our Services (fixed) */}
                <button
                  onClick={handleNavigateToServices}
                  className="px-6 py-3 text-base md:text-lg font-semibold 
                        text-[#FFB703] border border-[#FFB703] 
                        rounded-lg hover:bg-[#FFB703] hover:text-black 
                        transition-all duration-300"
                >
                  Our Services
                </button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={500}>
              <div className="flex items-center mt-12">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-black bg-[#FFB703] flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-black">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <span className="block text-sm text-gray-400">Trusted by</span>
                  <span className="font-semibold text-white">
                    Many Companies
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Video Section */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FFB703]/10 rounded-full blur-3xl opacity-40 animate-pulse-light"></div>

              <div
                ref={parallaxRef}
                className="relative z-10 transition-transform duration-200 ease-out"
              >
                <video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-[550px] md:max-w-[450px] sm:max-w-[350px] h-[350px] md:h-[300px] sm:h-[250px] rounded-2xl shadow-2xl border border-[#FFB703]/30 object-cover"
                ></video>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-[#FFB703] rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full border-2 border-black flex items-center justify-center text-black font-bold">
                      99%
                    </div>
                    <div>
                      <p className="text-sm text-black/80">Client Satisfaction</p>
                      <p className="font-semibold text-black">Across Projects</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-[#FFB703] rounded-lg p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-black font-bold">
                      01+
                    </div>
                    <div>
                      <p className="text-sm text-black/80">Years</p>
                      <p className="font-semibold text-black">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB703]/10 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB703]/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </section>
  );
};

export default Hero;
