// src/components/home/Features/index.tsx
"use client";
import Image from "next/image";
import {
  Users,
  Clock,
  LayoutPanelTop,
  BarChart,
  UserCog,
  MessageSquare,
  FileSpreadsheet,
  Settings,
} from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    icon: <Users className={styles.icon} />,
    title: "Workforce Management",
    description:
      "Complete employee profiles, department management, and role-based permissions with performance tracking",
  },
  {
    icon: <Clock className={styles.icon} />,
    title: "Time & Attendance",
    description:
      "Real-time attendance tracking, break management, and automated time monitoring",
  },
  {
    icon: <LayoutPanelTop className={styles.icon} />,
    title: "Project Management",
    description:
      "Comprehensive project tracking with tasks, quality inspections, and work order management",
  },
  {
    icon: <BarChart className={styles.icon} />,
    title: "Performance Analytics",
    description:
      "Track productivity, analyze trends, and identify top performers with detailed metrics",
  },
  {
    icon: <UserCog className={styles.icon} />,
    title: "Client Portal",
    description:
      "Service requests, invoicing, and real-time project tracking for clients",
  },
  {
    icon: <MessageSquare className={styles.icon} />,
    title: "Team Collaboration",
    description:
      "Internal chat, team messaging, and integrated project communications",
  },
];

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Side - Text and Features */}
          <div className={styles.leftContent}>
            <span className={styles.label}>Platform Features</span>
            <h2 className={`${styles.title} text-5xl`}>
              Comprehensive Project & Team Management Platform
            </h2>
            <p className={`${styles.description} text-xl tracking-wider`}>
              All-in-one solution for project tracking, team collaboration, and
              performance management with powerful analytics
            </p>

            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-24`}
            >
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.iconWrapper}>{feature.icon}</div>
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
              src="/img-3.png"
              alt="Platform Dashboard"
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
