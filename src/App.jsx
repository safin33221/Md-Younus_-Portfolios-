import React from 'react';

import HeroSection from './Components/HeroSection';
import AboutSection from './Components/About';
import SkillsSection from './Components/Skill';

import ProjectMain from './Components/projectSection/ProjectMain';
import ContactMain from './Components/contact/ContactMain';

import ExperienceMain from './Components/experienceSection/ExperienceMain';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
    
      <main className='dark:bg-gray-950'>
        <Navbar />
        {/* hero */}
        <HeroSection />
        {/* about us */}
        <AboutSection />
        {/* skills */}
        <SkillsSection />

        {/* experience */}
        <ExperienceMain />

        {/* project */}
        <ProjectMain />

        {/* contact me */}
        <ContactMain />

        {/* footer */}
        <Footer />
      </main>
    </div>
  );
};

export default App;