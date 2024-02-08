import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Abouts } from "@/constants/About";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="mt-20 py-12">
      <div className="mx-auto px-12">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="col-span-12 xs:col-span-1 md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 xs:hidden sm:hidden">
              <Image
                src={"/images/profilesm.png"}
                alt="profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="col-span-12 xs:col-span-1 md:col-span-8">
            <div className="text-center md:text-left xs:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xs:text-1xl font-bold mb-4">About Me</h1> {/* Adjusted text size for responsiveness */}
              <Separator />
              <p className="text-lg md:text-xl lg:text-2xl mt-4"> {/* Adjusted text size for responsiveness */}
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Personal Information</h2> {/* Adjusted text size for responsiveness */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Changed to single column for small screens */}
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Projects</h2> {/* Adjusted text size for responsiveness */}
                <div className="flex items-center">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mr-2">25</h1> {/* Adjusted text size for responsiveness */}
                  <p className="text-sm md:text-base lg:text-lg">Projects Completed</p> {/* Adjusted text size for responsiveness */}
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
