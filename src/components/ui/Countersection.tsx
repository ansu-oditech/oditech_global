import { useState, useEffect, useRef } from 'react';

const CounterSection = () => {
    const [yearsOnMarket, setYearsOnMarket] = useState(0);
    const [clientEngagement, setClientEngagement] = useState(0);
    const [happyClients, setHappyClients] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Start counting when section comes into view
                    animateNumber(3, setYearsOnMarket, 2000);
                    animateNumber(2, setClientEngagement, 2000);
                    animateNumber(10, setHappyClients, 2000);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const animateNumber = (target: number, setter: (value: number) => void, duration: number) => {
        const start = 0;
        const increment = target / (duration / 16); // 60fps

        let current = start;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            setter(Math.floor(current));
        }, 16);
    };

    return (
        <div ref={sectionRef} className="py-12 px-4 bg-white">
            <h2 className="text-3xl font-normal mb-8 text-center">Quick facts</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">
                        {yearsOnMarket}+
                    </div>
                    <p className="mt-2 text-gray-600">Years on market</p>
                </div>

                <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">
                        {clientEngagement}+
                    </div>
                    <p className="mt-2 text-gray-600">Years Client engagement</p>
                </div>

                <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">
                        {happyClients}+
                    </div>
                    <p className="mt-2 text-gray-600">Happy clients</p>
                </div>
            </div>

            <div className=" container mt-12 text-center w-lvw grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <div className="container p-28 bg-white border-2 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <img src='https://cdn-icons-png.flaticon.com/128/12066/12066366.png' className='w-12 h-12 mb-4 text-blue-500'
                        style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }} />
                    <h3 className="font-medium">Edu opportunities</h3>
                </div>
                <div className="container p-28 bg-white border-2 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <img src='https://cdn-icons-png.flaticon.com/128/16978/16978700.png' className='w-12 h-12 mb-4 text-blue-500'
                        style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }} />
                    <h3 className="font-medium">Remote work</h3>
                </div>
                <div className="container p-28 bg-white border-2 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <img src='https://cdn-icons-png.flaticon.com/128/2837/2837693.png' className='w-12 h-12 mb-4 text-blue-500'
                        style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }} />
                    <h3 className="font-medium">Flexible schedule</h3>
                </div>
                <div className="container p-28 bg-white border-2 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <img src='https://cdn-icons-png.flaticon.com/128/4058/4058619.png' className='w-12 h-12 mb-4 text-blue-500'
                        style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }} />
                    <h3 className="font-medium">Company treats</h3>
                </div>
                <div className="container p-28 bg-white border-2 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <img src='https://cdn-icons-png.flaticon.com/128/4540/4540365.png' className='w-12 h-12 mb-4 text-blue-500'
                        style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }} />
                    <h3 className="font-medium">International projects</h3>
                </div>
                <div className="container p-28 bg-white border-2 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <img src='https://cdn-icons-png.flaticon.com/128/10548/10548530.png' className='w-12 h-12 mb-4 text-blue-500'
                        style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }} />
                    <h3 className="font-normal">Corporate activities</h3>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;