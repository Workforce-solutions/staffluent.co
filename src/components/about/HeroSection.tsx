import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from './index.module.css';

const HeroSection = () => {
  return (
    <div className="bg-[#1E293B]">
      <section className="max-w-[1200px] px-[20px] mx-auto text-white py-16 px-4">
        <div className="mx-auto text-center">
          <motion.div
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.6}}
              className="mb-12"
          >
            <Image
                src="/img-2.png"
                alt="Platform Dashboard Preview"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
                width={800}
                height={400}
            />
          </motion.div>
          <motion.h1
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.2}}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Transform Your Project and<br/>
            Team Management Today
          </motion.h1>

          <motion.p
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.3}}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Experience how our comprehensive platform streamlines project tracking,
            enhances team collaboration, and provides powerful analytics to drive
            your success. Start optimizing your workflow today.
          </motion.p>
          <motion.div
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.4}}
              className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <div className={`${styles.ctaButtons}`}>
              <Link href="https://app.staffluent.co" className={`${styles.primaryButton}`}>
                Start Now
              </Link>
              <Link href="/contact" className={`${styles.secondaryButton}`}>
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
