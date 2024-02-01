// Import statements for components and constants
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";

// TechStacks component
const TechStacks = () => {
  const stacks = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "NodeJs", icon: <FaNodeJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ];
  return (
    <>
      <div className="px-32 bg-zinc-100 dark:bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mt-10">Techology Stacks</h1>
            <p className="text-sm font-light text-[#3d3d3d]">
              This section contains the technologies that I used in building my
              projects.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 mt-10">
            {stacks.map((stack, index) => (
              <Card key={index} className="wx-auto">
                <CardHeader>
                  <CardTitle>{stack.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  {stack.icon}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStacks;
