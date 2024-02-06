import React from "react";
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

const Skills = () => {
  return (
    <div className="grid-col grid-cols-2 text-center justify-between gap-3">
      <div>
        <h1 className="text-5xl font-bold">Skills</h1>
        <p className="text-2xl font-light">
          Here are some of the technologies I have worked with
        </p>
      </div>
      <div className="
        flex flex-wrap justify-center items-center gap-8 my-5
      ">
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
