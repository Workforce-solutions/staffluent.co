// src/components/home/Demo/ContactForm.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Demo.module.css";

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
                src="/img-2.png"
                alt="Platform Dashboard Preview"
                width={800}
                height={500}
                className={styles.dashboardImage}
              />
              <button
                className={styles.playButton}
                onClick={handlePlayClick}
                aria-label="Play demo video"
              >
                <div className={styles.playIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={styles.textContent}>
            <span className={`${styles.label} font-medium`}>
              Platform Overview
            </span>
            <h2 className={styles.title}>
              See Our Project Management Platform In Action
            </h2>
            <p className={styles.description}>
              Experience how our platform streamlines project tracking, team
              collaboration, and performance monitoring. From real-time
              analytics to comprehensive project management, see how everything
              works together in one integrated solution.
            </p>
            {/* <ul className={styles.featureList}>
              <li>✓ Project & Task Management</li>
              <li>✓ Team Collaboration Tools</li>
              <li>✓ Real-time Performance Analytics</li>
              <li>✓ Client Portal Integration</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
