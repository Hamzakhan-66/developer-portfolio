import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="bg-gradient-glow w-[500px] h-[500px] top-1/4 -left-20 animate-blob"></div>
      <div className="bg-gradient-glow w-[400px] h-[400px] bottom-10 right-0 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto pr-12 md:pr-24 pl-[90px] relative z-10">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              variants={fadeIn('up', 0.2)}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              Hi, I'm <span className="text-gradient">Hamza Khan</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeIn('up', 0.4)}
              className="text-xl md:text-3xl text-gray-300 mb-8 font-light"
            >
              B.Tech CSE Student | <span className="text-accent font-medium">Python Developer</span> | AI & Generative AI Enthusiast
            </motion.h2>
            
            <motion.p 
              variants={fadeIn('up', 0.6)}
              className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed mx-auto md:mx-0"
            >
              I am deeply passionate about Machine Learning, Artificial Intelligence, and modern technologies. 
              I love building intelligent systems and solving real-world problems through code.
            </motion.p>
            
            <motion.div 
              variants={fadeIn('up', 0.8)}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a 
                href="https://www.linkedin.com/in/hamza-khan-4415b7348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-6 py-3 bg-primary/20 border border-primary/50 text-white rounded-full flex items-center gap-2 overflow-hidden hover:bg-primary/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:animate-glow rounded-full"></div>
                <FaLinkedin className="text-lg relative z-10" />
                <span className="relative z-10 font-medium text-sm">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/Hamzakhan-66" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-6 py-3 glass glass-hover rounded-full flex items-center gap-2"
              >
                <FaGithub className="text-lg relative z-10 group-hover:text-white text-gray-300 transition-colors" />
                <span className="relative z-10 font-medium text-gray-300 group-hover:text-white transition-colors text-sm">GitHub</span>
              </a>

              <a 
                href="https://www.instagram.com/thehamza.khan?igsh=MXYwdHBiY3k2cmdxdA==" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-6 py-3 glass glass-hover rounded-full flex items-center gap-2 hover:border-pink-500/50"
              >
                <FaInstagram className="text-lg relative z-10 group-hover:text-pink-500 text-gray-300 transition-colors" />
                <span className="relative z-10 font-medium text-gray-300 group-hover:text-pink-500 transition-colors text-sm">Instagram</span>
              </a>

              <a 
                href="https://www.facebook.com/thehamza.khan.5" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-6 py-3 glass glass-hover rounded-full flex items-center gap-2 hover:border-blue-500/50"
              >
                <FaFacebook className="text-lg relative z-10 group-hover:text-blue-500 text-gray-300 transition-colors" />
                <span className="relative z-10 font-medium text-gray-300 group-hover:text-blue-500 transition-colors text-sm">Facebook</span>
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            className="flex-1 flex justify-center md:justify-end mb-10 md:mb-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-secondary rounded-full animate-glow blur-md opacity-70"></div>
              <img 
                src="/profile.png" 
                alt="Hamza Khan" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 hover:border-accent/50 transition-all duration-300"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
