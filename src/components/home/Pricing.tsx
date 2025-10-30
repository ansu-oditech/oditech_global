import { useState } from "react";
import Navbar from "../layout/Navbar";
import RevealOnScroll from "../ui/RevealOnScroll";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/breadcrumb";
import Contact from "./Contact";
import BlogHomepage from "../ui/bloghome";
import Footer from "../layout/Footer";
import TestimonialCarousel from "../ui/Testimonial";
import CostEstimator from "../ui/checkoboxform";
import FAQ from "../ui/faq";

const CostEstimationPage = () => {
  const [activeTab, setActiveTab] = useState<
    "Time & Material" | "FixedBudget" | "FixedPrice" | "DedicatedTeam"
  >("Time & Material");

  const FAQSection = () => {
    const faqs = [
      {
        question: "How much does it cost to build a mobile or web application?",
        answer:
          "App or web development costs depend on project scope, design complexity, and technology stack. At OdiTech Global, small-scale apps start around ₹80K–₹1.5L, while advanced, multi-platform solutions can range from ₹2L to ₹5L+. We provide detailed estimates after understanding your requirements.",
      },
      {
        question: "Do you provide video production and editing services for businesses?",
        answer:
          "Yes! Our creative media team handles everything from concept planning and shooting to post-production and delivery. We produce corporate videos, ads, product demos, and promotional content — tailored to your brand’s visual identity.",
      },
      {
        question: "Can OdiTech help manage my social media and marketing campaigns?",
        answer:
          "Absolutely. We offer end-to-end social media management — from content creation and scheduling to ad campaigns, analytics, and influencer collaborations — helping brands build engagement and drive conversions.",
      },
    ];

    return (
      <section id="faq" className="px-4 mb-16">
        <FAQ faqs={faqs} />
      </section>
    );
  };

  const TickItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start gap-2 text-gray-900">
      <span className="text-blue-600 mt-1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 12.75L5.75 9.5L4.5 10.75L9 15.25L19.5 4.75L18.25 3.5L9 12.75Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span>{text}</span>
    </li>
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <RevealOnScroll>
  <div className="p-4 sm:p-8 bg-gradient-to-r from-black via-[#0A0A0A] to-[#1A1A1A]">
    <Breadcrumb className="mt-20 text-[#FFB703] ml-2 sm:ml-8 lg:ml-16">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-gray-300 hover:text-[#FFB703] transition-colors duration-200"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400" />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/services"
            className="text-gray-300 hover:text-[#FFB703] transition-colors duration-200"
          >
            Pricing
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
</RevealOnScroll>


        {/* Hero Section */}
       <section className="relative py-12 sm:py-16 bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A1A1A] text-white text-center px-4">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
      How much will our services{" "}
      <span className="text-[#FFB703]">cost?</span>
    </h1>
    <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
      Fill in the form below with details about your project and get a
      <span className="text-[#FFB703] font-medium"> free cost and timeline estimation!</span>{" "}
      Our team carefully analyzes your requirements and delivers a transparent, 
      detailed quote tailored to your goals.
    </p>
  </div>

  {/* Optional subtle glow for visual depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFB703]/5 to-transparent pointer-events-none"></div>
</section>

      </div>

      <div className="-mt-10 sm:-mt-32 md:-mt-40 lg:-mt-48 xl:-mt-56">
  <CostEstimator />
</div>


      {/* Pricing Models */}
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto mb-20 p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6 text-gray-800">
            Pricing <span className="text-blue-950">Models</span> We Offer
          </h2>

          <div className="flex gap-4 sm:gap-6 text-base sm:text-lg justify-center font-medium border-b border-gray-200 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {["Time & Material", "FixedBudget", "FixedPrice", "DedicatedTeam"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(tab as typeof activeTab)
                  }
                  className={`pb-3 px-3 whitespace-nowrap ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.replace("&", " & ")}
                </button>
              )
            )}
          </div>

          {/* Tab Content */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-left">
            {activeTab === "Time & Material" && (
              <>
                <h1 className="text-2xl font-bold text-gray-800">
                  Time & Material
                </h1>
                <p className="text-gray-600 mt-2">
                  This model involves monthly billing based on actual development efforts.
                </p>
                <ul className="mt-4 space-y-2.5">
                  <TickItem text="Flexible scope and adaptive budgeting" />
                  <TickItem text="Billed monthly based on hours worked" />
                  <TickItem text="Ideal for evolving or long-term projects" />
                </ul>
              </>
            )}
            {activeTab === "FixedBudget" && (
              <>
                <h1 className="text-2xl font-bold text-gray-800">
                  Fixed Budget
                </h1>
                <p className="text-gray-600 mt-2">
                  Deliver a complete solution within an agreed budget while
                  maintaining flexibility.
                </p>
                <ul className="mt-4 space-y-2.5">
                  <TickItem text="Predetermined total budget" />
                  <TickItem text="Flexible scope within budget" />
                  <TickItem text="Regular progress updates" />
                </ul>
              </>
            )}
          </div>
        </div>
      </RevealOnScroll>

      {/* Project Lifecycle */}
      <RevealOnScroll>
        <section className="mb-16 px-4 sm:px-6">
          <div className="bg-[#0a1529] text-white p-6 sm:p-8 rounded-xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
              <span className="text-yellow-400">OdiTech Global</span> Project
              Lifecycle
            </h1>
            <div className="flex flex-col gap-8">
              {["Discovery & Strategy", "Design & Prototyping", "Development & Production"].map(
                (step, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-semibold">
                      {`0${i + 1}`}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-yellow-300">
                        {step}
                      </h3>
                      <p className="text-gray-300 mt-2 text-sm sm:text-base">
                        Phase {i + 1} of our workflow ensures a perfect blend of creativity,
                        functionality, and measurable results.
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <TestimonialCarousel />
      <RevealOnScroll>
        <Contact />
        <FAQSection />
      </RevealOnScroll>
      <BlogHomepage />
      <Footer />
    </>
  );
};

export default CostEstimationPage;
