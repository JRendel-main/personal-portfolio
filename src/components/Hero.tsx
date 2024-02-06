'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import profilesm from "@/assets/profilesm.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg mb-8">
              I&apos;m a passionate web developer with a focus on creating
              user-friendly, responsive web applications.
            </p>
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">I&apos;m skilled in:</h1>
              <TypeAnimation
                cursor={false}
                sequence={["React JS", 3000, "Next JS", 3000, "Node JS", 3000, "PHP", 3000]}
                wrapper="h1"
                wrapperStyle={{ display: "inline" }}
                repeat={Infinity}
                speed={200}
              />
            </div>
            <Link href="/projects">
              <Button>View Projects</Button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="profile-picture-border">
              <Image src={profilesm} alt="Profile" width={350} height={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
