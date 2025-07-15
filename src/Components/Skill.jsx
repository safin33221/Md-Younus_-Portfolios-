"use client";

import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";

const technicalSkills = [
  "Social Media Marketing",
  "SEO (On-page, Off-page, Technical)",
  "Bulk Email Collection",
  "Content Marketing & Copywriting",
  "YouTube Channel Optimization",
  "Canva, CapCut, Filmora",
  "Data Analytics (GA, FB Insights)",
];

const interpersonalSkills = [
  "Communication",
  "Client Relationship Management",
  "Team Collaboration",
  "Strategic Planning",
  "Problem-Solving",
];

export default function SkillsShowcase() {
  return (
    <section id="skills" className="  px-4    mx-auto">
      <SectionTitle title={`My Skills`}/>

      {/* Technical Skills in Card Grid */}
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white w-md md:w-fit  dark:bg-zinc-900 shadow-md hover:shadow-xl transition-all rounded-xl p-5 flex items-center gap-3"
          >
            <FaCheckCircle className="text-green-500 text-lg shrink-0" />
            <span className="text-gray-800 dark:text-gray-100 font-medium">{skill}</span>
          </div>
        ))}
      </div>

      {/* Interpersonal Skills as tags */}
      <div>
        
        {/* <SectionTitle title={` Interpersonal Skills`}/>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {interpersonalSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-800 dark:bg-indigo-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
