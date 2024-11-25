import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;