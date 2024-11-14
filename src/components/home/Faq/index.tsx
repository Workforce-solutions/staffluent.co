// src/components/home/FAQ/index.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './Faq.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What pricing plans do your SaaS product?",
        answer: "We offer flexible pricing plans tailored to meet the need of different business. our pricing included monthly and annual subscription options. you can find detailed information about each plan on our pricing"
    },
    {
        question: "Does your SaaS product integrate with other tools we use?",
        answer: "Yes, our platform integrates seamlessly with many popular business tools and software. We support integration with major CRM systems, accounting software, and productivity tools."
    },
    {
        question: "Can I upgrade or downgrade my plan at any time?",
        answer: "Yes, you can easily upgrade or downgrade your subscription plan at any time through your account settings. Changes will be reflected in your next billing cycle."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial that gives you full access to all features. No credit card required to start your trial."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>
                        we have put together same commonly asked question
                    </p>
                </div>

                {/* FAQ Items */}
                <div className={styles.faqContainer}>
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={styles.faqItem}
                        >
                            <button
                                className={`${styles.questionButton} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <div className={styles.icon}>
                                    {activeIndex === index ? (
                                        <Minus size={20} />
                                    ) : (
                                        <Plus size={20} />
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;