import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from "next/image";
import profile from "../assets/profile.png";
import { Button } from "./ui/button";
import { TypeAnimation } from 'react-type-animation';
import { squence } from "../constants/squence";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex min-h-screen mb-5">
      <div className="mx-auto">
        <div className="">
          <Image src={profile} alt="profile" width={600} height={100} />
        </div>
        <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold">
            Hi! I&apos;m {""}
          <span className="underline">
          <TypeAnimation
            cursor={true}
            sequence={squence}
            wrapper="span"
            speed={200}
            repeat={Infinity}
          />
          </span>
        </h1>
        <div className="flex justify-center gap-5">
          <Button variant={"link"}>
            <FaGithub size={40} />
          </Button>
          <Button variant={"link"}>
            <FaLinkedin size={40} /> 
          </Button>
          <Button variant={"link"}>
            <FaFacebook size={40} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
