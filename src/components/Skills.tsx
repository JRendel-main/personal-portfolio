import React, { useEffect, useRef } from "react";
import SkillCards from "@/components/SkillCards";

const skillSet = [
  {
    skillName: "HTML5",
    skillImage: "html5",
  },
  {
    skillName: "Javascript",
    skillImage: "javascript",
  },
  {
    skillName: "React JS",
    skillImage: "react",
  },
  {
    skillName: "Next JS",
    skillImage: "next",
  },
  {
    skillName: "Boostrap",
    skillImage: "bootstrap",
  },
  {
    skillName: "Node JS",
    skillImage: "node",
  },
  {
    skillName: "Express JS",
    skillImage: "express",
  },
  {
    skillName: "MySQL",
    skillImage: "mysql",
  },
  {
    skillName: "PostgreSQL",
    skillImage: "postgresql",
  },
  {
    skillName: "JSON Web Token",
    skillImage: "jwt",
  },
  {
    skillName: "Git",
    skillImage: "git",
  },
  {
    skillName: "Github",
    skillImage: "github",
  },
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsElement = skillsRef.current;

    const handleScroll = () => {
      if (!skillsElement) return;

      const { top } = skillsElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        skillsElement.classList.add("animate__animated", "animate__fadeInLeft");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="grid-col grid-cols-2 text-center justify-between gap-3"
      ref={skillsRef}
    >
      <div>
        <h1 className="text-5xl font-bold">Skills</h1>
        <p className="text-2xl font-light">
          Here are some of the technologies I have worked with
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 my-5">
        {skillSet.map((skill, index) => (
          <SkillCards
            key={index}
            skillName={skill.skillName}
            skillImage={skill.skillImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
