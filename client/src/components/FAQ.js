import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import Font Awesome icons

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which services do you deal with?",
      answer:
        "We offer a range of interior design services, including space planning, furniture selection, color consultation, and custom design solutions.",
    },
    {
      question: "Where are you located?",
      answer: "Kisumu, Kenya.",
    },
    {
      question: "What is your design process?",
      answer:
        "Our design process typically involves an initial consultation, concept development, design presentation, and implementation to ensure that we meet your needs and preferences.",
    },
    {
      question: "Can you work with my existing furniture?",
      answer:
        "Absolutely! We can incorporate your existing furniture into the design or provide recommendations for new pieces that complement your style.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing varies based on the scope of the project. We offer free initial consultations to discuss your needs and provide a detailed quote.",
    },
    {
      question: "How do we contact the support does a typical project take?",
      answer:
        "The duration of a project depends on its complexity, but we strive to complete as early as possible.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-10 mt-5 rounded-lg">
      <div className="max-w-3xl mx-auto text-center text-gray-800 px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="mt-2 mb-6 text-md md:text-base text-gray-600">
          Here are some frequently asked questions about our interior design
          services from our loving customers.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base md:text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-gray-600 text-lg md:text-xl">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-md md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
