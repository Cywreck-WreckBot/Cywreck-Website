"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { useRef, useEffect } from 'react';
import { delay, motion, useAnimation, useInView } from 'framer-motion';
export default function Features() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1 });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
  return (
    <div id="features" className="w-full md:w-[80%] flex flex-col justify-center items-center px-8 min-h-screen">
        <div className="p-4 max-sm:px-0 mx-auto relative z-10 w-full pt-20 md:pt-0 space-y-6" ref={ref}>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
                }}
                className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
            >
                Trust CyWreck for unbeatable cybersecurity and seamless compliance
            </motion.div>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay:0.5 } }
                }}
                className="mt-4 font-normal text-2xl text-neutral-300 w-full text-center mx-auto leading-8"
            >
                Prevent cyberattacks from crippling your business with CyWreck&apos;s Virtual CISO. Get expert security leadership instantly without the full-time cost. Rest easy knowing your data and reputation are protected against evolving threats
            </motion.div>
        </div>
        <motion.div
            className="mb-20"
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay:1.2 } }
            }}
        >
            <HoverEffect items={projects} />
        </motion.div>
    </div>
  );
}
export const projects = [
    {
        "title": "Virtual CISO",
        "description": "Expert security leadership on demand. Protect your business without the full-time expense.",
        "link": "/"
    },
    {
    "title": "Advanced Threat Protection",
    "description": "Stay ahead of cyber threats with cutting-edge technology and proactive defense strategies.",
    "link": "/"
    },
    {
    "title": "Compliance Management",
    "description": "Ensure your business meets all regulatory requirements with our comprehensive compliance solutions.",
    "link": "/"
    } 
];
