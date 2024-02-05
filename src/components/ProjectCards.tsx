import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

interface ProjectCardsProps {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
  projectDemo: string;
  projectTags: string[];
  projectType: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  projectName,
  projectDescription,
  projectImage,
  projectLink,
  projectDemo,
  projectTags,
  projectType
}) => {
  return (
    <div className="flex flex-col items-center my-6">
      <Card className="h-[530px] bg-opacity-75 overflow-hidden hover:shadow-md hover:shadow-purple-800 hover:scale-110 transition-all duration-700">
        <CardHeader className="bg-opacity-100">
          <h1 className="text-left text-sm font-small">
            {projectType === "Full Stack" ? (
              <Badge variant={"full_stack"}>Full Stack</Badge>
            ) : projectType === "Frontend" ? (
              <Badge variant={"frontend"}>Frontend</Badge>
            ) : (
              <Badge variant={"backend"}>Backend</Badge>
            
            )}
          </h1>
          <Image src={`/images/${projectImage}`} alt="project" width={350} height={200} />
        </CardHeader>
        <CardContent>
          <CardTitle className="mt-2 text-l">{projectName}</CardTitle>
          <CardDescription className="mt-2 text-sm">{projectDescription}</CardDescription>
        </CardContent>
        <CardFooter className="grid grid-rows-2 justify-center bg-opacity-100">
          <div className="grid justify-center gap-5">
            <Link href={projectLink}>
              <Button variant={"secondary"}>
                <SiGithub className="text-2xl" />&nbsp;Github
              </Button>
            </Link>
          </div>
          <div className="flex gap-3 justify-between mt-5">
            {projectTags.map((tag, index) => (
              <Badge key={index} variant={"tech_badge"}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCards;
