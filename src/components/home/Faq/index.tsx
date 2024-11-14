// src/components/home/FAQ/index.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './Faq.module.css';

interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

const faqData: FAQItem[] = [
    {
        question: "What makes your platform different from other project management tools?",
        answer: "Our platform uniquely combines project management, time tracking, and team collaboration in one integrated solution. We offer advanced features like real-time performance analytics, automated time tracking, and comprehensive client portal - all designed to work seamlessly together to enhance your team's productivity.",
        category: "General"
    },
    {
        question: "How does the project tracking system work?",
        answer: "Our project tracking system provides real-time visibility into project progress, task management, and team performance. You can easily assign tasks, monitor deadlines, track time spent, and generate detailed reports. Plus, our quality control tools and issue tracking ensure nothing falls through the cracks.",
        category: "Features"
    },
    {
        question: "What type of analytics and reporting features do you offer?",
        answer: "We provide comprehensive analytics including real-time performance metrics, productivity trends, team performance tracking, and custom report generation. You can track project progress, monitor time utilization, analyze team productivity, and generate insights that help optimize your operations.",
        category: "Features"
    },
    {
        question: "How do you handle data security and privacy?",
        answer: "Security is our top priority. We implement industry-standard encryption, regular security audits, and strict access controls. Your data is backed up regularly, and we comply with major data protection regulations to ensure your information stays safe and confidential.",
        category: "Security"
    },
    {
        question: "What services can I manage through the platform?",
        answer: "Our platform helps you manage a wide range of business services including app development, project management, quality assurance, and technical support. You can organize services by categories, handle service requests, manage approvals, and track delivery - all in one place."
    },
    {
        question: "What kind of support do you provide?",
        answer: "We offer comprehensive 24/7 customer support through multiple channels including live chat, email, and phone. Our support team is highly trained and can assist with technical issues, feature questions, and best practice recommendations. We also provide detailed documentation and video tutorials.",
        category: "Support"
    },
    {
        question: "What services can I manage through the platform?",
        answer: "Our platform helps you manage a wide range of business services including app development, project management, quality assurance, and technical support. You can organize services by categories, handle service requests, manage approvals, and track delivery - all in one place."
    },
    {
        question: "How does the client portal work?",
        answer: "Clients get their own dedicated portal where they can submit service requests, track project progress, communicate with teams, and access project galleries. It provides full transparency and easy collaboration between your team and clients."
    },
    {
        question: "What project management features are included?",
        answer: "Our comprehensive project tracking includes task management, team collaboration, quality control, work orders, and real-time progress monitoring. Managers can oversee everything from task assignments to quality inspections in one unified system."
    },
    {
        question: "How does the team collaboration system work?",
        answer: "Teams can collaborate through internal chat, project comments, task discussions, and a smart notification system. Project managers can coordinate with team members and clients efficiently while maintaining clear communication channels."
    },
    {
        question: "What kind of performance tracking do you offer?",
        answer: "Track productivity, time utilization, department performance, and generate custom reports. Get insights into team efficiency, project progress, and operational metrics through detailed analytics dashboards."
    },

];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Common Questions About Our Platform</h2>
                    <p className={styles.subtitle}>
                        Get quick answers to your questions about features, pricing, and support
                    </p>
                </div>

                {/* FAQ Items */}
                <div className={styles.faqContainer}>
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={styles.faqItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className={`${styles.questionButton} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <div className={styles.icon}>
                                    {activeIndex === index ? (
                                        <Minus className={styles.iconInner} size={20} />
                                    ) : (
                                        <Plus className={styles.iconInner} size={20} />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={styles.answerContainer}
                                    >
                                        <p className={styles.answer}>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;