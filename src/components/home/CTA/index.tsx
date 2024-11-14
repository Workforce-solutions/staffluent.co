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
                <div className={styles.content}>
                    {/* Left side - Text and Buttons */}
                    <div className={styles.textContent}>
                        <motion.h2
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Unlock The Power Of Cloud HR Solutions Today!
                        </motion.h2>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Sign up now for a free trial and discover how our cloud HR solutions
                            can revolutionize the way you manage your workforce. Say goodbye
                            to manual processes and hello to seamless efficiency!
                        </motion.p>

                        <motion.div
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
                        </motion.div>
                    </div>

                    {/* Right side - Dashboard Image */}
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/dashboard-preview.png"
                            alt="HR Dashboard Preview"
                            width={600}
                            height={400}
                            className={styles.dashboardImage}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;