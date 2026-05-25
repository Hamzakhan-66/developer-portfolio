import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../utils/animations';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.2, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Have a question or want to work together? Feel free to reach out!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div variants={fadeIn('right', 0.4)} className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:thehamzakhan951@gmail.com" className="text-lg text-gray-200 hover:text-accent transition-colors">
                        thehamzakhan951@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+9779702631951" className="text-lg text-gray-200 hover:text-secondary transition-colors">
                        +977-9702631951
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-medium mb-4 text-gray-300">Connect with me</h4>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/hamza-khan-4415b7348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href="https://github.com/Hamzakhan-66" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#333] hover:border-[#333] transition-all duration-300">
                      <FaGithub className="text-lg" />
                    </a>
                    <a href="https://www.instagram.com/thehamza.khan?igsh=MXYwdHBiY3k2cmdxdA==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300">
                      <FaInstagram className="text-lg" />
                    </a>
                    <a href="https://www.facebook.com/thehamza.khan.5" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300">
                      <FaFacebook className="text-lg" />
                    </a>
                    <a href="https://x.com/hmz__khan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300">
                      <FaTwitter className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn('left', 0.6)}>
              <form className="glass rounded-2xl p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder=" " />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder=" " />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea id="message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder=" "></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-accent to-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
