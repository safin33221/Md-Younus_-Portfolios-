import { experiences } from '../../constants';
import { motion } from "framer-motion";
import { fadeIn } from '../framerMotion/variants';
import { FaArrowRightLong } from 'react-icons/fa6';
import SingleExperience from './SingleExperience';
import { div } from 'framer-motion/client';

const AllExperience = () => {
  return (
    <div className='mx-auto'>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {experiences.map((experience, index) => {
        return (
          
            <SingleExperience key={index} experience={experience} />
         
        );
      })}
    </div>
    </div>
  )
}

export default AllExperience