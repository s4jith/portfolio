import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  DocumentTextIcon, 
  LightBulbIcon, 
  CalendarIcon, 
  ArrowTopRightOnSquareIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const publications = [
    {
      type: "Journal Publication",
      title: "MythSnare – Misinformation Detection",
      journal: "IJRPR (International Journal of Research and Publication Reviews)",
      date: "May 2025",
      status: "Published",
      paperId: "IJRPR-147472",
      certificateUrl: "https://ijrpr.com/certificate/download.php?paper_id=30524",
      description: "Comprehensive research on developing an AI-powered system for detecting and flagging misinformation using advanced NLP techniques and machine learning algorithms.",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      highlights: [
        "Novel NLP approach for misinformation detection",
        "Implementation of RAG (Retrieval-Augmented Generation)",
        "Real-time content analysis and verification",
        "Significant accuracy improvements over existing methods"
      ]
    }
  ]

  const researchInterests = [
    {
      title: "Machine Learning",
      description: "Implementing advanced ML models for various domain-specific challenges, focusing on supervised and unsupervised learning techniques",
      icon: "🧠"
    },
    {
      title: "GenAI",
      description: "Exploring generative AI technologies, transformers, and their innovative applications in solving real-world problems",
      icon: "🤖"
    }
  ]

  return (
    <section id="publications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
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
              Research & Publications
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
              className="text-lg text-white mt-6 max-w-2xl mx-auto"
            >
              Contributing to the advancement of AI and data science through research and innovation
            </motion.p>
          </div>

          {/* Publications */}
          <div className="space-y-8 mb-16">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + (index * 0.2) }}
                className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-500/20"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Publication Header */}
                  <div className={`lg:col-span-1 bg-gradient-to-br ${pub.gradient} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/20 rounded-xl">
                        {pub.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium opacity-90">{pub.type}</div>
                        <div className="text-lg font-bold">{pub.status}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/90">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-sm">{pub.date}</span>
                      </div>
                      <div className="text-white/90 text-sm">
                        {pub.journal}
                      </div>
                      {pub.paperId && (
                        <div className="text-white/90 text-sm font-medium">
                          Paper ID: {pub.paperId}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    {pub.certificateUrl ? (
                      <a
                        href={pub.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        View Publication Certificate
                      </a>
                    ) : (
                      <button className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        View Publication
                      </button>
                    )}
                  </div>

                  {/* Publication Content */}
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent mb-4">
                      {pub.title}
                    </h3>
                    
                    <p className="text-white leading-relaxed mb-6">
                      {pub.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                        Key Highlights
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {pub.highlights.map((highlight, hIndex) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.5 + (index * 0.2) + (hIndex * 0.1) 
                            }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white text-sm">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent mb-8 text-center">
              Research Interests
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {researchInterests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-500/20"
                >
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-white text-sm">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-800 rounded-2xl p-8 border border-orange-500/20">
              <ShieldCheckIcon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent mb-4">
                Future Research Goals
              </h3>
              <p className="text-lg text-white max-w-3xl mx-auto">
                Continuing to push the boundaries of AI and machine learning, with focus on 
                developing solutions that address real-world challenges in information integrity, 
                ethical AI, and human-computer interaction.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
