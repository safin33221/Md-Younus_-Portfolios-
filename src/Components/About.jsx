/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from './common/SectionTitle';
import { fadeIn } from './framerMotion/variants';
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <section id="about" className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 px-6 lg:px-16  transition-colors duration-300">
        <SectionTitle title={'About Me'} />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div>
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              I am a professional digital marketer specializing in social media marketing, SEO, content creation, and online advertising. I help businesses grow their brand, boost engagement, and increase sales through result-driven digital strategies. Explore my portfolio to see creative, effective, and data-backed marketing solutions tailored for various industries.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>🔍 SEO & Content Strategy</li>
              <li>📱 Social Media Marketing</li>
              <li>✉️ Email Campaigns & Automation</li>
              <li>📈 Data Analytics & Growth Strategy</li>
            </ul>
          </div>

          {/* Right Column: Optional Image or Illustration */}
          <div className="flex md:justify-center">
            {/* Right Column: Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">🎓 Education</h3>
              <div className="relative border-l-2 border-blue-500 pl-6">
                {/* SSC */}
                <div className="mb-6">
                  <div className="absolute -left-3 top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-gray-950"></div>
                  <h4 className="text-lg font-semibold">SSC - Secondary School Certificate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2018 – 2020</p>
                  <p className="text-sm">Business Studies | XYZ High School</p>
                </div>

                {/* HSC */}
                <div className="mb-6">
                  <div className="absolute -left-3 top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-gray-950"></div>
                  <h4 className="text-lg font-semibold">HSC - Higher Secondary Certificate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2020 – 2022</p>
                  <p className="text-sm">Business Studies | ABC College</p>
                </div>

                {/* Honours */}
                <div>
                  <div className="absolute -left-3 top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-gray-950"></div>
                  <h4 className="text-lg font-semibold">B.Sc. Honours in Computer Science</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2023 – Present</p>
                  <p className="text-sm">XYZ University</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
