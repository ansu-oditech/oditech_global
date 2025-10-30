import { useState } from 'react';

export default function CustomSoftwareServices() {
    const [activeService, setActiveService] = useState('Discovery');

    const services = [
        {
            name: 'Discovery',
            icon: (


              







                <img className='w-10 h-10 brightness-0 invert'
                    src="https://cdn-icons-png.flaticon.com/128/8107/8107602.png"
                />

            ),
            description: 'Our R&D and business analyst team study your business and ideas in detail to help you reduce market and technical risks across the entire software development.',
            bullets: [
                'validate business idea;',
                'choose the right technology;',
                'get exact project estimation;',
                'create solution vision;',
                'plan the product release;',
                'avoid unplanned costs.'
            ],
            linkText: 'Discovery Phase >',
            image: '../Discovery.jpg'
        },
        {
            name: 'UI/UX design',
            icon: (


                




                <img className='w-10 h-10 brightness-0 invert'
                    src="https://cdn-icons-png.flaticon.com/128/11987/11987373.png"
                />

            ),
            description: 'We create user-centered designs that are intuitive, visually appealing, and aligned with your brand identity to deliver exceptional user experiences.',
            bullets: [
                'user research and personas',
                'wireframing and prototyping',
                'visual design and branding',
                'usability testing',
                'responsive and adaptive design',
                'design system creation'
            ],
            linkText: 'UI/UX Design Services >',
            image: '../UI-UX.jpg'
        },
        {
            name: 'Software development',
            icon: (


              




                <img className='w-10 h-10 brightness-0 invert'
                    src="https://cdn-icons-png.flaticon.com/128/9750/9750216.png"
                />

            ),
            description: 'We build custom software solutions that address your specific business needs with clean, maintainable code and modern development practices.',
            bullets: [
                'web applications',
                'mobile applications',
                'API development and integration',
                'cloud-native solutions',
                'legacy system modernization',
                'enterprise software development'
            ],
            linkText: 'Software Development Solutions >',
            image: '../SoftwareDevlopment.jpg'
        },
        {
            name: 'QA & Testing',
            icon: (

             




                <img className='w-10 h-10 brightness-0 invert'
                    src="https://cdn-icons-png.flaticon.com/128/3645/3645772.png"
                />


            ),
            description: 'Our comprehensive quality assurance and testing services ensure your software is reliable, secure, and performs optimally across all platforms.',
            bullets: [
                'manual and automated testing',
                'performance testing',
                'security testing',
                'usability testing',
                'test strategy development',
                'continuous integration/delivery testing'
            ],
            linkText: 'QA Services >',
            image: '../QA&Testing.jpg'
        },
        {
            name: 'Staff augmentation',
            icon: (


                <img className='w-10 h-10 brightness-0 invert'
                    src="https://cdn-icons-png.flaticon.com/128/18587/18587775.png"
                />

            ),
            description: 'Enhance your development capabilities with our skilled professionals who integrate seamlessly with your team to accelerate project delivery.',
            bullets: [
                'experienced developers and engineers',
                'project managers and scrum masters',
                'UX/UI designers',
                'QA specialists',
                'DevOps engineers',
                'flexible engagement models'
            ],
            linkText: 'Staff Augmentation Options >',
            image: '../staff-augmentation.png'
        }
    ];

    const handleServiceClick = (serviceName) => {
        setActiveService(serviceName);
    };

    const activeServiceData = services.find(service => service.name === activeService);

    return (
        <div className=" text-white p-8 container px-12 mx-auto bg-blue-950 rounded-lg">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-light text-center mt-8 mb-16">
                    Custom software development <span className="text-blue-500">services</span>
                </h1>

                {/* Services Icons */}
                <div className="flex justify-center gap-16 mb-4">
                    {services.map((service) => (
                        <div
                            key={service.name}
                            className="relative flex flex-col items-center cursor-pointer"
                            onClick={() => handleServiceClick(service.name)}
                        >
                            <div className={`mb-2 transition-colors duration-300 ${activeService === service.name ? 'text-blue-500' : 'text-gray-400'}`}>
                                {service.icon}
                            </div>
                            <div className={`text-center text-sm transition-colors duration-300 ${activeService === service.name ? 'text-blue-500' : 'text-gray-400'}`}>
                                {service.name}
                            </div>



                            {/* Horizontal Bar */}

                         
                           



                            {/* Indicator Bar */}
                            <div
                                className={`absolute -bottom-4 w-full h-0.5 transition-all duration-300 ${activeService === service.name ? 'bg-blue-500 opacity-100' : 'bg-transparent opacity-0'
                                    }`}
                            >
                                <div className="flex-grow bg-gray-500 bg-opacity-30 h-full"></div>
                            </div>


                        </div>

                    ))}
                </div>



                {/* Active Service Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="col-span-2">
                        <h2 className="text-3xl mb-6">{activeServiceData.name}</h2>
                        <p className="text-gray-300 mb-6">{activeServiceData.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activeServiceData.bullets.map((bullet, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="text-blue-500 mr-2">✓</div>
                                    <div className="text-gray-300">{bullet}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="#" className="text-red-500 hover:underline">{activeServiceData.linkText}</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <img
                            src={activeServiceData.image}
                            alt={`${activeServiceData.name} service`}
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}
