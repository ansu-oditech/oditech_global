import Contact from "../home/Contact";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { CertificationsSection } from "./Certification";
import RevealOnScroll from "./RevealOnScroll";

const ContactPage = () => {
    return (
        <div>
            <Navbar />


            {/* Hero Section */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-24">
                {/* Background with overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 10, 48, 0.85), rgba(0, 24, 84, 0.9)), url('../contactus.jpg')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
                    <div className="max-w-xl text-white text-center">
                        <h1 className="text-4xl md:text-5xl font-light mb-2 tracking-tight mt-16">
                            Get In Touch <br />
                            <span className="font-normal">With Our Team</span>
                        </h1>

                        <div className="w-72 h-1 bg-blue-500 my-6 mx-auto"></div>

                        <p className="text-lg font-light mb-8 opacity-90 font-sans">
                            Reach out to discuss your project — our team is ready to help.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-24 container px-6 mx-auto bg-blue-950 rounded-lg mb-20">
                <Contact />
            </div>
            <div className="mb-20">
                <CertificationsSection />
            </div>

            <div className="bg-gray-50 mt-12 mb-12 p-12 flex justify-between max-w-5xl mx-auto rounded-lg shadow-sm">
                <div className="font-sans">
                    <h2 className="text-3xl font-light text-gray-800 max-w-md leading-tight tracking-tight">
                        Check this out if you want
                        <br />
                        to understand us better
                    </h2>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                    <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                        Our slide deck <span className="bg-red-500 text-white text-xs py-1 px-2 rounded ml-2 font-bold">PDF</span>
                    </a>
                    <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                        A closer look at who we are <span className="ml-1 text-lg">›</span>
                    </a>
                    <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                        Customer reviews on Clutch <span className="ml-1 text-lg">›</span>
                    </a>
                </div>
            </div>

            <RevealOnScroll>
                <section className='py-16 px-24 mt-24 relative'>
                    <div className="max-w-6xl mx-auto px-4 py-8">
                        {/* Header Section */}
                        <h1 className="text-5xl font-normal text-center mb-12">
                            <span className="text-black">What happen </span>
                            <span className="text-blue-900">next?</span>
                        </h1>

                        {/* Video Section */}
                        <div className="w-full aspect-video bg-gray-100 rounded shadow-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dummyurl"
                                title="Foxsolution's Exceptional Pre-Sale Process - Unlocking the Path to Successful Software Solutions"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>
            </RevealOnScroll >

            <Footer />
        </div>
    );
};
export default ContactPage;