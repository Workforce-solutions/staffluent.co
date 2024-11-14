// src/components/home/Features/index.tsx
"use client";
import Image from 'next/image';
import { Archive, Shield, Layout, UserCheck } from 'lucide-react';
import styles from './Features.module.css';

const features = [
    {
        icon: <UserCheck className={styles.icon} />,
        title: "Faster Recruitment",
        description: "Automate recruitment and candidate screening to save your time and effort"
    },
    {
        icon: <Archive className={styles.icon} />,
        title: "Clean Archive",
        description: "Plan and manage training programs to maximize your employees' potential."
    },
    {
        icon: <Layout className={styles.icon} />,
        title: "Easy to manage",
        description: "Track employee data, performance evaluations, and task assignments"
    },
    {
        icon: <Shield className={styles.icon} />,
        title: "Data Security",
        description: "Protect your sensitive employee data with advanced security"
    }
];

const Features = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Side - Text and Features */}
                    <div className={styles.leftContent}>
                        <span className={styles.label}>Our Core Features</span>
                        <h2 className={styles.title}>
                            We Make It Effortlessly To Track All Employee Performance
                        </h2>
                        <p className={styles.description}>
                            Self service data analytic software that lets you create visually
                            appealing data visualizations and insightful dashboard in minutes
                        </p>

                        <div className={styles.featuresGrid}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.featureCard}>
                                    <div className={styles.iconWrapper}>
                                        {feature.icon}
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/features-image.jpg"
                            alt="Employee Performance Tracking"
                            width={600}
                            height={800}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;