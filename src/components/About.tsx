import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Abouts } from "@/constants/About";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-48 h-48">
              <Image
                src={"/images/profilesm.png"}
                alt="profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <Separator />
              <p className="text-lg mt-4">
                I&apos;m a 4th year Information Technology student at the&nbsp;
                <Link href="https://neust.edu.ph" target="_blank">
                  <span className="underline font-bold">
                    Nueva Ecija of Science and Technology.
                  </span>
                </Link>{" "}
                I am a self-taught web developer and I love to build websites
                and web applications.
              </p>
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold">Name:</p>
                    <p>{Abouts.Name}</p>
                  </div>
                  <div>
                    <p className="font-bold">Age:</p>
                    <p>{Abouts.Age}</p>
                  </div>
                  <div>
                    <p className="font-bold">Address:</p>
                    <p>{Abouts.Location}</p>
                  </div>
                  <div>
                    <p className="font-bold">Email:</p>
                    <p>{Abouts.Email}</p>
                  </div>
                  <div>
                    <p className="font-bold">Phone:</p>
                    <p>{Abouts.Phone}</p>
                  </div>
                  <div>
                    <p className="font-bold">Degree:</p>
                    <p>{Abouts.Degree}</p>
                  </div>
                  <div>
                    <p className="font-bold">School:</p>
                    <p>{Abouts.School}</p>
                  </div>
                  <div>
                    <p className="font-bold">Major:</p>
                    <p>{Abouts.Major}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Projects</h2>
                <div className="flex items-center">
                  <h1 className="text-5xl font-bold mr-2">25</h1>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="mt-8">
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
