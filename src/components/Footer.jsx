import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050508] py-12">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-3xl font-bold text-gradient mb-6">HK.</div>
        
        <div className="flex gap-6 mb-8">
          <a href="https://www.linkedin.com/in/hamza-khan-4415b7348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/Hamzakhan-66" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://x.com/hmz__khan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
            <FaTwitter className="text-xl" />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Designed & Developed by <span className="text-gray-300 font-medium">Hamza Khan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
