import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import profilesm from "@/assets/profilesm.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero py-24 xs:py-7 sm:py-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row md:flex-row xl:flex-row items-center justify-between ">
          <div className="md:w-1/2 text-center md:text-left lg:text-left">
            <h1 className="text-2xl font-bold lg:text-5xl">
              Hey there 👋 I&apos;m&nbsp;
              <br />
              <span className="text-3xl font-bold underline lg:text-5xl">
                John Rendel
              </span>
            </h1>
            <p className="text-md font-light mt-5 italic lg:text-lg">
              I&apos;m a passionate web developer, freelancer, and student. I
              love to build websites and web applications that are both
              beautiful and functional.
            </p>
            <h2 className="text-xl font-light mt-5 lg:text-2xl">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Freelancer",
                  2000,
                  "Student",
                  2000,
                ]}
                repeat={Infinity}
              />
            </h2>
            <div className="flex justify-center gap-5 md:justify-start mt-8">
              <Link href="/contact">
                <Button variant={"secondary"}>Contact Me</Button>
              </Link>
              <Link href="/projects">
                <Button variant={"download"}>Projects</Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 mt-5 justify-center lg:justify-start">
              {/* Icons */}
              <Link href="">
                <FaGithub size={"40"} />
              </Link>
              <Link href="#">
                <FaFacebook size={"40"} />
              </Link>
              <Link href="#">
                <FaLinkedin size={"40"} />
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:w-1/2 mb-8 flex justify-center"
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
