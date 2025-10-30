
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AnimatedButton from "@/components/ui/AnimatedButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-vofox-gray px-4">
      <div className="text-center max-w-md">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-vofox-blue/20 to-vofox-lightBlue/20 rounded-full blur-3xl opacity-50 animate-pulse-light"></div>
          <h1 className="text-9xl font-bold text-vofox-blue mb-4 relative">404</h1>
        </div>
        <h2 className="text-2xl font-bold text-vofox-darkBlue mb-4">Page Not Found</h2>
        <p className="text-vofox-darkGray mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <AnimatedButton href="/" size="lg">
          Return to Home
        </AnimatedButton>
      </div>
    </div>
  );
};

export default NotFound;
