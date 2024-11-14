import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-[#1E293B]">
      <section className="max-w-[1200px] px-[20px] mx-auto text-white py-16 px-4">
        <div className="mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Unlock the Power of Cloud HR <br />
            Solutions Today!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Sign up now for a free trial and discover how our cloud HR solutions
            can revolutionize the way you manage your workforce. Say goodbye to
            manual processes and hello to seamless efficiency!
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-[#1A64B7] hover:bg-[#1A64B7] rounded-full text-lg font-medium transition-colors duration-200">
              Get started
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-[#1A64B7] rounded-full text-lg font-medium transition-colors duration-200">
              Request Demo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
