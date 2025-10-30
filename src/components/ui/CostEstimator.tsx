import React, { useState } from 'react';

type ServiceType = 'custom-software' | 'team-augmentation' | null;

interface CostEstimatorProps {
    initialStep?: number;
    onComplete?: (data: FormData) => void;
}

interface FormData {
    serviceType: ServiceType;
    developmentStage?: string | null;
    hasTechTeam?: string | null;
    longTermPartner?: string | null;
    teamSize?: string | null;
    budgetRange?: string | null;
    needDesignHelp?: string | null;
    cloudSupport?: string | null;
    contactForm?: string | null;
    productIdea?: string | null;
    teamLocation?: string | null;
    expertiseNeeded?: string | null;
    projectTimeline?: string | null;
    timezoneSupport?: string | null;
    projectScope?: string | null;
    organizationalQuestions?: {
        companyType?: string;
        projectDeadline?: string;
        budgetLimits?: string;
        partnerPriorities?: string[];
    } | null;
}

type Question = {
    id: number;
    question: string;
    field: keyof FormData;
    type?: 'text' | 'radio' | 'checkbox' | 'composite';
    placeholder?: string;
    options?: { label: string; value: string; description?: string }[];
    required?: boolean;
    fields?: CompositeField[];
    maxSelections?: number;
};

type CompositeField = {
    label: string;
    field: string;
    type: 'dropdown' | 'text' | 'checkbox';
    options?: { label: string; value: string }[];
    required?: boolean;
    placeholder?: string;
    maxSelections?: number;
};

const customSoftwareQuestions: Question[] = [
    {
        id: 1,
        question: 'What is the stage of your software development?',
        field: 'developmentStage',
        type: 'radio',
        required: true,
        options: [
            { label: 'An idea', value: 'idea' },
            { label: 'Ready functional specification', value: 'specification' },
            { label: 'An MVP', value: 'mvp' },
            { label: 'Active development', value: 'active' },
            { label: 'Need improvement/evolution', value: 'evolution' },
        ],
    },
    {
        id: 2,
        question: 'What is your market?',
        field: 'hasTechTeam',
        type: 'checkbox',
        required: true,
        options: [
            { label: 'Healthcare', value: 'healthcare' },
            { label: 'Banking and Finance', value: 'banking' },
            { label: 'Insurance', value: 'insurance' },
            { label: 'Wholesale/retail/ecommerce', value: 'wholesale' },
            { label: 'HoReCa', value: 'horeca' },
            { label: 'Manufacturing', value: 'manufacturing' },
            { label: 'Transportation', value: 'transportation' },
            { label: 'Public Services', value: 'public services' },
            { label: 'My product is not bound to a particular market', value: 'not apply' },
            { label: 'Other', value: 'other', description: 'add your plan' }
        ],
    },
    {
        id: 3,
        question: 'What services do you need?',
        field: 'longTermPartner',
        type: 'checkbox',
        required: true,
        options: [
            { label: 'Product planning', value: 'product planning' },
            { label: 'UX research and design', value: 'uX research and design' },
            { label: 'UI design', value: 'uI design' },
            { label: 'Product architecture design/consulting', value: 'product architecture design/consulting' },
            { label: 'Product software development', value: 'product software development' },
            { label: 'Team augmentation', value: 'team augmentation' },
            { label: 'API development', value: 'aPI development' },
            { label: 'Testing and QA', value: 'testing and QA' },

        ],
    },
    {
        id: 4,
        question: 'Which platforms does your app need to support?',
        field: 'teamSize',
        type: 'checkbox',
        required: true,
        options: [
            { label: 'Web', value: 'web' },
            { label: 'Mobile', value: 'mobile' },
            { label: 'Desktop', value: 'desktop' },
            { label: 'IoT', value: 'ioT' },
            { label: 'Other:', value: 'other:' },
        ],
    },
    {
        id: 5,
        question: 'What is the idea behind your product?',
        field: 'productIdea',
        type: 'text',
        placeholder: 'Please describe briefly',
        required: true,
    },
    {
        id: 6,
        question: 'Does your product require any advanced techs?',
        field: 'needDesignHelp',
        type: 'radio',
        required: true,
        options: [
            { label: 'AI / ML', value: 'aI / ML' },
            { label: 'Blockchain', value: 'blockchain' },
            { label: 'Virtual reality', value: 'virtual reality' },
            { label: 'Augmented reality', value: 'augmented reality' },
            {

                label: 'Other:',
                value: 'other',
                description: 'add ypur plan',

            },
        ],
    },
    {
        id: 7,
        question: 'Would you require any integrations?',
        field: 'cloudSupport',
        type: 'radio',
        required: true,
        options: [
            { label: 'No, I wouldnt', value: 'no, I wouldnt' },
            { label: 'Other', value: 'no' },
        ],
    },
    {
        id: 8,
        question: 'Organizational questions',
        field: 'organizationalQuestions',
        type: 'composite',
        required: true,
        fields: [
            {
                label: "What's your company type?",
                field: 'companyType',
                type: 'dropdown',
                options: [
                    { label: 'Enterprise', value: 'enterprise' },
                    { label: 'Middle business', value: 'middle business' },
                    { label: 'Small business', value: 'small business' },
                    { label: 'Startup', value: 'startup' },
                    { label: 'Not sure', value: 'not sure' }
                ],
                required: true,
            },
            {
                label: 'Do you have a deadline for your project?',
                field: 'projectDeadline',
                type: 'dropdown',
                options: [
                    { label: 'No I dont', value: 'dont' },
                    { label: '1-3 months', value: 'one-three' },
                    { label: '3-6 months', value: 'three-six' },
                    { label: '6 months-one year', value: 'one-year' },
                ],
                required: true,
            },
            {
                label: 'Do you have any budget limits? If yes, please specify the range.',
                field: 'budgetLimits',
                type: 'text',
                placeholder: 'Your answer',
                required: true,
            },
            {
                label: 'Define top 3 priorities for choosing a partner to work with',
                field: 'partnerPriorities',
                type: 'checkbox',
                required: true,
                maxSelections: 3,
                options: [
                    { label: 'Cost of work', value: 'cost' },
                    { label: 'Quality of work', value: 'quality' },
                    { label: 'Speed of work', value: 'speed' },
                    { label: 'Stick to timelines', value: 'timelines' },
                    { label: 'Robust processes', value: 'processes' },
                    { label: 'Transparency in collaboration', value: 'transparency' },
                    { label: 'Proven by testimonials expertise', value: 'testimonials' },
                    { label: 'Other', value: 'other' }
                ]
            }
        ]
    },
    {
        id: 9,
        question: 'Contact Form',
        field: 'contactForm',
        type: 'composite',
        required: true,
        fields: [
            {
                label: 'Name',
                field: 'name',
                type: 'text',
                placeholder: 'Enter your full name',
                required: true,
            },
            {
                label: 'Corporate Email',
                field: 'email',
                type: 'text',
                placeholder: 'Enter your corporate email',
                required: true,
            }
        ]
    }
];

const teamAugQuestions: Question[] = [
    {
        id: 1,
        question: 'Please, select the expert(s) needed?',
        field: 'teamLocation',
        type: 'checkbox',
        required: true,
        options: [
            { label: 'Backend Developer', value: 'backend Developer' },
            { label: 'Frontend Developer', value: 'frontend Developer' },
            { label: 'Full-stack Developer', value: 'full-stack Developer' },
            { label: 'QA Engineer', value: 'qA Engineer' },
            { label: 'UI/UX Designer', value: 'uI/UX Designer' },
            { label: 'DevOps Engineer', value: 'devOps Engineer' },
            { label: 'Other expert(s)', value: 'other expert(s)' },
        ],
    },
    {
        id: 2,
        question: 'Select the technology(ies) required?',
        field: 'expertiseNeeded',
        type: 'checkbox',
        required: true,
        options: [
            { label: 'Node.js', value: 'node' },
            { label: 'Ruby', value: 'ruby' },
            { label: '.Net', value: '.net' },
            { label: 'Java', value: 'java' },
            { label: 'Python', value: 'python' },
            { label: 'JavaScript', value: 'javaScript' },
            { label: 'React native', value: 'react-native' },
            { label: 'Other', value: 'other' },
        ],
    },
    {
        id: 3,
        question: 'How many team members do you need?',
        field: 'projectTimeline',
        type: 'radio',
        required: true,
        options: [
            { label: '0.5', value: '0.5' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
            { label: 'Not sure', value: 'not sure' },
        ],
    },
    {
        id: 4,
        question: 'Select seniority level of experts required.',
        field: 'projectScope',
        type: 'checkbox',
        required: true,
        options: [
            { label: 'Expert', value: 'expert' },
            { label: 'Senior', value: 'senior' },
            { label: 'Middle', value: 'middle' },
            { label: 'Junior', value: 'junior' },
            { label: 'Not sure', value: 'not sure' },
        ],
    },
    {
        id: 5,
        question: 'Select potential work duration',
        field: 'productIdea',
        type: 'radio',
        required: true,
        options: [
            { label: 'Less than a month', value: 'less than a month' },
            { label: '1-3 months', value: 'one-three' },
            { label: '3-6 months', value: 'three-six' },
            { label: '6+ months', value: 'six' },
            { label: 'Not sure', value: 'not sure' },
        ],
    },
    {
        id: 6,
        question: 'What company type are you?',
        field: 'longTermPartner',
        type: 'radio',
        required: true,
        options: [
            { label: 'Enterprise', value: 'enterprise' },
            { label: 'Middle business', value: 'middle business' },
            { label: 'Small business', value: 'small business' },
            { label: 'Startup', value: 'startup' },
            { label: 'Not sure', value: 'not sure' },
        ],
    },
    {
        id: 7,
        question: 'What software are you working on?',
        field: 'teamSize',
        type: 'radio',
        required: true,
        options: [
            { label: 'Enterprise software', value: 'enterprise software' },
            { label: 'Ecommerce software', value: 'ecommerce software' },
            { label: 'CRM / HRM software', value: 'cRM / HRM software' },
            { label: 'Inventory management software', value: 'inventory management software' },
            { label: 'Fintech / Accounting software', value: 'fintech / Accounting software' },
            { label: 'Healthcare / Medical software', value: 'healthcare / Medical software' },
            { label: 'IoT software', value: 'ioT software' },
            { label: 'Insurance software', value: 'insurance software' },
            { label: 'Investment software', value: 'investment software' },
            { label: 'Content management software', value: 'content management software' },
            { label: 'Blockchain software', value: 'blockchain software' },
            { label: 'Big data software', value: 'big data software' },
            { label: 'AI-based software', value: 'aI-based software' },
            { label: 'Another software type', value: 'another software type' },
        ],
    },
    {
        id: 8,
        question: 'Will they work in your timezone?',
        field: 'timezoneSupport',
        type: 'composite',
        required: true,
        fields: [
            {
                label: 'Name',
                field: 'name',
                type: 'text',
                placeholder: 'Enter your full name',
                required: true,
            },
            {
                label: 'Corporate Email',
                field: 'email',
                type: 'text',
                placeholder: 'Enter your corporate email',
                required: true,
            },
            {
                label: 'Add details',
                field: 'details',
                type: 'text',
                placeholder: 'Please write some detail about your project',
                required: true,
            },
        ]
    },
];

const CostEstimator: React.FC<CostEstimatorProps> = ({
    initialStep = 0,
    onComplete = () => { },
}) => {
    const [currentStep, setCurrentStep] = useState(initialStep);
    const [selectedService, setSelectedService] = useState<ServiceType>(null);
    const [formData, setFormData] = useState<FormData>({
        serviceType: null,
        organizationalQuestions: null
    });
    const [questionHistory, setQuestionHistory] = useState<number[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getCurrentQuestions = (): Question[] => {
        return selectedService === 'custom-software'
            ? customSoftwareQuestions
            : teamAugQuestions;
    };

    const handleServiceSelection = (service: ServiceType) => {
        setSelectedService(service);
        setFormData({ ...formData, serviceType: service });
        setError(null);
    };

    const handleAnswerChange = (field: keyof FormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setError(null);
    };

    const handleCompositeChange = (subField: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            organizationalQuestions: {
                ...(prev.organizationalQuestions || {}),
                [subField]: value
            }
        }));
        setError(null);
    };

    const validateCurrentStep = (): boolean => {
        if (currentStep === 0) {
            if (!selectedService) {
                setError("Please select a service type");
                return false;
            }
            return true;
        }

        const questions = getCurrentQuestions();
        const questionIndex = currentStep - 1;
        const currentQuestion = questions[questionIndex];

        if (currentQuestion.required) {
            if (currentQuestion.type === 'composite') {
                for (const field of currentQuestion.fields || []) {
                    if (field.required) {
                        if (field.type === 'checkbox') {
                            if (!formData.organizationalQuestions?.[field.field as keyof FormData['organizationalQuestions']]?.length) {
                                setError(`Please select at least one option for "${field.label}"`);
                                return false;
                            }
                        } else {
                            if (!formData.organizationalQuestions?.[field.field as keyof FormData['organizationalQuestions']]) {
                                setError(`Please answer "${field.label}"`);
                                return false;
                            }
                        }
                    }
                }
            } else if (!formData[currentQuestion.field]) {
                setError("Please select an option to continue");
                return false;
            }
        }

        return true;
    };

    const handleProceed = () => {
        if (validateCurrentStep()) {
            setCurrentStep(1);
            setQuestionHistory([]);
            setError(null);
        }
    };

    const handleNext = () => {
        if (!validateCurrentStep()) return;

        const questions = getCurrentQuestions();
        if (currentStep < questions.length) {
            setQuestionHistory(prev => [...prev, currentStep]);
            setCurrentStep(currentStep + 1);
            setError(null); // Clear any errors when moving forward
        } else {
            // Form completion logic
            onComplete(formData);
            // Show success message
            alert("Thank you! Your estimate request has been submitted.");

            // Reset form state directly here
            setCurrentStep(0);
            setSelectedService(null);
            setFormData({ serviceType: null, organizationalQuestions: null });
            setQuestionHistory([]);
            setError(null);
        }
    };

    const handlePrev = () => {
        if (currentStep === 1) {
            // If we're at the first question, go back to service selection
            setCurrentStep(0);
            setQuestionHistory([]);
        } else if (questionHistory.length > 0) {
            // Go back to the previous question
            const newHistory = [...questionHistory];
            newHistory.pop();
            const prevStep = newHistory.length > 0 ? newHistory[newHistory.length - 1] : 0;

            setQuestionHistory(newHistory);
            setCurrentStep(prevStep + 1); // Add 1 because questions are 1-indexed in UI
        }
        setError(null);
    };

    const renderQuestionInput = (question: Question) => {
        const selectedValue = formData[question.field] || '';

        if (question.type === 'text') {
            return (
                <textarea
                    placeholder={question.placeholder}
                    value={selectedValue as string}
                    onChange={(e) => handleAnswerChange(question.field, e.target.value)}
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            );
        } else if (question.type === 'composite') {
            return (
                <div className="space-y-6">
                    {question.fields?.map((field) => {
                        const fieldValue = formData.organizationalQuestions?.[field.field as keyof FormData['organizationalQuestions']] || '';
                        const checkboxValues = Array.isArray(fieldValue) ? fieldValue : [];

                        return (
                            <div key={field.field} className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    {field.label}
                                    {field.required && <span className="text-red-500 ml-1">*</span>}
                                </label>

                                {field.type === 'text' ? (
                                    <input
                                        type="text"
                                        placeholder={field.placeholder}
                                        value={fieldValue as string}
                                        onChange={(e) => handleCompositeChange(field.field, e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : field.type === 'dropdown' ? (
                                    <select
                                        value={fieldValue as string}
                                        onChange={(e) => handleCompositeChange(field.field, e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select an option</option>
                                        {field.options?.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                ) : field.type === 'checkbox' ? (
                                    <div className="space-y-2">
                                        {field.options?.map(opt => (
                                            <label key={opt.value} className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    checked={checkboxValues.includes(opt.value)}
                                                    onChange={(e) => {
                                                        const newValues = e.target.checked
                                                            ? [...checkboxValues, opt.value]
                                                            : checkboxValues.filter(v => v !== opt.value);

                                                        if (!field.maxSelections || newValues.length <= field.maxSelections) {
                                                            handleCompositeChange(field.field, newValues);
                                                        }
                                                    }}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                                                />
                                                <span>{opt.label}</span>
                                            </label>
                                        ))}
                                        {field.maxSelections && (
                                            <p className="text-sm text-gray-500">
                                                Select up to {field.maxSelections} options
                                            </p>
                                        )}
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div className="space-y-3">
                    {question.options?.map((opt) => (
                        <label key={opt.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type={question.type === 'checkbox' ? 'checkbox' : 'radio'}
                                name={question.field.toString()}
                                value={opt.value}
                                checked={
                                    question.type === 'checkbox'
                                        ? (selectedValue as string[] || []).includes(opt.value)
                                        : selectedValue === opt.value
                                }
                                onChange={() => {
                                    if (question.type === 'checkbox') {
                                        const currentValues = (selectedValue as string[] || []);
                                        const newValues = currentValues.includes(opt.value)
                                            ? currentValues.filter(v => v !== opt.value)
                                            : [...currentValues, opt.value];
                                        handleAnswerChange(question.field, newValues);
                                    } else {
                                        handleAnswerChange(question.field, opt.value);
                                    }
                                }}
                                className={`h-5 w-5 text-blue-600 focus:ring-blue-500 ${question.type === 'checkbox' ? 'rounded' : 'rounded-full'
                                    }`}
                            />
                            <span className="text-gray-700">{opt.label}</span>
                        </label>
                    ))}
                </div>
            );
        }
    };

    if (currentStep === 0) {
        return (
            <div className="w-full py-8 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-gray-500 mb-4">Free estimate for your startup</p>

                    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                        <div className="mb-6 md:mb-0 md:w-1/2 ">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                                What kind of services you want to <span className="text-blue-500">estimate</span>?
                            </h2>
                        </div>

                        <div className="md:w-1/3">
                            <div className="space-y-4">
                                <div>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="estimateType"
                                            value="custom-software"
                                            checked={selectedService === 'custom-software'}
                                            onChange={() => handleServiceSelection('custom-software')}
                                            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700">Estimate custom software development cost</span>
                                    </label>

                                    <label className="flex items-center space-x-3 cursor-pointer mt-4">
                                        <input
                                            type="radio"
                                            name="estimateType"
                                            value="team-augmentation"
                                            checked={selectedService === 'team-augmentation'}
                                            onChange={() => handleServiceSelection('team-augmentation')}
                                            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700">Team augmentation services cost</span>
                                    </label>

                                    {error && (
                                        <p className="text-red-500 text-sm mt-2">{error}</p>
                                    )}
                                </div>

                                <button
                                    onClick={handleProceed}
                                    className="bg-red-500 text-white px-5 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-red-500 hover:shadow-md transform hover:-translate-y-0.5 border border-red-600 inline-flex items-center justify-center w-fit"
                                >
                                    Proceed to get a free quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const questions = getCurrentQuestions();
    const questionIndex = currentStep - 1;

    if (questionIndex < 0 || questionIndex >= questions.length) {
        return <div>Error: Question not found.</div>;
    }

    const currentQuestion = questions[questionIndex];
    const isLastQuestion = currentStep === questions.length;

    return (
        <div className="w-full py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-500">
                            Question {currentStep} / {questions.length}
                        </p>
                        <p className="text-blue-600 font-medium">
                            {selectedService === 'custom-software' ? 'Custom Software Development Cost' : 'Team Augmentation Services Cost'}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {currentQuestion.question}
                                {currentQuestion.required && <span className="text-red-500 ml-1">*</span>}
                            </h3>
                        </div>

                        <div className="md:w-1/2">
                            <div className="mb-6">
                                {renderQuestionInput(currentQuestion)}
                                {error && currentQuestion.required && (
                                    <p className="text-red-500 text-sm mt-2">{error}</p>
                                )}
                            </div>

                            <div className="flex justify-between mt-8">
                                <button
                                    onClick={handlePrev}
                                    className="px-6 py-2 border border-gray-300 text-gray-700 transition-all duration-300 hover:bg-red-600 hover:bg-opacity-10 hover:text-red-600 hover:border-red-600 hover:shadow-md transform hover:-translate-y-0.5"
                                >
                                    {currentStep === 1 ? 'Change Service' : 'Previous'}
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-red-500 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-red-500 hover:shadow-md transform hover:-translate-y-0.5 border border-red-600"
                                >
                                    {isLastQuestion ? 'Submit' : 'Next'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CostEstimator;