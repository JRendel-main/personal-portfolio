import React from "react";
import Image from "next/image";
import profile from "../assets/profile.png";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Abouts } from "@/constants/About";
import Link from "next/link";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <Image src={profile} alt="profile" width={1000} height={500} />
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
              <div className="mt-5 flex justify-content">
                <h1 className="text-2m font-bold">Name: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp;{Abouts.Name}</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Age: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp;{Abouts.Age}</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Address: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp;{Abouts.Location}</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Email: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp; {Abouts.Email}</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Phone: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp; {Abouts.Phone}</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Degree: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp;{Abouts.Degree}</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">School: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp; {Abouts.School}</h1>
              </div>
              <div className="mt-5 flex flex-row">
                <h1 className="text-2m font-bold">Major: &nbsp;</h1>
                <h1 className="text-2m font-light">&nbsp; {Abouts.Major}</h1>
              </div>
              <div className="mt-10 flex flex-row">
                <h1 className="5xl font-bold">25</h1>&nbsp; 
                <p>Projects Completed</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Button variant="download">Download CV</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
