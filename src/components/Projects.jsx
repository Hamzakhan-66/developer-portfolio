import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../utils/animations';

const projects = [
  {
    title: 'Code Review System',
    description: 'An AI-powered system that automatically scans, analyzes, and finds bugs and issues in codebases to improve code quality.',
    tags: ['Python', 'LLMs', 'Prompt Engineering'],
    github: 'https://github.com/Hamzakhan-66/AI-Code-Reviewer',
    demo: 'not deployed yet',
  },
  {
    title: 'System Health Monitor',
    description: 'A robust Python-based monitoring tool that tracks CPU, RAM, and overall system performance in real-time.',
    tags: ['Python', 'System Architecture'],
    github: 'https://github.com/Hamzakhan-66/system-monitor',
    demo: 'not deployed yet',
  },
  {
    title: 'Resume Analyzer',
    description: 'An intelligent AI tool that parses resumes, analyzes skills against job descriptions, and provides actionable feedback.',
    tags: ['Python', 'NLP', 'Machine Learning'],
    github: 'https://github.com/Hamzakhan-66/resume-analyzer',
    demo: 'not deployed yet',
  },
  {
  title: 'Text Summarizer',
  description: 'An intelligent text summarization tool that condenses long articles, documents, or paragraphs into concise and meaningful summaries using NLP techniques.',
  tags: ['Python', 'NLP', 'Machine Learning'],
  github: 'https://github.com/Hamzakhan-66/text-summarizer',
  demo: 'not deployed yet',
  },
  {
    title: 'Multi AI Agent System',
    description: 'A sophisticated network of AI agents collaborating autonomously for research, task delegation, and complex automation.',
    tags: ['Python', 'GenAI', 'Multi-Agent', 'LLMs'],
    github: 'https://github.com/Hamzakhan-66/multi-ai-agent-system',
    demo: 'not deployed yet',
  },
  {
    title: 'Image Generator',
    description: 'A cutting-edge AI-powered application that generates high-quality, creative images from text prompts.',
    tags: ['Python', 'Generative AI', 'Diffusers'],
    github: 'https://github.com/Hamzakhan-66/ai-image-generator',
    demo: 'not deployed yet',
  },
  {
    title: 'AI Job Finder',
    description: 'An intelligent AI-powered job finder system that helps users discover relevant jobs, analyze skills, match resumes with job descriptions, and provide smart career recommendations using Generative AI.',
    tags: ['Python', 'Generative AI', 'LLMs'],
    github: 'https://github.com/Hamzakhan-66/ai-job-finder',
    demo: 'not deployed yet',
},
  {
  title: 'AI Chatbot',
  description: 'A modular AI chatbot powered by LLMs (Groq API) with conversation memory, tool-based reasoning, and intelligent routing. It can remember user context, handle calculations, generate stories, and respond dynamically using AI agents.',
  tags: ['Python', 'Streamlit', 'LLMs', 'Groq API', 'Generative AI', 'NLP', 'Agent System'],
  github: 'https://github.com/Hamzakhan-66/ai-chatbot',
  demo: 'not deployed yet',
}
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="bg-gradient-glow w-[300px] h-[300px] top-1/2 right-0 animate-blob"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.2, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">A showcase of my recent work in python, AI, and Machine Learning.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Glow border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                      <FaGithub className="text-lg" /> Code
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium">
                      <FaExternalLinkAlt className="text-md" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
