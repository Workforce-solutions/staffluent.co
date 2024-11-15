// src/components/home/Mission/ContactForm.tsx
"use client";
import { motion } from "framer-motion";
import styles from "./Mission.module.css";

const stats = [
  {
    number: "10+",
    label: "Management Features",
  },
  {
    number: "100%",
    label: "Real-time Tracking",
  },
  {
    number: "24/7",
    label: "Project Monitoring",
  },
  {
    number: "360°",
    label: "Team Overview",
  },
];

const Mission = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        {/* Mission Statement */}
        <div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Streamline Your Project and Team Management
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive platform for project tracking, team collaboration, and
            performance analytics
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
