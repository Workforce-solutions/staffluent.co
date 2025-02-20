import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircleQuestionIcon } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What makes Staffluent different from other platforms?",
      answer:
        "Staffluent uniquely combines project management, team collaboration, and performance analytics in one integrated solution. Our platform offers real-time tracking, comprehensive reporting, and client portal features all working seamlessly together.",
    },
    {
      question: "How does the project tracking system work?",
      answer:
        "Our system provides real-time project monitoring, task management, and team performance tracking. You can easily manage work orders, conduct quality inspections, and maintain detailed project records all in one place.",
    },
    {
      question: "How do you handle team collaboration?",
      answer:
        "We provide internal chat systems, project comments, team messaging, and smart notifications to ensure seamless communication. Teams can collaborate effectively while maintaining clear communication channels.",
    },
    {
      question: "What kind of analytics do you provide?",
      answer:
        "Our platform offers comprehensive analytics including productivity tracking, time utilization metrics, department performance analysis, and custom report generation to help optimize your operations.",
    },
    {
      question: "How does the client portal work?",
      answer:
        "Clients get their own dedicated portal for managing service requests, tracking project progress, and communicating with teams. It provides full transparency and easy collaboration between your team and clients.",
    },
  ];

  return (
    <section className="py-20" id="faq">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#F8FAFC] border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
            <MessageCircleQuestionIcon className="w-6 h-6 mr-2" />
            <span className="text-[#0A0A0A]">FAQ's</span>
          </div>
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqData.slice(0, 3).map((faq, index: any) => (
              <div
                key={index}
                className="bg-[#F4F7F9] border border-[#E4EBF0] rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-xl font-medium pr-8">
                    {faq.question}
                  </span>
                  <div className="bg-[#333333] rounded-full p-2 flex-shrink-0">
                    <div className="w-6 h-6 relative">
                      <Image
                        src="/api/placeholder/24/24"
                        alt={openIndex === index ? "Minus" : "Plus"}
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-[#3d495b]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {faqData.slice(3).map((faq, index: any) => (
              <div
                key={index + 3}
                className="bg-[#F4F7F9] border border-[#E4EBF0] rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index + 3 ? null : index + 3)
                  }
                >
                  <span className="text-xl font-medium pr-8">
                    {faq.question}
                  </span>
                  <div className="bg-[#333333] rounded-full p-2 flex-shrink-0">
                    <div className="w-6 h-6 relative">
                      <Image
                        src="/api/placeholder/24/24"
                        alt={openIndex === index + 3 ? "Minus" : "Plus"}
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index + 3 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-[#3d495b]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
