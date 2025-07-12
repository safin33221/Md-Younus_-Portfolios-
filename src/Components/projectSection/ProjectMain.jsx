import { motion } from "framer-motion";
import { projects } from "../../constants";
import SingleProject from "./SingleProject";


import SectionTitle from "../common/SectionTitle";

const ProjectMain = () => {
  return (
     <div id="projects" className="max-w-[1400px] mx-auto px-4">
    
       <SectionTitle title={`Projects`}/>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {/* change the description and images for project in the projects json file */}
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProjectMain