import React from 'react';
import profile from '../assets/profile.jpg';

const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex items-center mt-10 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-12 items-center px-6 lg:px-16">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">Younus</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-medium mb-2">
            🚀 Digital Marketer & Growth Strategist
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            I help brands grow online through SEO, content strategy, social media
            marketing, and data-driven campaigns. Let’s boost your digital
            presence together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            Let's Work Together
          </a>
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={profile}
            alt="Digital Marketer Profile"
            className="rounded-full shadow-lg w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
