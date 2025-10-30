import { useState } from 'react';

export default function AgileFrameworks() {
    const [activeTab, setActiveTab] = useState('SCRUM');

    const tabData = {
        'SCRUM': {
            title: 'Scrum is a flexible, holistic product development strategy where a development team works as a unit to reach a common goal.',
            benefits: [
                'fast adaptability;',
                'regular'
            ],
            image: '../Scurm.png'
        },
        'KANBAN': {
            title: 'Kanban is a visual workflow management method that helps teams visualize their work, limit work in progress, and maximize efficiency.',
            benefits: [
                'continuous delivery;',
                'visual workflow'
            ],
            image: '../kanban.png'
        }
    };

    return (
        <div className="flex  w-lvw container mx-auto h-full mt-24 mb-24">
            {/* Left Section */}
            <div className="w-2/5 px-12 py-16 flex flex-col justify-center bg-gray-100">
                <h1 className="text-4xl font-bold mb-6 leading-tight">
                    <span className='text-blue-500'>Agile</span><br />
                    frameworks<br />
                    we follow
                </h1>
                <p className="text-sm text-gray-700 leading-relaxed">
                    You will be involved in the app development process from the
                    project initiation day until the release day. We believe that Clients should
                    be active participants in the whole development cycle, controlling the
                    progress and having an opportunity to make corrections at any stage.
                    Scrum and Kanban methodologies we follow fit the best to this mission.
                </p>
            </div>

            {/* Right Section */}
            <div className="w-3/5 px-12 py-16">
                {/* Tabs */}
                <div className="flex mb-10 border-b border-white">
                    {Object.keys(tabData).map((tab) => (
                        <div key={tab} className="relative mr-12">
                            <button
                                className={`pb-3 font-medium text-xl transition-colors duration-200 ${activeTab === tab ? 'text-blue-500' : 'text-gray-400 hover:text-gray-500'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-all duration-200"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="transition-opacity duration-200">
                    <p className="text-lg mb-8 max-w-xl leading-relaxed">
                        {tabData[activeTab].title}
                    </p>

                    <div className="space-y-4 mb-10">
                        {tabData[activeTab].benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className="text-blue-500 mr-2 text-lg">✓</div>
                                <div className="text-gray-800">{benefit}</div>
                            </div>
                        ))}
                    </div>

                    {/* Custom diagram that matches the reference image */}
                    {tabData[activeTab].diagram}

                    <div className="mt-6 relative">
                        <img
                            key={activeTab} // Adding key ensures the image refreshes when tab changes
                            src={tabData[activeTab].image}
                            alt={`${activeTab} workflow diagram`}
                            className="w-full transition-opacity duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}