"use client";
import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Hero() {
  return (
    <div className="md:min-h-screen max-sm:mb-8 w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-72 md:-top-20"
            fill="blue"
        />
        <Spotlight
            className="-top-40 left-0 md:left-full md:-top-10"
            fill="purple"
        />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 space-y-6">
        <TextGenerateEffect className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" words="Get a Virtual CISO at half the cost" delay={0.2} />
        <TextGenerateEffect className="mt-4 font-normal text-2xl text-neutral-300 w-full lg:w-[75%] text-center mx-auto leading-8" words="As CyWreck, we prioritize cost control and robust security. With your own V-CISO, you can achieve both effortlessly!" delay={0.12}/>
      </div>
      <motion.div 
        className="flex justify-center items-center gap-8 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <Link href="https://calendly.com/utkrist/">
            <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Get Started
                </span>
            </button>
        </Link>
        <Link href="#features">
          <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-gradient-to-b from-neutral-50 to-neutral-400 hover:bg-gray-100 transition duration-200">
              Learn More
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
