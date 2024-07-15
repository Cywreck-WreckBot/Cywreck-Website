"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="bg-black border-t border-neutral-700 w-full text-white py-6 px-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-800">
              CyWreck
            </h2>
            <p className="text-neutral-400 mt-2">
              © 2024 CyWreck. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8">
            <Link href="https://cywreck.in/"
              className="text-neutral-400 hover:text-blue-400 transition duration-200">Home
            </Link>
            <Link href="/"
              className="text-neutral-400 hover:text-blue-400 transition duration-200">VCISO
            </Link>
            <Link href="https://blog.cywreck.in/"
               className="text-neutral-400 hover:text-blue-400 transition duration-200">Blogs
            </Link>
            <Link href="#features"
              className="text-neutral-400 hover:text-blue-400 transition duration-200">Features
            </Link>
            <Link href="https://calendly.com/utkrist/"
              className="text-neutral-400 hover:text-blue-400 transition duration-200">Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
