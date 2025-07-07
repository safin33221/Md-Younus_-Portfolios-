import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/About';
import SkillsSection from './Components/Skill';

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className='dark:bg-gray-950'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
};

export default App;