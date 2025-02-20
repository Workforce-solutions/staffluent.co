import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
              <Image
                  src="/img-2.png"
                  alt="Platform Dashboard Preview"
                  width={800}
                  height={400}
                  className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Transform Your Project and<br />
              Team Management Today
            </motion.h2>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#B3B3B3] max-w-3xl mx-auto mb-12"
            >
              Experience how our comprehensive platform streamlines project tracking,
              enhances team collaboration, and provides powerful analytics to drive
              your success. Start optimizing your workflow today.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                  href="https://app.staffluent.co"
                  className="bg-white text-[#1c1c1c] px-8 py-3 rounded-xl hover:bg-white/90 transition-colors"
              >
                Start Now
              </Link>
              <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Request Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;