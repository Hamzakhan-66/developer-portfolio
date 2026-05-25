import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaBrain, FaRobot } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiOpenai } from 'react-icons/si';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
    { name: 'Machine Learning', icon: <FaBrain className="text-accent" /> },
    { name: 'Generative AI', icon: <SiOpenai className="text-white" /> },
    { name: 'Prompt Engineering', icon: <FaRobot className="text-purple-400" /> },
    { name: 'LLMs', icon: <FaBrain className="text-blue-400" /> },
    { name: 'RAG', icon: <FaDatabase className="text-green-400" /> },
    { name: 'Vector Databases', icon: <SiPytorch className="text-[#EE4C2C]" /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Technologies and tools I work with to build intelligent solutions.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={zoomIn(index * 0.1, 0.5)}
                className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-secondary/0 group-hover:from-accent/10 group-hover:to-secondary/10 transition-colors duration-300"></div>
                <div className="text-4xl relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors relative z-10 text-center">
                  {skill.name}
                </span>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-secondary w-0 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
