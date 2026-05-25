import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../utils/animations';

// Import images directly
import pythonCert1 from '../assets/certificates/python_essentials1.jpg';
import pythonCert2 from '../assets/certificates/python_essentials2.jpg';
import oracleCert from '../assets/certificates/Oracle Generative Ai_page-0001.jpg';
import skilldzireCert from '../assets/certificates/skill dzire.jpg';
import wadhwaniCert from '../assets/certificates/Wadhwani Foundation.jpg';
import cambridgeCert from '../assets/certificates/cambridge.jpg';

const certificatesData = [
  {
    title: 'Python Essentials 1',
    organization: 'Cisco Networking Academy',
    date: '2024',
    image: pythonCert1,
  },
  {
    title: 'Python Essentials 2',
    organization: 'Cisco Networking Academy',
    date: '2024',
    image: pythonCert2,
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    organization: 'Oracle',
    date: '2025',
    image: oracleCert,
  },
  {
    title:'Web Development with Python',
    organization:'SkillDzire',
    date:'2025',
    image: skilldzireCert,
  },
  {
    title:'Entrepreneurship',
    organization:'Wadhwani Foundation',
    date:'2025',
    image: wadhwaniCert,
  },
  {
    title:'Communicative English',
    organization:'Cambridge',
    date:'2025',
    image: cambridgeCert,
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="bg-gradient-glow w-[300px] h-[300px] top-1/2 left-0 animate-blob"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.2, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates & <span className="text-gradient">Achievements</span></h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Professional certifications and achievements in AI, Python, and modern technologies.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesData.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Glow border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>
                
                {/* Image Preview Container */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                   <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                </div>

                <div className="p-6 flex flex-col flex-grow relative z-30 bg-white/5 backdrop-blur-sm border-t border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors line-clamp-2" title={cert.title}>{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4 mt-auto">
                    <span className="font-medium text-gray-300">{cert.organization}</span>
                    <span className="bg-white/10 px-2 py-1 rounded text-xs">{cert.date}</span>
                  </div>
                  
                  <button className="w-full py-2 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent font-medium transition-colors flex items-center justify-center gap-2">
                    <FaExternalLinkAlt className="text-sm" /> View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors text-2xl p-2"
                onClick={() => setSelectedCert(null)}
              >
                <FaTimes />
              </button>
              
              <div className="w-full glass rounded-xl overflow-hidden shadow-2xl border border-white/20 relative">
                 {/* Neon glow behind the image in modal */}
                 <div className="absolute inset-0 bg-accent/20 blur-3xl -z-10"></div>
                 <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="w-full h-auto max-h-[80vh] object-contain relative z-10"
                 />
                 
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{selectedCert.title}</h3>
                    <p className="text-accent">{selectedCert.organization} • {selectedCert.date}</p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
