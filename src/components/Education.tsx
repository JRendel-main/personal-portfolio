"use client";
import React from "react";
import { Timeline } from "@/constants/Timeline";
import {
  FaSchool as SchoolIcon,
  FaBriefcase as WorkIcon,
  FaStar as StarIcon,
} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Education</h1>
      <VerticalTimeline>
        {Timeline.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            date={item.date}
            iconStyle={{
              background: "#2d3748",
              color: "bg-slate-100",
            }}
            icon={item.icon === "school" ? <SchoolIcon /> : <WorkIcon />}
            iconOnClick={
                item.icon === "school"
                    ? () => console.log("School icon clicked")
                    : () => console.log("Work icon clicked")
            }
          >
            <h3 className="vertical-timeline-element-title dark:text-black">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle dark:text-black">
              {item.location}
            </h4>
            <h1 className="text-sm mt-3 dark:text-black">{item.description}</h1>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Education;
