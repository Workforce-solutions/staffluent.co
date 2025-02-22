import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircleQuestionIcon } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is Staffluent?",
      answer:
        "Staffluent is a comprehensive workforce and project management platform that streamlines operations—integrating project tracking, time & attendance, quality inspections, scheduling, and field operations. It's designed to support organizations of all sizes, from small teams to large enterprises.",
    },
    {
      question:
        "How does Staffluent scale to meet the needs of organizations of all sizes?",
      answer:
        "Our platform is built with flexibility in mind. Whether you're a startup or a multinational enterprise, Staffluent provides scalable modules—featuring advanced role‑based access controls, customizable workflows, and seamless integrations—that adapt to your evolving needs. We're committed to delivering value across the board, and our pricing structure is designed to be competitive for every customer segment.",
    },
    {
      question: "What core modules does Staffluent offer?",
      answer:
        "Staffluent's key modules include: Project & Task Management (create, assign, and track projects with real‑time updates), Time & Attendance (real‑time clock in/out, digital timesheets), Quality Inspections (automated checks, compliance tracking), Scheduling & Team Management (visual calendars, shift planning), Reports & Analytics (customizable dashboards), Communication Hub (integrated messaging), and Field Operations (mobile capabilities with GPS check‑ins).",
    },
    {
      question: "How does Staffluent integrate with existing systems?",
      answer:
        "Our platform is designed with open APIs and flexible integration options to connect smoothly with your current software ecosystem—whether it's HR systems, calendar apps, or other enterprise tools—ensuring a centralized, streamlined workflow.",
    },
    {
      question: "What measures does Staffluent take to ensure data security?",
      answer:
        "Data security is paramount. Staffluent adheres to industry-leading standards, incorporating robust encryption, secure access controls, and regular security audits to protect your sensitive information and maintain compliance with relevant regulations.",
    },
  ];

  return (
    <section className="py-20" id="faq">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#F8FAFC] border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
            <MessageCircleQuestionIcon className="w-6 h-6 mr-2" />
            <span className="text-[#0A0A0A]">FAQs</span>
          </div>
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqData.slice(0, 3).map((faq, index: number) => (
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
                        src={
                          openIndex === index
                            ? "ilTrUqtaRn3OV7UKGJjSNsQC1w.svg"
                            : "ROg7tkXh5h3JY9OVXT66zDJMFUw.svg"
                        }
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
            {faqData.slice(3).map((faq, index: number) => (
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
                        src={
                          openIndex === index + 3
                            ? "ilTrUqtaRn3OV7UKGJjSNsQC1w.svg"
                            : "ROg7tkXh5h3JY9OVXT66zDJMFUw.svg"
                        }
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
