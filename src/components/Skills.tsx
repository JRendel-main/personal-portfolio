import React from "react";
import {
  FaMicrochip as ChipIcon,
  FaIdBadge as BadgeCheckIcon,
} from "react-icons/fa";
import { SkillList } from "../constants/Skills";
import { FaHtml5, FaReact, FaNode, FaBootstrap, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJquery,
  SiExpress,
  SiPhp,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiAdobephotoshop,
  SiMicrosoftoffice,
  SiAdobelightroom,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  const addIcon = (icon: string) => {
    switch (icon) {
      case "html5":
        return <FaHtml5 size={40}/>;
      case "react":
        return <FaReact size={40}/>;
      case "node":
        return <FaNode size={40}/>;
      case "bootstrap":
        return <FaBootstrap size={40}/>;
      case "next":
        return <SiNextdotjs size={40}/>;
      case "jquery":
        return <SiJquery size={40}/>;
      case "express":
        return <SiExpress size={40}/>;
      case "php":
        return <SiPhp size={40}/>;
      case "tailwind":
        return <SiTailwindcss size={40}/>;
      case "mongodb":
        return <SiMongodb size={40}/>;
      case "mysql":
        return <SiMysql size={40}/>;
      case "postgresql":
        return <SiPostgresql size={40}/>;
      case "github":
        return <SiGithub size={40}/>;
      case "figma":
        return <FaFigma size={40}/>;
      case "adobephotoshop":
        return <SiAdobephotoshop size={40}/>;
      case "microsoftoffice":
        return <SiMicrosoftoffice size={40}/>;
      case "adobelightroom":
        return <SiAdobelightroom size={40}/>;
      case "vscode":
        return <TbBrandVscode size={40}/>;
      default:
        return <FaHtml5 size={40}/>;
    }
  };
  return (
    <div>
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <ChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font dark:text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              I have experience with the following technologies and tools.
            </p>
          </div>
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-center mb-4">
            Frontend
          </h2>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {SkillList.map(
              (skill) =>
                skill.category === "Frontend" && (
                  <>
                    <div key={skill.id} className="p-2 sm:w-1/2 w-full">
                      <div className="bg-zinc-200 dark:bg-slate-700 rounded flex p-4 h-full items-center">
                        {addIcon(skill.icon)}
                        <span className="title-font font-medium dark:text-white">
                          &nbsp;{skill.title}
                        </span>
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-center mb-4">
            Backend
          </h2>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {SkillList.map(
              (skill) =>
                skill.category === "Backend" && (
                  <>
                    <div key={skill.id} className="p-2 sm:w-1/2 w-full">
                      <div className="bg-zinc-200 dark:bg-slate-700 rounded flex p-4 h-full items-center">
                        {addIcon(skill.icon)}
                        <span className="title-font font-medium dark:text-white">
                          &nbsp;{skill.title}
                        </span>
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-center mb-4">
            Frameworks
          </h2>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {SkillList.map(
              (skill) =>
                skill.category === "Framework" && (
                  <>
                    <div key={skill.id} className="p-2 sm:w-1/2 w-full">
                      <div className="bg-zinc-200 dark:bg-slate-700 rounded flex p-4 h-full items-center">
                        {addIcon(skill.icon)}
                        <span className="title-font font-medium dark:text-white">
                          &nbsp;{skill.title}
                        </span>
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-center mb-4">
            Database
          </h2>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {SkillList.map(
              (skill) =>
                skill.category === "Database" && (
                  <>
                    <div key={skill.id} className="p-2 sm:w-1/2 w-full">
                      <div className="bg-zinc-200 dark:bg-slate-700 rounded flex p-4 h-full items-center">
                        {addIcon(skill.icon)}
                        <span className="title-font font-medium dark:text-white">
                          &nbsp;{skill.title}
                        </span>
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-center mb-4">
            Tools
          </h2>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {SkillList.map(
              (skill) =>
                skill.category === "Tools" && (
                  <>
                    <div key={skill.id} className="p-2 sm:w-1/2 w-full">
                      <div className="bg-zinc-200 dark:bg-slate-700 rounded flex p-4 h-full items-center">
                        {addIcon(skill.icon)}
                        <span className="title-font font-medium dark:text-white">
                          &nbsp;{skill.title}
                        </span>
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
