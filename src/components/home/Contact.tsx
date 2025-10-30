import { useState } from "react";
import { Mail, Phone, MapPin, Users, ArrowRight } from "lucide-react";

const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  return <div className={className}>{children}</div>;
};

const AnimatedButton = ({ children, type, size, className, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-lg font-medium transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Google Sheets submission with CORS-safe mode
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      console.log("Submitting form data to Google Sheets:", formData);

      await fetch(
        "https://script.google.com/macros/s/AKfycbzfnkMrdIUyZuXIG3zWLLoo5Sb905EsehNKr5GuC3GsxiSEmr2hasEZCvIluIKfUOZ4/exec",
        {
          method: "POST",
          mode: "no-cors", // ✅ this bypasses CORS block
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      // Since no-cors prevents response reading, assume success
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error:
          "There was an error submitting your form. Please try again later.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Call Us",
      content: "+91 7683963999",
      action: "tel:+91 7683963999",
      actionText: "Call now",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email Us",
      content: "oditechofficial@gmail.com",
      action: "oditechofficial@gmail.com",
      actionText: "Send email",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Visit Us",
      content: "Acharya Vihar",
      action: "https://maps.google.com",
      actionText: "Get directions",
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Our Team",
      content: "Available 24/7 for enterprise clients",
      action: "/about",
      actionText: "Meet our experts",
    },
  ];

  const projectTypes = [
    "Website Development",
    "Mobile Application",
    "Enterprise Software",
    "E-commerce Solution",
    "UI/UX Design",
    "Digital Transformation",
    "AI & Machine Learning",
    "Cloud Migration",
    "Other",
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "/linked-in.svg", url: "https://www.linkedin.com/company/odi-tech-global/" },
    { name: "Twitter", icon: "/twitter.png", url: "https://twitter.com" },
    { name: "Facebook", icon: "/facebook.svg", url: "https://www.facebook.com/profile.php?id=61580440438152" },
    { name: "Instagram", icon: "/instagram.svg", url: "https://x.com/oditechglobal" },
  ];

  return (
    <section
      id="contact"
      className="py-10 container px-4 mx-auto bg-black rounded-lg relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dots-pattern.svg')] opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#FFB703]/10 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-yellow-500/10 blur-2xl"></div>
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFB703]/10 text-[#FFB703] font-medium text-sm tracking-wide mb-3 backdrop-blur-sm">
              Let's Connect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Transform Your Vision{" "}
              <span className="text-[#FFB703]">Into Reality</span>
            </h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto -mb-2">
              Our team is ready to help you achieve your business goals with
              cutting-edge tech solutions.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Contact Info */}
        <RevealOnScroll className="lg:col-span-5">
          <div className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl shadow-xl p-6 h-full border border-yellow-500/20 relative z-10">
            <h3 className="text-xl font-bold text-[#FFB703] mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-[#FFB703]/10 flex items-center justify-center text-[#FFB703] flex-shrink-0 transform group-hover:scale-105 transition-all duration-300 shadow-md shadow-yellow-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-1">{item.content}</p>
                    {item.action && (
                      <a
                        href={item.action}
                        className="text-xs font-medium text-[#FFB703] hover:text-yellow-400 flex items-center gap-1 group-hover:underline"
                        target={item.action.startsWith("http") ? "_blank" : ""}
                        rel="noopener noreferrer"
                      >
                        {item.actionText}
                        <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-yellow-500/20 pt-5">
              <h4 className="font-semibold text-white mb-4 text-sm">
                Follow Our Journey
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FFB703]/10 hover:bg-[#FFB703]/20 transition-colors duration-300 shadow-md shadow-yellow-600/20 border border-yellow-500/20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      className="w-4 h-4 opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Form */}
        <RevealOnScroll delay={200} className="lg:col-span-7">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl shadow-xl p-6 border border-yellow-500/20 relative z-10">
            <h3 className="text-xl font-bold text-[#FFB703] mb-5">
              Start Your Project
            </h3>

            {formStatus.isSubmitted ? (
              <div className="bg-green-900/30 border border-green-600/50 rounded-xl p-8 text-center backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-2">
                  Message Received!
                </h4>
                <p className="text-green-200 mb-6 text-base">
                  Thank you for reaching out. One of our experts will contact
                  you shortly.
                </p>
                <button
                  onClick={() =>
                    setFormStatus({
                      isSubmitting: false,
                      isSubmitted: false,
                      error: null,
                    })
                  }
                  className="px-5 py-2 bg-[#FFB703] text-black rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form fields remain unchanged */}
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-yellow-500/30 focus:border-yellow-400 outline-none text-white placeholder-gray-500 text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-yellow-500/30 focus:border-yellow-400 outline-none text-white placeholder-gray-500 text-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-yellow-500/30 focus:border-yellow-400 outline-none text-white placeholder-gray-500 text-sm"
                      placeholder="+91(953)263-4109"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-yellow-500/30 focus:border-yellow-400 outline-none text-white placeholder-gray-500 text-sm"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    What Service Are You Interested In?
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-yellow-500/30 focus:border-yellow-400 outline-none text-white text-sm"
                  >
                    <option value="">Select a Service</option>
                    {projectTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-black text-white"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Project Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-yellow-500/30 focus:border-yellow-400 outline-none text-white placeholder-gray-500 text-sm"
                    placeholder="Tell us about your project goals..."
                    required
                  ></textarea>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 border-yellow-500/30 bg-black text-[#FFB703] focus:ring-yellow-400"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-xs text-gray-300">
                    I agree to the{" "}
                    <a href="#" className="text-[#FFB703] hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted.
                  </label>
                </div>

                {/* Submit Button */}
                <AnimatedButton
                  type="submit"
                  size="md"
                  className="w-full md:w-auto px-6 py-2.5 text-base shadow-lg shadow-yellow-500/20 bg-[#FFB703] hover:bg-yellow-400 text-black font-semibold"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                </AnimatedButton>

                <p className="mt-2 text-xs text-gray-400">
                  We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
