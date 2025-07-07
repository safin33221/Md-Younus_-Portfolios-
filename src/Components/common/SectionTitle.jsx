import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
        {title}_
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
