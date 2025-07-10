import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/About';
import SkillsSection from './Components/Skill';
import ExperienceMain from './Components/ExperienceSection/ExperienceMain';
import ProjectMain from './Components/projectSection/ProjectMain';
import ContactMain from './Components/contact/ContactMain';
import Footer from './Components/footer/footer';

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className='dark:bg-gray-950'>
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