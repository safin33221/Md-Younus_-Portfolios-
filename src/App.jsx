import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';

const App = () => {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <HeroSection/>
      </main>
    </div>
  );
};

export default App;