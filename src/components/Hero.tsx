import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import profilesm from "@/assets/profilesm.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero py-24 xs:py-7 sm:py-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold xs:text-s xs:text-center">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg md:text-xl mb-8 xs:text-center mt-3 text-blue-400">
              I&apos;m a passionate web developer with a focus on creating
              user-friendly, responsive web applications.
            </p>
            <div className="mb-8 flex justify-start xs:justify-center sm:justify-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                I&apos;m skilled in:
              </h1>
              <TypeAnimation
                cursor={false}
                sequence={[
                  "React JS",
                  3000,
                  "Next JS",
                  3000,
                  "Node JS",
                  3000,
                  "PHP",
                  3000,
                ]}
                wrapper="h1"
                repeat={Infinity}
                className="text-2xl font-bold underline"
              />
            </div>
            <div className="flex flex-col xs:flex-row justify-start items-center gap-3 xs:justify-center sm:justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button>View Projects</Button>
              </Link>
            </div>
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          >
            <div className="profile-picture-border">
              <Image src={profilesm} alt="Profile" width={350} height={350} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
