import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./breadcrumb";
import RevealOnScroll from "./RevealOnScroll";
import Contact from "../home/Contact";
const AllReviews = () => {

   const testimonials = [
  {
    id: 1,
    quote: "Oditech Global turned our vision into a scalable, beautiful digital product.",
    review:
      "Their team guided us from strategy to execution — building a responsive website that boosted our online engagement by 60%. We appreciated their clear communication, quick turnaround, and creative approach.",
    author: "Amit Sinha",
    position: "Founder, UrbanGro Technologies",
  },
  {
    id: 2,
    quote: "Professional, transparent, and creative — that’s Oditech Global.",
    review:
      "We partnered with Oditech for our mobile app development, and they exceeded expectations. From UX to deployment, everything was handled with precision. Their post-launch support has been equally impressive.",
    author: "Neha Patel",
    position: "Project Manager, BrightWell Solutions",
  },
  {
    id: 3,
    quote: "Their digital marketing and web design work completely transformed our brand presence.",
    review:
      "Oditech Global revamped our website and managed our digital marketing strategy. We saw an immediate uplift in traffic and lead conversions. Their team works like an extension of ours — proactive and results-driven.",
    author: "Rahul Verma",
    position: "Marketing Director, PixelNova Media",
  },
  {
    id: 4,
    quote: "Oditech Global helped us streamline operations with a custom-built CRM solution.",
    review:
      "The software they developed simplified our workflow and data tracking. What stood out was their ability to understand our business challenges and translate them into intuitive features.",
    author: "Priya Sharma",
    position: "COO, Nexa Enterprises",
  },
  {
    id: 5,
    quote: "Their commitment to quality and detail is unmatched.",
    review:
      "Oditech didn’t just deliver a product; they delivered a partnership. Their design team’s creativity and developers’ technical expertise made our project a complete success.",
    author: "Vikram Rao",
    position: "Founder, Vortex Labs",
  },
  {
    id: 6,
    quote: "We trust Oditech for all our creative and technology needs.",
    review:
      "From logo design to app development, they’ve consistently delivered excellence. Their workflow is smooth, communication is clear, and their results speak for themselves.",
    author: "Shweta Iyer",
    position: "CEO, GrowthMinds Studio",
  },
  {
    id: 7,
    quote: "Oditech Global brought innovation and structure to our business idea.",
    review:
      "They helped us turn a rough concept into a functional MVP, guiding us through each stage with patience and expertise. I’d recommend them to any startup looking for reliable tech partners.",
    author: "Arjun Mehta",
    position: "Co-Founder, FinPeak Technologies",
  },
  {
    id: 8,
    quote: "Our eCommerce store got a fresh, high-performing redesign thanks to Oditech.",
    review:
      "Their attention to UI/UX and site speed optimization significantly improved our customer retention and sales conversions. The collaboration was seamless from start to finish.",
    author: "Kavya Reddy",
    position: "Head of Digital, LuxeCart",
  },
  {
    id: 9,
    quote: "Oditech Global’s expertise in branding and design gave our startup a professional edge.",
    review:
      "They delivered a complete identity package — logo, colors, website, and visuals — that perfectly captured our brand story. Highly creative and responsive team!",
    author: "Sandeep Nair",
    position: "Founder, Innovexa Labs",
  },
  {
    id: 10,
    quote: "Working with Oditech Global felt like working with our own in-house team.",
    review:
      "They were proactive, communicative, and invested in our success. The quality of their work, combined with timely delivery, makes them a long-term partner for us.",
    author: "Meera Deshmukh",
    position: "Managing Director, Corevision Group",
  },
];




    return (

        <><div className="flex flex-col min-h-screen">
            <Navbar />
            <RevealOnScroll>
                <div className="p-8 mr-0 bg-gradient-to-r from-[#0a1f44] to-[#0a1f44]">
                    <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-white hover:text-blue-800 transition-colors duration-200'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/Testimonials" className='text-white hover:text-blue-800 transition-colors duration-200'>Testimonials</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </RevealOnScroll>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-9xl mx-auto text-center">
                        <h3 className="text-5xl font-normal mb-10">
                            You shouldn’t believe our words
                            See what our<span className="text-blue-800"> Clients</span> say
                        </h3>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-white mt-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-9xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-24">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 text-gray-800">


                                    <h6 className="flex flex-col items-start">
                                        <img
                                            className="w-10 h-10 mr-2 mb-4 "
                                            src="../quote.png"
                                            alt="Quote icon"
                                        />
                                        <p className="text-2xl text-center font-medium mb-2">{testimonial.quote}</p>
                                    </h6>
                                    <p className="text-2xl text-center font-light mt-2">{testimonial.review}</p>
                                    <div className="flex items-center mt-8 justify-end">
                                        <div>
                                            <p className="font-semibold">{testimonial.author}</p>

                                            <p className="text-gray-600">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
            <Contact />
            <div className="mt-16">
                <Footer />
            </div>
        </>
    );

}


export default AllReviews;