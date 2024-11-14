// src/components/home/CTA/index.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

const CTA = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={`flex`}>
                    {/* Left side - Text and Buttons */}
                    <div className={`${styles.textContent} w-3/5`}>
                        <motion.h2
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Unlock The Power Of Cloud HR Solutions Today!
                        </motion.h2>

                        <motion.p
                            className={`tracking-wider text-slate-200 text-lg`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Sign up now for a free trial and discover how our cloud HR solutions
                            can revolutionize the way you manage your workforce. Say goodbye
                            to manual processes and hello to seamless efficiency!
                        </motion.p>

                        {/* <motion.div
                            className={styles.buttonGroup}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Link href="/get-started" className={styles.primaryButton}>
                                Get started
                            </Link>
                            <Link href="/demo" className={styles.secondaryButton}>
                                Request Demo
                            </Link>
                        </motion.div> */}
                    </div>

                    {/* Right side - Dashboard Image */}
                    <div
                        className={`w-2/5 flex justify-center items-center`}
                        // initial={{ opacity: 0, x: 20 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        // transition={{ duration: 0.8 }}
                    >
                        <div className={`${styles.ctaButtons} flex gap-5`}>
                            <Link href="/get-started" className={`${styles.primaryButton} bg-[#7C3AED!important] rounded-[60px!important]`}>
                                Get started
                            </Link>
                            <Link href="/how-it-works" className={`${styles.secondaryButton} bg-[white!important] text-[#7C3AED!important] border border-[#7C3AED!important] rounded-[60px!important]`}>
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