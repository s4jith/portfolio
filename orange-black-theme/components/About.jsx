import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import AnimatedBackground from './AnimatedBackground'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="relative py-20 bg-black dark:bg-black overflow-hidden">
      {/* Animated Background Pattern */}
      <AnimatedBackground 
        pattern="waves" 
        intensity="low" 
        color="orange" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '4rem' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white dark:text-white mb-6">
                Passionate About Innovation
              </h3>
              <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                Motivated and enthusiastic Data Science student with a solid foundation in AI, Machine Learning, and Data Analysis. I'm passionate about applying academic knowledge to real-world scenarios, building impactful projects, and using technology to craft innovative solutions.
              </p>
              <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed mb-8">
                With strong problem-solving, leadership, and collaboration skills, I thrive in environments where I can contribute to meaningful projects and continuously learn from challenges.
              </p>

              {/* Key Stats */}
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h4 className="text-xl font-semibold text-white dark:text-white mb-6">Languages</h4>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-lg font-medium text-white dark:text-white">English</div>
                <div className="text-sm text-gray-400 dark:text-gray-400">Fluent</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-white dark:text-white">Tamil</div>
                <div className="text-sm text-gray-400 dark:text-gray-400">Native</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-white dark:text-white">Deutsch</div>
                <div className="text-sm text-gray-400 dark:text-gray-400">A1</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
