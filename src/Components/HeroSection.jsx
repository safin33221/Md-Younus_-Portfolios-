import React from 'react';
import profile from '../assets/profile.jpg'
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 px-6 lg:px-16 py-12 transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-[350px]0 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">John Doe</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-medium mb-2">
            🚀 Digital Marketer & Growth Strategist
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            I help brands grow online through SEO, content strategy, social media marketing, 
            and data-driven campaigns. Let’s boost your digital presence together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            Let's Work Together
          </a>
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Digital Marketer Profile"
            className="rounded-full shadow-lg w-[350px] h-[350px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
