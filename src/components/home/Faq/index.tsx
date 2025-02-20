import React, { useState } from "react";
import Image from "next/image";
import { CircleHelp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What makes your platform different from other project management tools?",
      answer:
        "Our platform stands out through its intuitive interface, AI-powered automation, and seamless team collaboration features. We focus on streamlining workflows while providing robust analytics and customization options.",
    },
    {
      question: "What time tracking features are available?",
      answer:
        "We offer comprehensive time tracking features including automated timers, manual time entry, project-based tracking, detailed reports, and integration with popular billing platforms.",
    },
    {
      question: "How do you handle quality control?",
      answer:
        "Our quality control system includes automated checks, peer review processes, milestone validations, and detailed audit trails to ensure consistent project quality.",
    },
    {
      question: "What administrative controls are provided?",
      answer:
        "Administrators have access to robust controls including user permission management, workflow customization, resource allocation, and detailed activity monitoring.",
    },
    {
      question: "How does your reporting system work?",
      answer:
        "Our reporting system provides real-time analytics, customizable dashboards, automated report generation, and export capabilities in multiple formats.",
    },
    {
      question: "How does the project tracking system work?",
      answer:
        "The project tracking system offers real-time progress monitoring, milestone tracking, resource utilization metrics, and automated status updates.",
    },
    {
      question: "How do you handle team collaboration?",
      answer:
        "We facilitate team collaboration through real-time communication tools, shared workspaces, document collaboration, and integrated task management.",
    },
    {
      question: "What kind of analytics do you provide?",
      answer:
        "Our analytics suite includes project performance metrics, team productivity analysis, resource utilization reports, and predictive analytics for better decision-making.",
    },
    {
      question: "How does the client portal work?",
      answer:
        "The client portal provides a dedicated space for client collaboration, project updates, file sharing, and communication, all with customizable access controls.",
    },
    {
      question: "How do you handle service management?",
      answer:
        "Our service management includes automated workflow processes, SLA tracking, ticket management, and integrated communication channels.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20" id="faq">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#F8FAFC] border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
            <CircleHelp className="w-5 h-5 text-[#0A0A0A] mr-2" />
            <span className="text-[#0A0A0A]">FAQ's</span>
          </div>
          <h2 className="text-6xl font-bold">Frequently Asked Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <div
                key={index}
                className="bg-[#F4F7F9] border border-[#E4EBF0] rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xl font-medium pr-8">
                    {faq.question}
                  </span>
                  <div className="bg-[#333333] rounded-full p-2 flex-shrink-0">
                    <div className="w-6 h-6 relative">
                      <Image
                        src={
                          openIndex === index
                            ? "https://framerusercontent.com/images/ilTrUqtaRn3OV7UKGJjSNsQC1w.svg"
                            : "https://framerusercontent.com/images/ROg7tkXh5h3JY9OVXT66zDJMFUw.svg"
                        }
                        alt={openIndex === index ? "Minus" : "Plus"}
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-[#3d495b]">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {faqs.slice(5).map((faq, index) => (
              <div
                key={index + 5}
                className="bg-[#F4F7F9] border border-[#E4EBF0] rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index + 5)}
                >
                  <span className="text-xl font-medium pr-8">
                    {faq.question}
                  </span>
                  <div className="bg-[#333333] rounded-full p-2 flex-shrink-0">
                    <div className="w-6 h-6 relative">
                      <Image
                        src={
                          openIndex === index + 5
                            ? "https://framerusercontent.com/images/ilTrUqtaRn3OV7UKGJjSNsQC1w.svg"
                            : "https://framerusercontent.com/images/ROg7tkXh5h3JY9OVXT66zDJMFUw.svg"
                        }
                        alt={openIndex === index + 5 ? "Minus" : "Plus"}
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </button>
                {openIndex === index + 5 && (
                  <div className="px-6 pb-4 text-[#3d495b]">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
