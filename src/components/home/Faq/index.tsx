import React, { useState } from "react";
import Image from "next/image";
import { CircleHelp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Staffluent?",
      answer: "Staffluent is a comprehensive workforce and project management platform that streamlines operations—integrating project tracking, time & attendance, quality inspections, scheduling, and field operations. It's designed to support organizations of all sizes, from small teams to large enterprises.",
    },
    {
      question: "How does Staffluent scale to meet the needs of organizations of all sizes?",
      answer: "Our platform is built with flexibility in mind. Whether you're a startup or a multinational enterprise, Staffluent provides scalable modules—featuring advanced role‑based access controls, customizable workflows, and seamless integrations—that adapt to your evolving needs. We're committed to delivering value across the board, and our pricing structure is designed to be competitive for every customer segment.",
    },
    {
      question: "What core modules does Staffluent offer?",
      answer: "Staffluent's key modules include: Project & Task Management (create, assign, and track projects with real‑time updates), Time & Attendance (real‑time clock in/out, digital timesheets), Quality Inspections (automated checks, compliance tracking), Scheduling & Team Management (visual calendars, shift planning), Reports & Analytics (customizable dashboards), Communication Hub (integrated messaging), and Field Operations (mobile capabilities with GPS check‑ins).",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes. Staffluent offers a 14‑day full‑access free trial, enabling you to explore every feature without any obligation or credit card requirement.",
    },
    {
      question: "How does Staffluent integrate with existing systems?",
      answer: "Our platform is designed with open APIs and flexible integration options to connect smoothly with your current software ecosystem—whether it's HR systems, calendar apps, or other enterprise tools—ensuring a centralized, streamlined workflow.",
    },
    {
      question: "What measures does Staffluent take to ensure data security?",
      answer: "Data security is paramount. Staffluent adheres to industry-leading standards, incorporating robust encryption, secure access controls, and regular security audits to protect your sensitive information and maintain compliance with relevant regulations.",
    },
    {
      question: "Can Staffluent be customized to fit our specific business processes?",
      answer: "Absolutely. Staffluent offers extensive customization options, including configurable dashboards, custom workflows, and role‑based permissions. We work closely with customers of all sizes to tailor the platform to their unique operational needs.",
    },
    {
      question: "What kind of support can we expect with Staffluent?",
      answer: "Our dedicated support team provides priority assistance, comprehensive onboarding, and ongoing technical support to ensure that your organization maximizes the value of the platform. We offer tailored consultation for enterprise customers while maintaining high-quality service for all users.",
    },
    {
      question: "How does Staffluent drive operational efficiency?",
      answer: "By consolidating project management, time tracking, quality control, and communication into a single platform, Staffluent minimizes administrative overhead and improves workflow coordination. Its real‑time insights and AI‑powered analytics help identify bottlenecks and optimize resource allocation.",
    },
    {
      question: "What is the typical implementation process?",
      answer: "We work collaboratively with your team to ensure a smooth implementation. The process includes a detailed planning phase, configuration tailored to your business processes, comprehensive training sessions, and ongoing support to ensure a seamless transition and rapid adoption.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <section className="md:py-10 py-10" id="faq">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#F8FAFC] border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
              <CircleHelp className="w-5 h-5 text-[#0A0A0A] mr-2" />
              <span className="text-[#0A0A0A]">FAQs</span>
            </div>
            <h2 className="md:text-6xl text-5xl font-bold">Frequently Asked Questions</h2>
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