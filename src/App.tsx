import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as AppToaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as SonnerToaster } from "sonner";
import Chatbot from "@/components/Chatbot";

// ============= Main Pages =============
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Services from "@/pages/Services";
// ============= Components =============
import AllReviews from "./components/ui/allreviews";
import ContactPage from "./components/ui/contact-page";
import InsightsPage from "./components/home/Insights";
import CostEstimationPage from "./components/home/Pricing";
import TestimonialCarousel from "./components/ui/Testimonial";
import ScrollToTop from "./components/ui/ScrollToTop";

// ============= Services Pages =============
import WebDevelopment from "./pages/web";
import MobileAppDevelopment from "./pages/MobileApp";
import WebDev from "./pages/WebDev";
import MobileDev from "./pages/MobileDev";
import DigitalMarketing from "./pages/DigitalMarketing";
import LogoDesign from "./pages/LogoDesign";
import GraphicDesign from "./pages/GraphicDesign";
import VideoProduction from "./pages/VideoProduction";
import Design3D from "./pages/3DDesign";
import Political from "./pages/Political";
import PR from "./pages/PR";
import Influencer from "./pages/Influencer";

// import AllServices from "./pages/All-Services";




// ============= Company Pages =============



import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white text-black">
          <BrowserRouter>
            <ScrollToTop />
            <Routes>

              {/* Main Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contactpage" element={<ContactPage />} />
              <Route path="/pricing" element={<CostEstimationPage />} />
              <Route path="/testimonials" element={<TestimonialCarousel />} />
              <Route path="/reviews" element={<AllReviews />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/services" element={<Services />} />
              {/* <Route path="/all-services" element={<AllServices />} /> */}

              {/* Services Routes */}

              <Route path="/services/web" element={<WebDevelopment />} />

              <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />

              <Route path="/services/web-development" element={<WebDev />} />

              <Route path="/services/mobile-development" element={<MobileDev />} />

              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

              <Route path="/services/logo-design" element={<LogoDesign />} />

              <Route path="/services/graphic-design" element={<GraphicDesign />} />

              <Route path="/services/video-production" element={<VideoProduction />} />

              <Route path="/services/3d-design" element={<Design3D />} />

              <Route path="/services/political-campaigns" element={<Political />} />

              <Route path="/services/influencer-marketing" element={<Influencer />} />




              {/* Company Routes */}

              

              <Route path="/careers" element={<Careers />} />

              {/* Catch-all Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

          <AppToaster />
          <SonnerToaster />
          <Chatbot />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;