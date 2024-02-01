import React from "react";
import Image from "next/image";
import { Button } from "../pages/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { squence } from "../constants/squence";
import profilesm from "@/assets/profilesm.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center min-h-screen mb-10">
      <div className="grid-span-1 grid-row-2 px-12">
        <div className="mb-5">
          <h1 className="text-5xl font-bold">Hi, I&apos;m JRendel</h1>
          <p className="text-2xl font-light underline">
            
            <TypeAnimation 
            sequence={squence}
            repeat={Infinity}
            speed={70}
            />
          </p>
        </div>
        <div className="flex gap-2 mb-5">
          <Button variant={"outline"} size="lg">
            <a href="#about">About Me</a>
          </Button>
          <Link href="/projects">
            <Button variant={"secondary"} size="lg">
              My Projects
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid-span-1 place-content-end">
      <div className="mb-5">
        <div className="">
          <Image src={profilesm} alt="profile" width={500} height={100} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
