import { motion } from 'framer-motion'
import { ChevronDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import { Github, Linkedin, Mail } from 'lucide-react'
import ThreeDBackground from './ThreeDBackground'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden">
      {/* 3D Background */}
      <ThreeDBackground 
        showParticles={true} 
        showShapes={false} 
        className="opacity-30 dark:opacity-20" 
      />
      
      {/* Animated Background Pattern */}
      <AnimatedBackground 
        pattern="dots" 
        intensity="medium" 
        color="orange" 
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 p-1 animate-pulse-glow"
            >
              <div className="w-full h-full rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-orange-300 dark:text-orange-200">SJ</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white dark:text-white mb-4"
          >
            Sajith J
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-orange-300 dark:text-orange-200 mb-8 font-light"
          >
            Aspiring AI/ML Engineer
          </motion.p>

          {/* Brief Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-300 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Developing innovative Machine Learning and GenAI solutions to transform data and solve complex, real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a 
              href="/resume.pdf" 
              download="Sajith_Resume.pdf"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Download Resume
            </a>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="group border-2 border-orange-500 text-orange-300 dark:text-orange-300 dark:border-orange-300 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-6 mb-16"
          >
            <a 
              href="https://github.com/Winterbear0701" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-gray-800 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-300 dark:text-gray-300 group-hover:text-orange-300" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sajith-070106-j" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-gray-800 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-300 dark:text-gray-300 group-hover:text-orange-300" />
            </a>
            
            <a 
              href="mailto:sajithjaganathan7@gmail.com"
              className="group p-3 bg-gray-800 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-300 dark:text-gray-300 group-hover:text-orange-300" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={() => scrollToSection('about')}
            className="animate-bounce mb-16"
          >
            <ChevronDownIcon className="w-8 h-8 text-gray-400 mx-auto" />
          </motion.button>

          {/* Stats Section - Removed as requested */}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
