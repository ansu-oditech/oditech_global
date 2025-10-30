import { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team1 from "../../assets/photos/team1.jpg";
import Team2 from "../../assets/photos/team2.jpeg";
import Team3 from "../../assets/photos/team3.jpeg";


const HoverCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 🎞️ Carousel content
  const carouselItems = [
    { type: "image", src: Team1},
    { type: "image", src: Team2},
    { type: "image", src: Team3},
 
    { type: "video", src: "/office-fun.mp4" },
   
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-[#FFB703]/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ✨ Transition wrapper */}
      <AnimatePresence mode="wait">
        {!isHovered ? (
          // 🖼️ Static Team Photo
          <motion.img
            key="static"
            src="/our-team.jpg"
            alt="Our Team"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[500px] object-cover"
          />
        ) : (
          // 🎠 Carousel on Hover
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Slider {...settings}>
              {carouselItems.map((item, index) =>
                item.type === "image" ? (
                  <div key={index}>
                    <img
                      src={item.src}
                      alt={`Slide ${index}`}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                ) : (
                  <div key={index}>
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                )
              )}
            </Slider>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🏷️ Optional overlay title */}
      <div className="absolute bottom-6 left-6 bg-black/60 text-white px-4 py-2 rounded-md backdrop-blur-md">
        <h3 className="text-lg font-semibold">Our Team at Oditech</h3>
      </div>
    </div>
  );
};

export default HoverCarousel;
