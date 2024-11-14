// src/components/home/Mission/index.tsx
"use client";
import { motion } from 'framer-motion';
import styles from './Mission.module.css';

const stats = [
    {
        number: "50M+",
        label: "Global users"
    },
    {
        number: "$100M+",
        label: "Capital raised"
    },
    {
        number: "40%",
        label: "Fast work"
    },
    {
        number: "100+",
        label: "Support team"
    }
];

const Mission = () => {
    return (
        <section className={styles.missionSection}>
            <div className={styles.container}>
                {/* Mission Statement */}
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Mission Is To Help Easy<br />
                    Organize Your Employee
                </motion.h2>

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