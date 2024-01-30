import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from "next/image";
import profile from "../assets/profile.png";
import { Button } from "./ui/button";
import { TypeAnimation } from 'react-type-animation';
import { squence } from "../constants/squence";

const Hero = () => {
  return (
    <div className="flex min-h-screen mb-5">
      <div className="mx-auto">
        <div className="">
          <Image src={profile} alt="profile" width={600} height={100} />
        </div>
        <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold">
          Hi! I'm {""}
          <span className="underline">
          <TypeAnimation
            cursor={true}
            sequence={squence}
            wrapper="span"
            repeat={Infinity}
          />
          </span>
        </h1>
        <p className="mx-auto mt-[40px] mb-[54px] text-[18px] text-center max-w-lg">
          Im a 4th year Information Technology student at the Nueva Ecija of
          Science and Technology. I am a self-taught web developer and I love to
          build websites and web applications.
        </p>
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
