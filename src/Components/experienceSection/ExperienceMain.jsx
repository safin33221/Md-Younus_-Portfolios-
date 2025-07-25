import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import { motion } from "framer-motion";
import { fadeIn } from '../framerMotion/variants';
import SectionTitle from '../common/SectionTitle';


const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1400px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <SectionTitle title={`Exprience`}/>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block hidden"></div>
      {/* <AllExperience /> */}
    </div>
  )
}

export default ExperienceMain