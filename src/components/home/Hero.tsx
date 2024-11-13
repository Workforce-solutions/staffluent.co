import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600'>
      <div className='container mx-auto px-4 text-center text-white'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-5xl md:text-7xl font-bold mb-6'
        >
          Welcome to Our Site
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
