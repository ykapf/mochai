"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Showcase from "./components/Showcase";

export default function Home() {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <motion.div className="space-y-8 w-full " variants={containerVariants} initial="hidden" animate="show">
        {/* Hero Section */}

        <motion.section variants={itemVariants} className="flex flex-row items-center justify-center w-full">
          <img src="/LOGO.png" alt="logo" className="w-[15vw]  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          <div className="flex flex-col items-center justify-center    ">
            <h1
              className="custom-cursor-clickable ninnaFont   flex items-center justify-center  text-[150px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "
              style={{ fontSize: "8.95vw" }}
            >
              MochAI
            </h1>
            <p
              className="custom-cursor-clickable kaftanFont   flex items-center justify-center  text-[50px] drop-shadow-[0_0.6px_0.6px_rgba(0,0,0,0.4)]"
              style={{ fontSize: "2.5vw" }}
            >
              Sip into the future
            </p>
          </div>
          <img src="/LOGO.png" alt="logo" className="w-[12vw]  invisible" />
        </motion.section>
      </motion.div>
    </div>
  );
}
