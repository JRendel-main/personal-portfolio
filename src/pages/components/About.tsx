import React from "react";
import Image from "next/image";
import profile from "../assets/profile.png";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <Image src={profile} alt="profile" width={800} height={500} />
          </div>
          <div className="col-span-8">
            <div className="flex flex-col justify-center h-full">
              <div>
                <h1 className="text-5xl font-bold">About Me: </h1>
              </div>
              <Separator />
              <p className="text-[18px] mt-5">
                Im a 4th year Information Technology student at the&nbsp;
                <Link href="https://neust.edu.ph" target="_blank">
                  <span className="underline font-bold">
                    Nueva Ecija of Science and Technology.
                  </span>
                </Link>{" "}
                I am a self-taught web developer and I love to build websites
                and web applications.
              </p>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Name: &nbsp;</h1>
                <h1 className="text-2m font-light">
                  &nbsp;John Rendel San Luis
                </h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Age: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp;22</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Location: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp;Philippines</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Email: &nbsp;</h1>
                <h1 className="text-2m font-light">
                  &nbsp; sanluisjohnrendel87@gmail.com
                </h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Phone: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp;+639 35 402 7524</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Degree: &nbsp;</h1>
                <h1 className="text-2m font-light">
                  &nbsp;Bachelor of Science in Information Technology
                </h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">School: &nbsp;</h1>
                <h1 className="text-2m font-light">
                  &nbsp;Nueva Ecija University of Science and Technology
                </h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Major: &nbsp;</h1>
                <h1 className="text-2m font-light">
                  &nbsp;Database Systems Technologies
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
