import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/photos/oditech_logo.png";
import ContactPopup from "../ui/contactpopup";
import { ChevronDown, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔗 Helper: dynamically generate PDF path (works with Vite + subfolders)
  const brochureUrl = (file: string) =>
    `${import.meta.env.BASE_URL}brochures/${file}`;

  // Check if current path is a services page
  const isServicesPage = location.pathname.startsWith('/services/');

  const navItems = isServicesPage
    ? [
        { name: "Services", hasSubmenu: true },
        { name: "Pricing", path: "/pricing" },
        { name: "Brochure", hasSubmenu: true },
        { name: "Blogs", path: "/portfolio" },
      ]
    : [
        { name: "Services", hasSubmenu: true },
        { name: "Pricing", path: "/pricing" },
        { name: "About Us", path: "/about", hasSubmenu: true },
        { name: "Brochure", hasSubmenu: true },
        { name: "Blogs", path: "/portfolio" },
      ];

  const services = [
    {
      name: "Website Development",
      path: "/services/web"
    },
    {
      name: "Mobile App Development",
      path: "/services/mobile-app-development"
    },
    {
      name: "Digital Marketing & Online Advertising",
      path: "/services/digital-marketing"
    },
    {
      name: "Logo & Brand Identity Designing",
      path: "/services/logo-design"
    },
    {
      name: "Graphic Designing",
      path: "/services/graphic-design"
    },
    {
      name: "Video Production & Editing",
      path: "/services/video-production"
    },
    {
      name: "PR & Reputation Management",
      path: "/services/pr-reputation-management"
    },
    {
      name: "Influencer & Social Media Management",
      path: "/services/influencer-marketing"
    },
    {
      name: "3D Designing & Elevation",
      path: "/services/3d-design"
    },
    {
      name: "Political Campaigns & Social Media-PR Management",
      path: "/services/political-campaigns"
    },
  ];

  const aboutus = [
    { name: "Team", path: "/about#team-section" },
    { name: "Testimonials", path: "/reviews" },
    { name: "Pricing", path: "/pricing" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contactpage" },
  ];

  const brochures = [
    { name: "3D Design", file: "3d-design.pdf" },
    { name: "Digital Marketing", file: "digital-marketing.pdf" },
    { name: "Graphic Design", file: "graphicdesign.pdf" },
    { name: "Influencer", file: "influencer.pdf" },
    { name: "Logo and Brand", file: "logoandbrand.pdf" },
    { name: "Mobile Development", file: "mobile-dev.pdf" },
    { name: "PR Management", file: "pr.pdf" },
    { name: "Video Production", file: "videoproduction.pdf" },
    { name: "Web Development", file: "web-dev.pdf" },
    { name: "Political Campaigns and Social Media PR Management", file: "political.pdf" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md py-3" : "bg-white/70 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* 🟡 Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ODITECH GLOBAL" className="h-14 w-auto" />
        </Link>

        {/* 💻 Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasSubmenu ? (
                <>
                  {item.path ? (
                    <Link to={item.path} className="flex items-center gap-1 text-gray-900 font-medium hover:text-[#FFB703] transition-all">
                      {item.name} <ChevronDown className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 text-gray-900 font-medium hover:text-[#FFB703] transition-all">
                      {item.name} <ChevronDown className="w-4 h-4" />
                    </button>
                  )}

                  {/* Submenu */}
                  <div
                    className="absolute left-0 mt-2 w-96 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-200 transform group-hover:translate-y-2"
                  >
                    <ul className="space-y-4">
                      {(item.name === "Services"
                        ? services
                        : item.name === "About Us"
                        ? aboutus
                        : brochures
                      ).map((sub) => (
                        <li key={sub.name}>
                          {item.name === "Brochure" ? (
                            <a
                              href={brochureUrl(sub.file)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-gray-700 hover:text-[#FFB703] text-sm"
                            >
                              {sub.name}
                            </a>
                          ) : item.name === "Services" ? (
                            <Link
                              to={sub.path}
                              className="block text-gray-700 hover:text-[#FFB703] text-sm"
                            >
                              {sub.name}
                            </Link>
                          ) : (
                            <Link
                              to={sub.path}
                              className="block text-gray-700 hover:text-[#FFB703] text-sm"
                            >
                              {sub.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-900 font-medium hover:text-[#FFB703]"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* ✉️ Desktop Contact Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="bg-[#FFB703] text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white flex items-center gap-2 transition-all"
          >
            Get in Touch <Mail size={18} />
          </button>
        </div>

        {/* 📱 Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#FFB703] text-black hover:bg-black hover:text-white transition"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📲 Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full z-[9998]">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasSubmenu ? (
                  <>
                    {item.path ? (
                      <Link
                        to={item.path}
                        onClick={() =>
                          item.name === "Services"
                            ? setIsServicesOpen(!isServicesOpen)
                            : item.name === "About Us"
                            ? setIsAboutOpen(!isAboutOpen)
                            : setIsBrochureOpen(!isBrochureOpen)
                        }
                        className="flex justify-between items-center w-full text-gray-900 font-medium"
                      >
                        {item.name} <ChevronDown className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button
                        onClick={() =>
                          item.name === "Services"
                            ? setIsServicesOpen(!isServicesOpen)
                            : item.name === "About Us"
                            ? setIsAboutOpen(!isAboutOpen)
                            : setIsBrochureOpen(!isBrochureOpen)
                        }
                        className="flex justify-between items-center w-full text-gray-900 font-medium"
                      >
                        {item.name} <ChevronDown className="w-4 h-4" />
                      </button>
                    )}

                    {/* Mobile Submenus */}
                    {item.name === "Services" && isServicesOpen && (
                      <ul className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-3">
                        {services.map((s) => (
                          <li key={s.name}>
                            <Link
                              to={s.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-700 text-sm py-1 hover:text-[#FFB703]"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.name === "About Us" && isAboutOpen && (
                      <ul className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-3">
                        {aboutus.map((a) => (
                          <li key={a.name}>
                            <Link
                              to={a.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-700 text-sm py-1 hover:text-[#FFB703]"
                            >
                              {a.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.name === "Brochure" && isBrochureOpen && (
                      <ul className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-3">
                        {brochures.map((b) => (
                          <li key={b.name}>
                            <a
                              href={brochureUrl(b.file)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-700 text-sm py-1 hover:text-[#FFB703]"
                            >
                              {b.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-800 font-medium py-1 hover:text-[#FFB703]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* 📞 Mobile Contact Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactPopupOpen(true);
              }}
              className="mt-4 bg-[#FFB703] text-black py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}

      {/* 📬 Contact Popup */}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </header>
  );
};

export default Navbar;
