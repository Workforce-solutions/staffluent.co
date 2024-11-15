"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                {/* Top Tag */}
                <div className={`${styles.topTag} text-2xl font-semibold`}>
                    <span>Coordinate - Schedule - Empower</span>
                </div>

                {/* Main Heading */}
                <h1 className={`${styles.mainHeading} text-7xl`}>
                    Elevate Your Staff Management with Cloud-Based Solutions
                </h1>

                {/* Subheading */}
                <p className={styles.subHeading}>
                    The ultimate staff management software for small businesses and startups to streamline employee tracking,
                    shift scheduling, time-off requests, and attendance—all in one unified platform.
                </p>

                {/* CTA Buttons */}
                <div className={styles.ctaButtons}>
                    <Link href="/contact" className={styles.primaryButton}>
                        Get started
                    </Link>
                    <Link href="#" className={styles.secondaryButton}>
                        <span className={styles.playIcon}>▶</span>
                        How it works
                    </Link>
                </div>

                {/* Dashboard Image */}
                <div className={styles.dashboardImage}>
                    <Image
                        src="/img-1.png"
                        alt="HR Management Dashboard"
                        width={800} // Replace with your image's width
                        height={500} // Replace with your image's height
                        className={styles.image}
                        priority // Optionally, load this image with higher priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
