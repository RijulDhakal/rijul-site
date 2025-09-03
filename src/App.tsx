import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Skills /> {/* <-- Added here */}
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 font-mono">
            <p>&copy; 2024 Rijul Dhakal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
