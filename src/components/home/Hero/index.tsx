// src/components/home/Hero/index.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                {/* Top Tag */}
                <div className={styles.topTag}>
                    <span>Recruit - Onboard - Manage</span>
                </div>

                {/* Main Heading */}
                <h1 className={styles.mainHeading}>
                    Revolutionize Your HR Management with Cloud-Based Solutions
                </h1>

                {/* Subheading */}
                <p className={styles.subHeading}>
                    The best HR software for SMB companies and startup to manage employee,
                    payroll assistance, time off, attendance tracking with single software
                </p>

                {/* CTA Buttons */}
                <div className={styles.ctaButtons}>
                    <Link href="/get-started" className={styles.primaryButton}>
                        Get started
                    </Link>
                    <Link href="/how-it-works" className={styles.secondaryButton}>
                        <span className={styles.playIcon}>▶</span>
                        How it works
                    </Link>
                </div>

                {/* Dashboard Image */}
                <div className={styles.dashboardImage}>
                    <Image
                        src="/dashboard.png"
                        alt="HR Management Dashboard"
                        width={1080}
                        height={600}
                        priority
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;