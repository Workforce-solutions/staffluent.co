"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What makes Staffluent different from other platforms?",
      answer: "Staffluent uniquely combines project management, team collaboration, and performance analytics in one integrated solution. Our platform offers real-time tracking, comprehensive reporting, and client portal features all working seamlessly together."
    },
    {
      question: "How does the project tracking system work?",
      answer: "Our system provides real-time project monitoring, task management, and team performance tracking. You can easily manage work orders, conduct quality inspections, and maintain detailed project records all in one place."
    },
    {
      question: "How do you handle team collaboration?",
      answer: "We provide internal chat systems, project comments, team messaging, and smart notifications to ensure seamless communication. Teams can collaborate effectively while maintaining clear communication channels."
    },
    {
      question: "What kind of analytics do you provide?",
      answer: "Our platform offers comprehensive analytics including productivity tracking, time utilization metrics, department performance analysis, and custom report generation to help optimize your operations."
    },
    {
      question: "How does the client portal work?",
      answer: "Clients get their own dedicated portal for managing service requests, tracking project progress, and communicating with teams. It provides full transparency and easy collaboration between your team and clients."
    },
    // New additions
    {
      question: "How do you handle service management?",
      answer: "Service management is streamlined through organized categories, automated request handling, and approval workflows. Teams can track service delivery, manage quality control, and maintain client satisfaction all through one integrated system."
    },
    {
      question: "What time tracking features are available?",
      answer: "Our platform includes automated time tracking, break management, attendance monitoring, and overtime tracking. Get real-time insights into time utilization and ensure efficient workforce management."
    },
    {
      question: "How do you handle quality control?",
      answer: "Quality control is integrated throughout with inspection tools, issue tracking, compliance monitoring, and performance metrics. Maintain high standards across all services while ensuring consistent delivery quality."
    },
    {
      question: "What administrative controls are provided?",
      answer: "Administrators have comprehensive controls including role management, department configuration, access permissions, and system settings. Customize the platform to match your organizational structure and security requirements."
    },
    {
      question: "How does your reporting system work?",
      answer: "Generate detailed reports on time tracking, productivity trends, department analytics, and performance metrics. Export capabilities ensure data portability while custom report generation meets specific analytical needs."
    }
  ];

  return (
    <section className="w-full max-w-[1200px] px-[20px] mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-600">
          We have put together same commonly asked question
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <motion.button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-black">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 text-gray-600">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
