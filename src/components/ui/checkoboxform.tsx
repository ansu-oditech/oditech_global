import React, { useState } from 'react';

type ServiceType =
  | 'app-development'
  | 'video-editing'
  | 'graphics-design'
  | 'pr-management'
  | 'social-media'
  | 'website-design'
  | 'digital-marketing'
  | 'logo-branding'
  | '3d-design'
  | null;

interface CostEstimatorProps {
  initialStep?: number;
  onComplete?: (data: FormData) => void;
}

interface FormData {
  serviceType: ServiceType;
  projectStage?: string | null;
  projectFocus?: string[] | null;
  timeline?: string | null;
  budget?: string | null;
  notes?: string | null;
  contactForm?: { name?: string; email?: string } | null;
}

type Question = {
  id: number;
  question: string;
  field: keyof FormData;
  type: 'text' | 'radio' | 'checkbox' | 'composite';
  options?: { label: string; value: string }[];
  required?: boolean;
  placeholder?: string;
  fields?: {
    label: string;
    field: string;
    type: 'text';
    placeholder?: string;
  }[];
};

// ✅ Question sets for all 9 services
const serviceQuestions: Record<ServiceType, Question[]> = {
  // 1️⃣ App Development
  'app-development': [
    {
      id: 1,
      question: 'Which part of app development do you need help with?',
      field: 'projectFocus',
      type: 'checkbox',
      required: true,
      options: [
        { label: 'UI/UX Design', value: 'uiux' },
        { label: 'Frontend Development', value: 'frontend' },
        { label: 'Backend Development', value: 'backend' },
        { label: 'API Integration', value: 'api' },
        { label: 'Testing & Maintenance', value: 'qa' },
      ],
    },
    {
      id: 2,
      question: 'Expected development timeline?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Month', value: '1month' },
        { label: '2-3 Months', value: '2-3months' },
        { label: '3-6 Months', value: '3-6months' },
      ],
    },
    {
      id: 3,
      question: 'Estimated budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹50K - ₹1L', value: '50-1l' },
        { label: '₹1L - ₹2L', value: '1-2l' },
        { label: '₹2L+', value: '2l+' },
      ],
    },
    {
      id: 4,
      question: 'Any additional details or notes?',
      field: 'notes',
      type: 'text',
      placeholder: 'Describe your app idea or requirements briefly',
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text', placeholder: 'Enter your name' },
        { label: 'Corporate Email', field: 'email', type: 'text', placeholder: 'Enter your email' },
      ],
    },
  ],

  // 2️⃣ Video Editing
  'video-editing': [
    {
      id: 1,
      question: 'Which stage of production do you need?',
      field: 'projectFocus',
      type: 'checkbox',
      options: [
        { label: 'Pre-Production', value: 'pre' },
        { label: 'Production', value: 'production' },
        { label: 'Post-Production', value: 'post' },
        { label: 'Delivery & Revisions', value: 'delivery' },
      ],
    },
    {
      id: 2,
      question: 'Estimated project timeline?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Week', value: '1week' },
        { label: '2 Weeks', value: '2weeks' },
        { label: '3+ Weeks', value: '3weeks' },
      ],
    },
    {
      id: 3,
      question: 'Budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹30K - ₹60K', value: '30-60k' },
        { label: '₹60K - ₹1L', value: '60-1l' },
        { label: '₹1L+', value: '1l+' },
      ],
    },
    {
      id: 4,
      question: 'Describe your video project or needs',
      field: 'notes',
      type: 'text',
      placeholder: 'Example: event shoot, product video, corporate promo...',
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Corporate Email', field: 'email', type: 'text' },
      ],
    },
  ],

  // 3️⃣ Graphics Design
  'graphics-design': [
    {
      id: 1,
      question: 'What graphic design services do you need?',
      field: 'projectFocus',
      type: 'checkbox',
      options: [
        { label: 'Branding', value: 'branding' },
        { label: 'Marketing Materials', value: 'marketing' },
        { label: 'UI/UX Design', value: 'uiux' },
        { label: 'Illustrations', value: 'illustrations' },
      ],
    },
    {
      id: 2,
      question: 'Timeline for delivery?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Week', value: '1week' },
        { label: '2 Weeks', value: '2weeks' },
        { label: '3 Weeks', value: '3weeks' },
      ],
    },
    {
      id: 3,
      question: 'Estimated budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹30K - ₹60K', value: '30-60k' },
        { label: '₹60K - ₹1L', value: '60-1l' },
        { label: '₹1L+', value: '1l+' },
      ],
    },
    {
      id: 4,
      question: 'Additional project details?',
      field: 'notes',
      type: 'text',
      placeholder: 'Describe what materials or visuals you need',
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Corporate Email', field: 'email', type: 'text' },
      ],
    },
  ],

  // 4️⃣ PR Management
  'pr-management': [
    {
      id: 1,
      question: 'What type of PR support are you looking for?',
      field: 'projectFocus',
      type: 'checkbox',
      options: [
        { label: 'Media Relations', value: 'media' },
        { label: 'Online Reputation', value: 'reputation' },
        { label: 'Influencer PR', value: 'influencer' },
        { label: 'Corporate PR', value: 'corporate' },
      ],
    },
    {
      id: 2,
      question: 'Engagement duration?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Month', value: '1month' },
        { label: '3 Months', value: '3months' },
        { label: 'Ongoing', value: 'ongoing' },
      ],
    },
    {
      id: 3,
      question: 'Budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹50K - ₹1L', value: '50-1l' },
        { label: '₹1L - ₹2L', value: '1-2l' },
        { label: '₹2L+', value: '2l+' },
      ],
    },
    {
      id: 4,
      question: 'Additional notes or goals?',
      field: 'notes',
      type: 'text',
      placeholder: 'Example: press coverage, brand awareness, crisis PR...',
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Corporate Email', field: 'email', type: 'text' },
      ],
    },
  ],

  // 5️⃣ Social Media
  'social-media': [
    {
      id: 1,
      question: 'Which social media services do you need?',
      field: 'projectFocus',
      type: 'checkbox',
      options: [
        { label: 'Strategy & Planning', value: 'strategy' },
        { label: 'Content Creation', value: 'content' },
        { label: 'Community Management', value: 'community' },
        { label: 'Analytics & Reporting', value: 'analytics' },
      ],
    },
    {
      id: 2,
      question: 'Campaign duration?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Month', value: '1month' },
        { label: '3 Months', value: '3months' },
        { label: 'Ongoing', value: 'ongoing' },
      ],
    },
    {
      id: 3,
      question: 'Budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹30K - ₹60K', value: '30-60k' },
        { label: '₹60K - ₹1L', value: '60-1l' },
        { label: '₹1L+', value: '1l+' },
      ],
    },
    {
      id: 4,
      question: 'Additional details?',
      field: 'notes',
      type: 'text',
      placeholder: 'Mention your target audience or platforms',
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Corporate Email', field: 'email', type: 'text' },
      ],
    },
  ],

  // 6️⃣ Website Design & Management
  'website-design': [
    {
      id: 1,
      question: 'What areas of website design do you need?',
      field: 'projectFocus',
      type: 'checkbox',
      options: [
        { label: 'UI/UX Design', value: 'uiux' },
        { label: 'Development', value: 'development' },
        { label: 'CMS & Integration', value: 'cms' },
        { label: 'SEO & Optimization', value: 'seo' },
        { label: 'Maintenance & Support', value: 'maintenance' },
      ],
    },
    {
      id: 2,
      question: 'Preferred technology?',
      field: 'notes',
      type: 'text',
      placeholder: 'WordPress, Webflow, Laravel, React, etc.',
    },
    {
      id: 3,
      question: 'Expected timeline?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Month', value: '1month' },
        { label: '2-3 Months', value: '2-3months' },
        { label: 'Ongoing', value: 'ongoing' },
      ],
    },
    {
      id: 4,
      question: 'Budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹80K - ₹1.2L', value: '80-120k' },
        { label: '₹1.2L - ₹2L', value: '120-200k' },
        { label: '₹2L+', value: '2l+' },
      ],
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Corporate Email', field: 'email', type: 'text' },
      ],
    },
  ],

  // 7️⃣ Digital Marketing
  'digital-marketing': [
    {
      id: 1,
      question: 'Which digital marketing service do you need?',
      field: 'projectFocus',
      type: 'checkbox',
      options: [
        { label: 'Strategy & Planning', value: 'strategy' },
        { label: 'Social Media', value: 'social' },
        { label: 'SEO & Paid Ads', value: 'seo' },
        { label: 'Reporting & Optimization', value: 'reporting' },
      ],
    },
    {
      id: 2,
      question: 'Expected timeline?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Month', value: '1month' },
        { label: '3 Months', value: '3months' },
        { label: 'Ongoing', value: 'ongoing' },
      ],
    },
    {
      id: 3,
      question: 'Budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹30K - ₹60K', value: '30-60k' },
        { label: '₹60K - ₹1L', value: '60-1l' },
        { label: '₹1L+', value: '1l+' },
      ],
    },
    {
      id: 4,
      question: 'Additional notes?',
      field: 'notes',
      type: 'text',
      placeholder: 'Describe your marketing objectives or platforms',
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Corporate Email', field: 'email', type: 'text' },
      ],
    },
  ],

  // 8️⃣ Logo & Brand Identity
  'logo-branding': [
    {
      id: 1,
      question: 'Which branding services do you require?',
      field: 'projectFocus',
      type: 'checkbox',
      options: [
        { label: 'Logo Concept', value: 'logo' },
        { label: 'Brand Identity', value: 'identity' },
        { label: 'Stationery Design', value: 'stationery' },
        { label: 'Brand Guidelines', value: 'guidelines' },
      ],
    },
    {
      id: 2,
      question: 'Project timeline?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Week', value: '1week' },
        { label: '2-3 Weeks', value: '2-3weeks' },
        { label: 'Ongoing', value: 'ongoing' },
      ],
    },
    {
      id: 3,
      question: 'Budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹30K - ₹60K', value: '30-60k' },
        { label: '₹60K - ₹1L', value: '60-1l' },
        { label: '₹1L+', value: '1l+' },
      ],
    },
    {
      id: 4,
      question: 'Notes or preferences?',
      field: 'notes',
      type: 'text',
      placeholder: 'Color themes, brand personality, or reference styles',
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Corporate Email', field: 'email', type: 'text' },
      ],
    },
  ],

  // 9️⃣ 3D Design
  '3d-design': [
    {
      id: 1,
      question: 'What type of 3D services do you need?',
      field: 'projectFocus',
      type: 'checkbox',
      options: [
        { label: 'Concept & Visualization', value: 'concept' },
        { label: 'Modeling & Texturing', value: 'modeling' },
        { label: 'Elevation & Rendering', value: 'rendering' },
        { label: 'Animation & Delivery', value: 'animation' },
      ],
    },
    {
      id: 2,
      question: 'Timeline for delivery?',
      field: 'timeline',
      type: 'radio',
      options: [
        { label: '1 Week', value: '1week' },
        { label: '2-3 Weeks', value: '2-3weeks' },
        { label: 'Ongoing', value: 'ongoing' },
      ],
    },
    {
      id: 3,
      question: 'Budget range?',
      field: 'budget',
      type: 'radio',
      options: [
        { label: '₹30K - ₹60K', value: '30-60k' },
        { label: '₹60K - ₹1L', value: '60-1l' },
        { label: '₹1L+', value: '1l+' },
      ],
    },
    {
      id: 4,
      question: 'Additional notes?',
      field: 'notes',
      type: 'text',
      placeholder: 'Mention software preference or render type',
    },
    {
      id: 5,
      question: 'Contact Form',
      field: 'contactForm',
      type: 'composite',
      fields: [
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Corporate Email', field: 'email', type: 'text' },
      ],
    },
  ],
};

// ✅ MAIN COMPONENT
const CostEstimator: React.FC<CostEstimatorProps> = ({
  initialStep = 0,
  onComplete = () => {},
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [formData, setFormData] = useState<FormData>({ serviceType: null });
  const [error, setError] = useState<string | null>(null);

  const getCurrentQuestions = (): Question[] => {
    return selectedService ? serviceQuestions[selectedService] || [] : [];
  };

  const handleServiceSelection = (service: ServiceType) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, serviceType: service }));
    setError(null);
     setCurrentStep(1);
  };

  const handleAnswerChange = (field: keyof FormData, value: FormData[keyof FormData]): void => {
    setFormData(prev => ({ ...prev, [field]: value } as FormData));
  };

  const handleCompositeChange = (parentField: keyof FormData, subField: string, value: string) => {
    setFormData(prev => {
      const prevValue = prev[parentField];
      const prevObj =
        typeof prevValue === 'object' && prevValue !== null
          ? (prevValue as Record<string, string>)
          : {};
      return {
        ...prev,
        [parentField]: { ...prevObj, [subField]: value },
      } as FormData;
    });
  };

  const handleNext = () => {
    const questions = getCurrentQuestions();
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
      alert('Your request has been submitted!');
      setSelectedService(null);
      setCurrentStep(0);
      setFormData({ serviceType: null });
    }
  };

  if (currentStep === 0) {
    return (
      <div className="w-full py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What service would you like to <span className="text-blue-500">estimate?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'App Development', value: 'app-development' },
              { label: 'Video Shoot & Editing', value: 'video-editing' },
              { label: 'Graphics Design', value: 'graphics-design' },
              { label: 'PR Management', value: 'pr-management' },
              { label: 'Social Media Management', value: 'social-media' },
              { label: 'Website Design & Management', value: 'website-design' },
              { label: 'Digital Marketing', value: 'digital-marketing' },
              { label: 'Logo Designing & Brand Identity', value: 'logo-branding' },
              { label: '3D Designing & Elevation', value: '3d-design' },
            ].map(s => (
              <label
                key={s.value}
                className={`border rounded-lg p-4 cursor-pointer flex items-center justify-center text-center font-medium ${
                  selectedService === s.value
                    ? 'border-red-500 bg-red-50 text-red-600'
                    : 'border-gray-300 hover:border-red-400'
                }`}
              >
                <input
                  type="radio"
                  name="service"
                  value={s.value}
                  checked={selectedService === s.value}
                  onChange={() => handleServiceSelection(s.value as ServiceType)}
                  className="hidden"
                />
                {s.label}
              </label>
            ))}
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

         
        </div>
      </div>
    );
  }

  const questions = getCurrentQuestions();
  const questionIndex = currentStep - 1;
  const currentQuestion = questions[questionIndex];

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <p className="text-gray-500">
              Question {currentStep} / {questions.length}
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">
              {currentQuestion.question}
            </h3>
          </div>

          {currentQuestion.type === 'checkbox' &&
            currentQuestion.options?.map(opt => (
              <label key={opt.value} className="block mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={e => {
                    const prev = formData[currentQuestion.field] as string[] || [];
                    const updated = e.target.checked
                      ? [...prev, opt.value]
                      : prev.filter(v => v !== opt.value);
                    handleAnswerChange(currentQuestion.field, updated);
                  }}
                  checked={(formData[currentQuestion.field] as string[] || []).includes(opt.value)}
                  className="mr-2"
                />
                {opt.label}
              </label>
            ))}

          {currentQuestion.type === 'radio' &&
            currentQuestion.options?.map(opt => (
              <label key={opt.value} className="block mb-2 cursor-pointer">
                <input
                  type="radio"
                  name={currentQuestion.field}
                  value={opt.value}
                  onChange={() => handleAnswerChange(currentQuestion.field, opt.value)}
                  checked={formData[currentQuestion.field] === opt.value}
                  className="mr-2"
                />
                {opt.label}
              </label>
            ))}

          {currentQuestion.type === 'text' && (
            <textarea
              placeholder={currentQuestion.placeholder}
              value={(formData[currentQuestion.field] as string) || ''}
              onChange={e => handleAnswerChange(currentQuestion.field, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500"
            />
          )}

          {currentQuestion.type === 'composite' &&
            currentQuestion.fields?.map(f => (
              <div key={f.field} className="mb-3">
                <label className="block text-sm mb-1">{f.label}</label>
                <input
                  type="text"
                  placeholder={f.placeholder}
                  value={
                    (formData[currentQuestion.field] as FormData['contactForm'] | undefined)?.[
                      f.field as keyof NonNullable<FormData['contactForm']>
                    ] ?? ''
                  }
                  onChange={e => handleCompositeChange(currentQuestion.field, f.field, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500"
                />
              </div>
            ))}

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:text-red-600 hover:border-red-600"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="px-6 py-2 bg-red-500 text-white rounded border border-red-600 hover:bg-opacity-0 hover:text-red-600"
            >
              {currentStep === questions.length ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
