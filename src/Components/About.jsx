import React from 'react';
import SectionTitle from './common/SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 px-6 lg:px-16 py-20 transition-colors duration-300">
          <SectionTitle title={'About Me'}/>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div>
          <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
            I'm <span className="font-semibold text-blue-600 dark:text-blue-400">John Doe</span>, a passionate digital marketer with 5+ years of experience in helping brands grow online. I specialize in SEO, social media strategy, email marketing, and conversion optimization. My mission is to craft data-driven strategies that deliver measurable results.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>🔍 SEO & Content Strategy</li>
            <li>📱 Social Media Marketing</li>
            <li>✉️ Email Campaigns & Automation</li>
            <li>📈 Data Analytics & Growth Strategy</li>
          </ul>
        </div>

        {/* Right Column: Optional Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x400.png?text=Digital+Marketing"
            alt="About illustration"
            className="rounded-xl shadow-lg w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
