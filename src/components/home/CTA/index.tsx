// src/components/home/CTA/ContactForm.tsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Cta.module.css';

const CTA = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={`flex flex-col lg:flex-row`}>
                    {/* Left side - Text and Value Proposition */}
                    <div className={`${styles.textContent} lg:w-3/5 mb-4 lg:mb-0`}>
                        <motion.h2
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Streamline Your Project and Team Management
                        </motion.h2>

                        <motion.p
                            className={`tracking-wider text-slate-200 text-sm lg:text-lg`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Join companies that have revolutionized their workflow with our comprehensive
                            platform. From project tracking to team collaboration, performance analytics
                            to client management - everything you need in one powerful solution.
                        </motion.p>
                    </div>

                    {/* Right side - Action Buttons */}
                    <div className={`lg:w-2/5 flex justify-center items-center h-auto`}>
                        <div className={`${styles.ctaButtons}`}>
                            <Link href="https://app.staffluent.co" className={`${styles.primaryButton}`}>
                                Start Now
                            </Link>
                            <Link href="/contact" className={`${styles.secondaryButton}`}>
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;