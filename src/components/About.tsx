import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Abouts } from "@/constants/About";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const About: React.FC = () => {
  const controls = useAnimation();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutElement = aboutRef.current;

    const handleScroll = () => {
      if (!aboutElement) return;

      const { top } = aboutElement.getBoundingClientRect();

      if (top < window.innerHeight * 0.75) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const handleDownloadCV = () => {
    const path = "/pdf/Resume.pdf";
    window.open(path, "_blank");
  };

  return (
    <div id="about" className="mt-20 py-12" ref={aboutRef}>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Profile Picture Section */}
          <div className="flex justify-center items-center">
            <motion.div
              className="profile-picture-border relative h-48 w-48 md:h-64 md:w-64 overflow-hidden"
              animate={controls}
              initial={{ opacity: 0, y: 100 }}
            >
              <Image
                src="/images/profilesm.png" // Adjust the path to your profile picture
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </motion.div>
          </div>
          {/* About Me Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <motion.div
              className="text-center md:text-left"
              animate={controls}
              initial={{ opacity: 0, y: 100 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xs:text-1xl font-bold mb-4">
                About Me
              </h1>
              <Separator />
              <p className="text-1xl lg:text-lg mt-4">
                {/* Adjusted text size for responsiveness */}
                I&apos;m a 4th year Information Technology student at the&nbsp;
                <Link href="https://neust.edu.ph" target="_blank">
                  <span className="underline font-bold text-red-400">
                    Nueva Ecija of Science and Technology.
                  </span>
                </Link>{" "}
                I am a self-taught web developer and I love to build websites
                and web applications.
              </p>
              <div className="mt-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  Personal Information
                </h2>{" "}
                {/* Adjusted text size for responsiveness */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {" "}
                  {/* Changed to single column for small screens */}
                  <div>
                    <p className="font-bold">Name:</p>
                    <p className="text-sm md:text-base">{Abouts.Name}</p>
                  </div>
                  <div>
                    <p className="font-bold">Age:</p>
                    <p className="text-sm md:text-base">{Abouts.Age}</p>
                  </div>
                  <div>
                    <p className="font-bold">Address:</p>
                    <p className="text-sm md:text-base">{Abouts.Location}</p>
                  </div>
                  <div>
                    <p className="font-bold">Email:</p>
                    <p className="text-sm md:text-base">{Abouts.Email}</p>
                  </div>
                  <div>
                    <p className="font-bold">Phone:</p>
                    <p className="text-sm md:text-base">{Abouts.Phone}</p>
                  </div>
                  <div>
                    <p className="font-bold">Degree:</p>
                    <p className="text-sm md:text-base">{Abouts.Degree}</p>
                  </div>
                  <div>
                    <p className="font-bold">School:</p>
                    <p className="text-sm md:text-base">{Abouts.School}</p>
                  </div>
                  <div>
                    <p className="font-bold">Major:</p>
                    <p className="text-sm md:text-base">{Abouts.Major}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="download" onClick={handleDownloadCV}>
                  Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
