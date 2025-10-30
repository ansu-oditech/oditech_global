import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Engagement Models", href: "/engagement-models" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "UI/UX & Graphic Design", href: "/all-services#graphic-design" },
        { name: "Video Shoot & Editing", href: "/all-services#video-editing" },
        { name: "Digital Marketing", href: "/all-services#digital-marketing" },
        { name: "PR Management", href: "/all-services#pr-management" },
        { name: "Social Media Management", href: "/all-services#social-media" },
        { name: "Website Design & Management", href: "/all-services#website-management" },
        { name: "Logo & Brand Identity", href: "/all-services#logo-branding" },
        { name: "3D Design & Elevation", href: "/all-services#3d-design" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Reviews", href: "/reviews" },
        { name: "Insights", href: "/insights" },
        { name: "FAQ", href: "/pricing#faq" },
      ],
    },
    {
      title: "Get in Touch",
      links: [
        { name: "Contact Form", href: "/contactpage" },
        { name: "Book a Consultation", href: "/pricing" },
        { name: "Estimate Project Cost", href: "/pricing" },
      ],
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "/linked-in.svg", url: "https://www.linkedin.com/company/odi-tech-global/" },
    { name: "Twitter", icon: "/twitter.png", url: "https://x.com/oditechglobal" },
    { name: "Facebook", icon: "/facebook.svg", url: "https://www.facebook.com/profile.php?id=61580440438152" },
    { name: "Instagram", icon: "/instagram.svg", url: " https://www.instagram.com/oditech_global?igsh=NHhubGR2OGk3cjhm"},
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/90 to-transparent z-0"></div>
      <div className="absolute -top-20 right-0 w-80 h-80 bg-[#FFB703]/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo + About */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-2xl text-white">
                Oditech<span className="text-[#FFB703]">Global</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Oditech Global delivers end-to-end digital transformation — from design and
              development to marketing and branding. We build scalable solutions that drive
              business growth and innovation.
            </p>
            <div className="flex space-x-4">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-black"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
    >
      <img
        src={social.icon}
        alt={`${social.name} icon`}
        className="w-5 h-5"
      />
    </a>
  ))}
</div>


          </div>

          {/* Footer Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-lg mb-4 text-[#FFB703]">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FFB703] transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-[#FFB703] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FFB703]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#FFB703] font-medium">ODITECH GLOBAL</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-[#FFB703] text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-[#FFB703] text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-gray-400 hover:text-[#FFB703] text-sm transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
