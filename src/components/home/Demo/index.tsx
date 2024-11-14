// src/components/home/Demo/index.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './Demo.module.css';

const Demo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
        // Add your video playing logic here
    };

    return (
        <section className={styles.demoSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Side - Dashboard Preview */}
                    <div className={styles.dashboardPreview}>
                        <div className={styles.dashboardWrapper}>
                            <Image
                                src="/dashboard-preview.png"
                                alt="HR Dashboard Preview"
                                width={720}
                                height={480}
                                className={styles.dashboardImage}
                            />
                            <button
                                className={styles.playButton}
                                onClick={handlePlayClick}
                                aria-label="Play demo video"
                            >
                                <div className={styles.playIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={styles.textContent}>
                        <span className={styles.label}>Product</span>
                        <h2 className={styles.title}>
                            See Our Cloud HR Solution In Action
                        </h2>
                        <p className={styles.description}>
                            The best HR software for SMB companies and startup to manage employee,
                            payroll assistance, time off, attendance tracking with single software
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;