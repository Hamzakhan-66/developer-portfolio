import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.2, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn('right', 0.4)} className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary"></div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Who am I?</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am Hamza Khan, a passionate 4th-year B.Tech Computer Science student. My journey in technology is driven by an insatiable curiosity for how things work and a desire to build solutions that matter.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My primary focus lies in Python, Machine Learning, Generative AI, and LLMs. I am deeply interested in exploring modern AI systems and integrating them to solve real-world problems.
              </p>
            </motion.div>

            <motion.div variants={fadeIn('left', 0.6)} className="space-y-6">
              <div className="glass rounded-xl p-6 border-l-4 border-l-accent glass-hover">
                <h4 className="text-xl font-medium text-white mb-2">My Mission</h4>
                <p className="text-gray-400 text-sm">
                  To leverage technology, especially AI and Machine Learning, to build innovative, efficient, and scalable automation tools.
                </p>
              </div>
              
              <div className="glass rounded-xl p-6 border-l-4 border-l-secondary glass-hover">
                <h4 className="text-xl font-medium text-white mb-2">What I Do</h4>
                <p className="text-gray-400 text-sm">
                  From developing intelligent multi-agent systems to creating performant full-stack applications, I love bringing ideas to life through code.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
