import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Sports from '../components/Sports'

const SportsPage = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className={`min-h-screen pt-20 transition-colors duration-300 bg-gray-900`}>
      {/* Hero Section for Sports Page */}
  <section className={`relative py-20 overflow-hidden bg-gray-900`}>
        {/* Animated Background Elements - Same as Education */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent mb-4"
              >
                Sports Achievements
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '4rem' } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg mt-6 max-w-2xl mx-auto text-gray-300"
              >
                Sports have been a constant teacher in my life, shaping me through every win and challenge.
From football, I learned teamwork and strategy; from karate, focus and self-discipline; and from roller skating, balance and perseverance.
Each sport pushed me to stay consistent, respect the process, and never lose momentum.
The discipline I built on the field and track reflects in everything I do today.
Even now, the same consistency and determination I developed through sports guide me in the work I do.
It's not just about the medals - it's about a mindset of showing up, improving, and giving my best every time.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sports Component */}
  <Sports darkMode={true} />
    </div>
  )
}

export default SportsPage
