
import { motion } from "framer-motion";
import { fadeIn } from '../framerMotion/variants';
// ...existing code...
const SectionTitle = ({ title }) => {
  return (
    <div className="text-center mb-12 px-4 sm:px-6">

      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col items-center mt-[50px] ">
          <h2 className="text-6xl text-cyan-500 mb-10 md:mb-16 lg:mb-20 font-bold">{title}</h2>
        </div>
      </motion.div>

    </div>
  );
};

export default SectionTitle;
