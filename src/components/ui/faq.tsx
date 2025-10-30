import { useState } from "react";

interface FAQItem {

  question: string;
  answer: string | JSX.Element;



   



}

interface FAQProps {
  faqs?: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(5); // Show 5 questions initially

  const toggleFAQ = (index: number) => {
    // If clicking on the currently open item, close it
    // Otherwise, open the clicked item (and close any other)
    setOpenIndex(openIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount(faqs.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-8 px-6 pb-16 bg-white">
      <h3 className="text-4xl font-medium mb-8 text-[#FFB703]">
        Frequently asked<span className="text-black"> questions</span>
      </h3>

      <div className="space-y-2">
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <div
            key={index}
            className="border-t border-gray-200 pt-4 transition-all duration-300"
          >
            <button
              className="w-full text-left flex items-start gap-4 py-2 font-normal text-lg transition-colors duration-200 hover:text-blue-600 focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span
                className={`mt-1 text-2xl transition-all duration-200 ${openIndex === index ? "text-blue-600" : "text-gray-400"
                  }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
              <span
                className={`${openIndex === index ? "text-blue-600 font-semibold" : "text-gray-800"
                  }`}
              >
                {faq.question}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              aria-hidden={openIndex !== index}
            >
              <div className="mt-2 pl-12 text-gray-700 pb-4">
                {typeof faq.answer === "string" ? (
                  <p>{faq.answer}</p>
                ) : (
                  faq.answer
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < faqs.length && (
        <div className="mt-8 text-start">
          <button
            onClick={loadMore}
            className="text-blue-600 font-medium hover:text-blue-950 transition-colors duration-200"
          >
            Load more {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQ;