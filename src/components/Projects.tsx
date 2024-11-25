import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution built with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'AI Image Generator',
    description: 'Generate unique images using AI and machine learning',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=500&fit=crop',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}