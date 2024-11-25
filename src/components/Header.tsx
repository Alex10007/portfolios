import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50" />
      </div>
      
      <div className="relative z-10 text-center text-white space-y-6 px-4">
        <div className="relative group">
          <img 
            src="https://i.imgur.com/Hy0Hy5k.jpg"
            alt="Profile" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white/20 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Alex Bolota Dibe
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-200">
          Full Stack Developer
        </p>
        
        <div className="flex justify-center gap-6">
          <a href="https://github.com" className="transform hover:scale-110 transition-transform duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="transform hover:scale-110 transition-transform duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:alex@example.com" className="transform hover:scale-110 transition-transform duration-200">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <button className="px-8 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200">
          View My Work
        </button>
      </div>
    </header>
  );
}