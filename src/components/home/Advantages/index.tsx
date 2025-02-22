import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Advantages = () => {
  const features = [
    {
      title: "Smart Tasking",
      icon: "sh29Ss025KGjtLmfxytiazc4EeI.svg",
    },
    {
      title: "Automated Scheduling",
      icon: "6Hl73G12BPhpBSE40pGQMArkw.svg",
    },
    {
      title: "AI-Powered Reminders",
      icon: "l8Yny4qzAGaJpmBlbw4y3IqqZw.svg",
    },
    {
      title: "Predictive Analytics",
      icon: "484M7kHBnbIGJMAnW6e3OEVKI.svg",
    },
  ];

  const aiFeatures = [
    {
      title: "Task Management",
      icon: "STx7MhL1G8tv8zPZeZrABlyiHKk.svg",
    },
    {
      title: "Collaboration Tools",
      icon: "2Fp6sHUU5gChe0qVJmJOhelkL9w.svg",
    },
    {
      title: "Deadline Alerts",
      icon: "0Q35L936tMwlGlWJJjIfRZ5UQ.svg",
    },
    {
      title: "Real-Time Sync",
      icon: "Ol4qxoj2cnkGeNq0wLZxMJYI.svg",
    },
    {
      title: "Prioritization",
      icon: "wV6LymmM5xeoIkKwXvy92GrPtM.svg",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* First Advantage Section */}
      <section className="py-10 md:py-16" id="advantage">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.h2
              className="text-4xl md:text-6xl leading-tight font-bold"
              variants={fadeInUp}
            >
              Why Choose Staffluent
            </motion.h2>

            <motion.div
              className="flex flex-col md:flex-row flex-wrap gap-4 max-w-lg mx-auto md:mx-0"
              variants={container}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-xl p-2 flex items-center justify-center gap-3"
                >
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="text-white"
                    />
                  </div>
                  <span className="text-[#333333] text-sm md:text-base">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                href="/request-demo"
                className="inline-block bg-[#0A0A0A] text-white px-4 py-3 rounded-xl hover:bg-black/90 transition-colors text-center w-full md:w-auto"
              >
                Start Free Trial
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative rounded-3xl border border-[#DEE5ED] overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="advantage-staffluent-1.png"
              alt="Staffluent - Centered Intelligence"
              width={575}
              height={530}
            />
          </motion.div>
        </div>
      </section>

      {/* Second Advantage Section */}
      <section className="py-12 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl border border-[#DEE5ED] overflow-hidden">
              <Image
                src="advantage-staffluent-2.png"
                alt="Staffluent - Centered Intelligence"
                width={600}
                height={450}
              />
            </div>
            <Image
              src="DJaenqiURD5xYuKBLs68FRtHMB4.svg"
              alt="Staffluent - Centered Intelligence"
              width={120}
              height={80}
              className="absolute -right-16 top-3/4 -translate-y-1/2 hidden md:block"
            />
          </motion.div>

          <motion.div
            className="space-y-8 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-6xl leading-tight font-bold"
                variants={fadeInUp}
              >
                Explore Staffluent AI-Enhanced Features
              </motion.h2>
              <motion.p
                className="text-[#3d495b] text-base md:text-lg"
                variants={fadeInUp}
              >
                Discover how AI streamlines tasks, predicts needs, and boosts
                productivity effortlessly.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3"
              variants={container}
            >
              {aiFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-full py-2 px-3 md:px-4 flex items-center gap-2"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={16}
                    height={16}
                    className="md:w-5 md:h-5"
                  />
                  <span className="text-sm md:text-base">{feature.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Advantages;
