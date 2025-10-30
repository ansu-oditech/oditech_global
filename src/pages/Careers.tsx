import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { useRef, useState, useEffect } from "react";
import JobApplicationForm from "@/components/ui/Jobapplicationform";
import CounterSection from "@/components/ui/Countersection";
import React from "react";

const Careers = () => {

    function InfiniteImageCarousel({
        images = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            alt: `Image ${i + 1}`
        })),
        speed = 0.5,
        imageWidth = 240,
        imageHeight = 160,
        gap = 8,
        className = ""
    }) {
        const carouselRef = useRef(null);
        const [duplicateCount, setDuplicateCount] = useState(3);

        useEffect(() => {
            const scrollContainer = carouselRef.current;
            if (!scrollContainer) return;

            const resetScrollPosition = () => {
                const singleSetWidth = (imageWidth + gap) * images.length;
                scrollContainer.scrollLeft = singleSetWidth;
            };

            resetScrollPosition();

            const animateScroll = () => {
                scrollContainer.scrollLeft += speed;
                const itemWidth = imageWidth + gap;
                const totalWidth = itemWidth * images.length;

                if (scrollContainer.scrollLeft >= totalWidth * 2) {
                    scrollContainer.scrollLeft -= totalWidth;
                }
                if (scrollContainer.scrollLeft <= 0) {
                    scrollContainer.scrollLeft += totalWidth;
                }

                requestAnimationFrame(animateScroll);
            };

            const animationId = requestAnimationFrame(animateScroll);
            return () => cancelAnimationFrame(animationId);
        }, [speed, images.length, imageWidth, gap]);

        const scrollbarHideStyles: React.CSSProperties = {
            scrollbarWidth: 'none' as const,
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
        };

        const scrollbarHideClass = `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `;

        const loopingImages = [];
        for (let i = 0; i < duplicateCount; i++) {
            loopingImages.push(...images.map((img, index) => ({
                ...img,
                loopId: `${img.id}-${i}`
            })));
        }

        return (
            <div className={`w-full overflow-hidden ${className}`}>
                <style dangerouslySetInnerHTML={{ __html: scrollbarHideClass }} />

                <div
                    ref={carouselRef}
                    className="flex overflow-x-scroll scrollbar-hide"
                    style={{
                        ...scrollbarHideStyles,
                        scrollBehavior: 'auto'
                    }}
                >
                    {loopingImages.map((image, index) => (
                        <div
                            key={`${image.loopId}-${index}`}
                            className="flex-shrink-0"
                            style={{
                                marginLeft: `${gap / 2}px`,
                                marginRight: `${gap / 2}px`
                            }}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="object-cover rounded"
                                style={{
                                    width: `${imageWidth}px`,
                                    height: `${imageHeight}px`
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const myImages = [
        { id: 1, url: "/careers-photo-1.jpg", alt: "Description 1" },
        { id: 2, url: "/careers-photo-2.jpg", alt: "Description 2" },
        { id: 3, url: "/careers-photo-3.jpg", alt: "Description 3" },
        { id: 4, url: "/careers-photo-4.jpg", alt: "Description 4" },
        { id: 5, url: "/careers-photo-5.jpg", alt: "Description 5" },
        { id: 6, url: "/careers-photo-6.jpg", alt: "Description 6" },
        { id: 7, url: "/careers-photo-7.jpg", alt: "Description 7" },
        { id: 8, url: "/careers-photo-8.jpg", alt: "Description 8" },
        { id: 9, url: "/careers-photo-9.jpg", alt: "Description 9" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <RevealOnScroll>
                <div className="p-8 mr-0 bg-gradient-to-r from-blue-950 to-blue-950">
                    <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-white hover:text-blue-800 transition-colors duration-200'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/Careers" className='text-white hover:text-blue-800 transition-colors duration-200'>Careers</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </RevealOnScroll>

            <section className="relative py-12 bg-gradient-to-br from-blue-950 to-blue-950 text-white mb-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <h1 className="text-6xl font-normal mb-8 text-blue-400">
                            Careers <span className="text-white">at Oditech</span>
                        </h1>
                        <h5 className="text-base text-center">Join our team</h5>
                    </div>
                </div>
            </section>

            <CounterSection />

            <div className="container mx-auto px-4 mb-12 mt-12 text-center">
                <h1 className="text-4xl md:text-5xl font-light mb-6 mt-16 text-black">
                    Attention Job Seekers: Beware of <br />
                    <span className="font-semibold">scams!</span>
                </h1>

                <div className="max-w-3xl mx-auto">
                    <p className="text-black font-light text-lg md:text-xl mb-8">
                        Official communication for job openings at Oditech will ONLY be conducted through our corporate email:
                        <span className="font-medium text-blue-600"> resume@oditech.com</span>. Be cautious of alternative email addresses.
                    </p>

                    <p className="text-black font-light text-lg md:text-xl mb-10">
                        Oditech will <span className="font-semibold">NEVER</span> request payment for job applications, secure deposits, or visa processing.<br />
                        Don't share personal or financial information.
                    </p>
                </div>

                {/* <div className="flex justify-center">
                    <img
                        src="../JobAlert.jpg"
                        alt="Job scam warning infographic"
                        className="w-screen max-w-4xl h-auto rounded-lg shadow-md border border-gray-200"
                    />
                </div> */}
            </div>

            <h1 className="text-5xl font-normal mb-4 mt-16 text-center">
                Open<span className="text-blue-600"> Positions</span>
            </h1>

            <div className="container mx-auto px-4 mt-12 mb-12">
                <InfiniteImageCarousel
                    images={myImages}
                    speed={1}
                    imageWidth={300}
                    imageHeight={200}
                    gap={16}
                    className="my-custom-class"
                />
            </div>

            <div className="container mx-auto px-4 mb-12 mt-12">
                <JobApplicationForm />
            </div>

            <Footer />
        </div>
    );
};

export default Careers;