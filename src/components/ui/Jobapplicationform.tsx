import { useState } from 'react';

export default function JobApplicationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        message: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Here you would typically send the data to a server
    };

    return (
        <div className="flex h-4/6 bg-blue-950 mb-8">
            <div className="w-screen max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row">
                {/* Left side */}
                <div className="md:w-2/5 py-8 pr-8">
                    <h1 className="text-5xl font-normal text-blue-400 mb-8 mt-8">Apply for a job</h1>

                    <p className="text-white text-lg mb-6">
                        Send us your CV by filling in the form on the right or emailing us at{' '}
                        <a href="mailto:resume@foxsolution.com" className="text-red-400 hover:underline">
                            oditechbhubaneswar@gmail.com
                        </a>.
                    </p>

                    <p className="text-white text-lg">
                        We will get in touch with you if something comes up!
                    </p>
                </div>

                {/* Right side - Form */}
                <div className="md:w-3/5 py-8">
                    <div className="space-y-6">
                        {/* Name Field */}
                        <div className="relative">
                            <label htmlFor="name" className="block text-white mb-1 " >
                                Name<span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='John Doe'
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white border-b border-gray-500 pb-2 focus:outline-none focus:border-blue-400"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-white mb-1">
                                Email<span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='oditechbhubaneswar@gmail.com'
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white border-b border-gray-500 pb-2 focus:outline-none focus:border-blue-400"
                            />
                        </div>

                        {/* Position Field */}
                        <div className="relative">
                            <label htmlFor="position" className="block text-white mb-1">
                                Position<span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-white border-b border-gray-500 pb-2 focus:outline-none focus:border-blue-400 appearance-none"
                                >
                                    <option value="Designer" className="bg-blue-950">Designer</option>
                                    <option value="Developer" className="bg-blue-950">Developer</option>
                                    <option value="Project Manager" className="bg-blue-950">Project Manager</option>
                                    <option value="QA Engineer" className="bg-blue-950">QA Engineer</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <label htmlFor="message" className="block text-white mb-1">
                                Message<span className="text-red-400">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Describe your message'
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white border-b border-gray-500 pb-2 focus:outline-none focus:border-blue-400 min-h-12"
                                rows={3}
                            />
                        </div>

                        {/* Privacy Notice */}
                        <div className="text-sm text-gray-400">
                            Please be informed that when you click the Send button Foxsolution will process your personal data in accordance with our{' '}
                            <a href="#" className="text-red-400 hover:underline">Privacy notice</a>{' '}
                            for the purpose of providing you with appropriate information. This site is protected by reCAPTCHA and the Google{' '}
                            <a href="#" className="text-red-400 hover:underline">Privacy Policy</a>{' '}
                            and{' '}
                            <a href="#" className="text-red-400 hover:underline">Terms of Service</a>{' '}
                            apply.
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between items-center pt-4">
                            {/* Attach File Button */}
                            <label htmlFor="file-upload" className="cursor-pointer flex items-center text-white hover:text-blue-400 transition-colors">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                Attach file
                                <input
                                    id="file-upload"
                                    name="file"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>

                            {/* Send Button */}
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 hover:bg-blue-700 text-white px-12 py-3 rounded transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};