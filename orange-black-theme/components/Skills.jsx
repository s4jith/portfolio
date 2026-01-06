import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CodeBracketIcon, 
  WrenchScrewdriverIcon, 
  ChartBarIcon, 
  CpuChipIcon,
  CommandLineIcon,
  UsersIcon 
} from '@heroicons/react/24/outline'
import ThreeDBackground from './ThreeDBackground'
import AnimatedBackground from './AnimatedBackground'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <CodeBracketIcon className="w-8 h-8" />,
      skills: ["Python", "C", "JavaScript", "HTML", "CSS"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      skills: ["Django", "Streamlit", "Flask", "Tailwind CSS", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow/PyTorch", "Hugging Face Transformers"],
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Data Science & AI",
      icon: <ChartBarIcon className="w-8 h-8" />,
      skills: ["Machine Learning (Supervised/Unsupervised)", "Deep Learning (CNNs/RNNs/LSTMs)", "Natural Language Processing", "Text Preprocessing & Embeddings", "Transformers (BERT/GPT)", "RAG Systems", "LLMs & Agents", "Data Analysis & Visualization", "Prompt Engineering"],
      color: "from-yellow-500 to-orange-600"
    },

    {
      title: "Tools & Technologies",
      icon: <CommandLineIcon className="w-8 h-8" />,
      skills: ["SQL", "Git", "Linux", "PowerBI", "Docker", "ONNX/TensorRT"],
      color: "from-red-600 to-orange-500"
    },
    {
      title: "Soft Skills",
      icon: <UsersIcon className="w-8 h-8" />,
      skills: ["Problem Solving", "Leadership", "Team Collaboration", "Research & Experimentation"],
      color: "from-orange-500 to-yellow-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="relative py-20 bg-gray-900 dark:bg-gray-900 overflow-hidden">
      {/* 3D Background */}
      <ThreeDBackground 
        showParticles={false} 
        showShapes={true} 
        className="opacity-20 dark:opacity-10" 
      />
      
      {/* Animated Background Pattern */}
      <AnimatedBackground 
        pattern="circles" 
        intensity="low" 
        color="orange" 
      />
      
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
              className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4"
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '4rem' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 dark:text-gray-300 mt-6 max-w-2xl mx-auto"
            >
              A comprehensive toolkit of technologies and methodologies I use to bring ideas to life
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group bg-gray-800 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + (index * 0.1) + (skillIndex * 0.05) 
                      }}
                      className="flex items-center gap-3 group/skill"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-150 transition-transform duration-200`}></div>
                      <span className="text-gray-300 dark:text-gray-300 group-hover/skill:text-white dark:group-hover/skill:text-white transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent mb-4">
                Always Learning
              </h3>
              <p className="text-lg text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, 
                and methodologies to stay at the forefront of innovation in AI and Data Science.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
