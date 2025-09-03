import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Figma, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Assignment App',
      subtitle: 'Click to view on Figma',
      image: '../assets/assignment.jpg',
      Url: 'https://www.figma.com/design/WsSuM609IddTPydLOz1LNO/Untitled?node-id=0-1&t=pofYsyDdnaIQrICS-1',
      type: 'Figma' // Can be 'github' or 'figma'
    },
    {
      title: 'Fitness App',
      subtitle: 'Click to view on Figma',
      image: 'src/assets/fitness.jpg',
      Url: 'https://www.figma.com/design/bWQbEjGjFMJpFLktlXhVL1/fitness-app?node-id=0-1&t=17tHoxFiVQAHHcys-1',
      type: 'Figma'
    },
    {
      title: 'E-Learning App',
      subtitle: 'Click to view on Figma',
      image: 'src/assets/Elearning.jpg',
      Url: 'https://www.figma.com/design/riRvo9Mvwrm6mVkkQSUCRH/e-learing?node-id=0-1&t=nekorxoLBSpUTli0-1',
      type: 'Figma'
    },
    {
      title: 'Dhansetu Wallet App',
      subtitle: 'Click to view on Figma',
      image: 'src/assets/Dhansetu.jpg',
      Url: 'https://www.figma.com/design/oeZrD0gupMxczglCt9Ufxd/rijuldhakal?node-id=0-1&t=cPQT9ZDLuyYgFTze-1',
      type: 'Figma'
    },
    {
      title: 'Messaging App',
      subtitle: 'Click to view on Figma',
      image: 'src/assets/messaging.jpg',
      Url: 'https://www.figma.com/design/yv1XDGNSo2T0tynfQZx6e8/message-app?node-id=0-1&t=IZH0iva0v8ujVbrP-1',
      type: 'Figma'
    },
    {
      title: 'MediCure E-commerce',
      subtitle: 'Click to view on Figma',
      image: 'src/assets/medicure.jpg',
      Url: 'https://www.figma.com/design/E5GN0fesXi5HiavXxy6G6z/medicure?node-id=1-2132&t=wHmWs5glnh7lKENE-1',
      type: 'Figma'
    },
    {
      title: 'Saptarishi',
      subtitle: 'Click to view on GitHub',
      image: 'src/assets/saptarishi.jpg',
      Url: 'https://github.com/RijulDhakal',
      type: 'github'
    }
  ];

  const handleProjectClick = (project: typeof projects[0]) => {
     window.open(project.Url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
            Featured <span className="text-[#00ff99]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            Here are some of my recent projects showcasing my development and design skills
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00ff99]/50 transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, threshold: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 255, 153, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#00ff99]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#00ff99] rounded-full flex items-center justify-center text-black"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.type === 'github' ? <Github size={20} /> : <Figma size={20} />}
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <motion.h3
                  className="text-white font-semibold text-xl mb-2 font-mono group-hover:text-[#00ff99] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-400 text-sm font-mono flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={14} />
                  {project.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note for customization */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm font-mono">
            💡 More exciting projects coming soon 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
