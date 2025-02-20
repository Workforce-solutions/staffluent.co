import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
              <div className="relative">
                <Image
                    src="home-banner.png"
                    alt="Staffluent Web App Preview"
                    width={800}
                    height={400}
                    className="w-full rounded-2xl shadow-lg border border-[#DEE5ED]"
                />
                {/* Optional overlay gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#F8FAFC]/20 to-transparent" />
              </div>
            </motion.div>

            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6"
            >
              Transform Your Project and<br />
              Team Management Today
            </motion.h2>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#3d495b] max-w-3xl mx-auto mb-12 text-lg"
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
                  className="bg-[#0A0A0A] text-white px-8 py-3 rounded-xl hover:bg-[#0A0A0A]/90 transition-colors"
              >
                Start Now
              </Link>
              <Link
                  href="/request-demo"
                  className="border border-[#0A0A0A] text-[#0A0A0A] px-8 py-3 rounded-xl hover:bg-[#0A0A0A]/5 transition-colors"
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