import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  AcademicCapIcon, 
  CalendarIcon, 
  MapPinIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
  CheckBadgeIcon,
  ClockIcon,
  EyeIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const Education = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [flippedCards, setFlippedCards] = useState(new Set())
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [currentCertPage, setCurrentCertPage] = useState(0)
  const certificatesPerPage = 6

  const toggleCard = (index) => {
    const newFlippedCards = new Set(flippedCards)
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index)
    } else {
      newFlippedCards.add(index)
    }
    setFlippedCards(newFlippedCards)
  }

  const openCertificateModal = (cert, event) => {
    event.stopPropagation() // Prevent card flip when clicking view button
    setSelectedCertificate(cert)
    setShowModal(true)
  }

  const closeCertificateModal = () => {
    setShowModal(false)
    setSelectedCertificate(null)
  }

  const educationData = [
    {
      degree: "B.Tech - Artificial Intelligence and Data Science",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      duration: "2023 - 2027",
      cgpa: "8.6",
      location: "Coimbatore, India",
      description: "Comprehensive program covering AI fundamentals, machine learning algorithms, data structures, and GenAI with hands-on project experience.",
      highlights: [
        "Interactive participation in class",
        "Active in technical events",
        "Research in ML and GenAI"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Vivek Vidyalaya Matric Hr. Sec. School",
      duration: "2022 - 2023",
      Mark: "86%",
      location: "Coimbatore, India",
      description: "Strong foundation in Mathematics, Physics, and Computer Science with focus on analytical thinking and problem-solving skills.",
      highlights: [
        "Mathematics Excellence",
        "Computer Science Topper",
        "Academic Consistency"
      ]
    }
  ]

  const certifications = [
    {
      name: "Big Data 101",
      issuer: "IBM",
      date: "07/04/2025", 
      duration: "1 week",
      skills: ["Hadoop", "Spark", "Linux"],
      description: "Introduction to big data technologies, distributed computing, and large-scale data processing frameworks.",
      image: "/images/Certificate/Studies/big-data-101.png"
    },

    {
      name: "Deutsch A1",
      issuer: "Goethe Zentrum",
      date: "14/05/2025",
      duration: "3 months",
      skills: ["German Language", "Basic Communication", "Basic Grammar"],
      description: "Basic German language proficiency certification demonstrating fundamental communication skills.",
      image: "/images/Certificate/Studies/A1 - german.png"
    },

    {
      name: "Introduction to Data Science",
      issuer: "Online Platform",
      date: "30/05/2025",
      duration: "1 week",
      skills: [ "Machine Learning", "Data Visualization"],
      description: "Foundation course covering machine learning algorithms, and data visualization techniques.",
      image: "/images/Certificate/Studies/introduction to data science.png"
    },

    {
      name: "Intel GenAI",
      issuer: "Intel",
      date: "11/06/2024",
      duration: "2 weeks",
      skills: ["NLP", "Transformers", "RAG","LLMs"],
      description: "Comprehensive course on Generative AI technologies and their applications in modern computing.",
      image: "/images/Certificate/Studies/intel-genai-completion.png"
    },
    
    {
      name: "Prompt Engineering",
      issuer: "Internshala",
      date: "15/07/2025",
      duration: "4 weeks",
      skills: ["Prompt Engineering", "LLMs", "AI Applications"],
      description: "Advanced techniques for crafting effective prompts for large language models and AI systems.",
      image: "/images/Certificate/Studies/Prompt Engineering for GenAI Training.png"
    },

    {
      name: "Microsoft X Edunet Internship",
      issuer: "Microsoft & Edunet Foundation",
      date: "01/08/2025",
      duration: "4 weeks",
      skills: ["Cloud Computing", "AI", "Computer Vision","Machine Learning","NLP"],
      description: "Internship program focused on Microsoft Azure cloud technologies and professional skill development.",
      image: "images/Certificate/Studies/edunet-microsoft-internship.png"
    }
  ]

  const activities = [
    {
      title: "International & Professional Service Chair",
      description: "Leading International and Professional Service for Rotaract Club of Sri Shakthi Institute Of Engineering and Technology, GROUP 4, RI District 3206 (July 2025 - June 2026)",
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      title: "Rotaractor Member",
      description: "Active member of Rotaract Club of Sri Shakthi Institute Of Engineering and Technology (July 2024 - June 2025), participating in community service and leadership development programs",
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      title: "Technical Event Conductor - KALAM 2k25",
      description: "Organized and conducted technical competitions for college fest",
      icon: <TrophyIcon className="w-6 h-6" />
    },
    {
      title: "OutBound Learning Workshop",
      description: "Enhanced leadership and team collaboration skills through experiential learning",
      icon: <AcademicCapIcon className="w-6 h-6" />
    }
  ]

  return (
    <section id="education" className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Animated Background Elements */}
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
              Education & Growth
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
              className={`text-lg mt-6 max-w-2xl mx-auto transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              My academic journey and continuous learning path in technology and innovation
            </motion.p>
          </div>

          {/* Education Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500"
            />
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + (index * 0.2) }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg relative z-10"
                  >
                    <AcademicCapIcon className="w-8 h-8" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + (index * 0.2) }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)"
                    }}
                    className={`flex-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 hover:border-orange-500/40' 
                        : 'bg-white border-gray-200 hover:border-orange-500/40'
                    }`}
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Main Info */}
                      <div className="md:col-span-2">
                        <motion.h3 
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.9 + (index * 0.2) }}
                          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {edu.degree}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 1 + (index * 0.2) }}
                          className="text-lg text-orange-500 font-semibold mb-2"
                        >
                          {edu.institution}
                        </motion.p>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 1.1 + (index * 0.2) }}
                          className={`flex items-center gap-4 mb-4 transition-colors duration-300 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4 text-orange-400" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPinIcon className="w-4 h-4 text-orange-400" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </motion.div>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 1.2 + (index * 0.2) }}
                          className={`leading-relaxed transition-colors duration-300 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {edu.description}
                        </motion.p>
                      </div>

                      {/* CGPA & Highlights */}
                      <div>
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={inView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 1.3 + (index * 0.2) }}
                          whileHover={{ scale: 1.05 }}
                          className={`rounded-xl p-4 mb-4 border transition-colors duration-300 ${
                            darkMode 
                              ? 'bg-gray-700 border-orange-500/20' 
                              : 'bg-gray-50 border-orange-200'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <StarIcon className="w-5 h-5 text-orange-500" />
                            <span className={`text-sm font-medium transition-colors duration-300 ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {edu.cgpa ? 'CGPA' : 'Marks'}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            {edu.cgpa || edu.Mark}
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1.4 + (index * 0.2) }}
                        >
                          <h4 className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            Highlights
                          </h4>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, highlightIndex) => (
                              <motion.li 
                                key={highlight}
                                initial={{ opacity: 0, x: -10 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3, delay: 1.5 + (index * 0.2) + (highlightIndex * 0.1) }}
                                className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                                  darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}
                              >
                                <motion.div 
                                  initial={{ scale: 0 }}
                                  animate={inView ? { scale: 1 } : {}}
                                  transition={{ duration: 0.2, delay: 1.6 + (index * 0.2) + (highlightIndex * 0.1) }}
                                  className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                                />
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8 text-center"
            >
              Certifications
            </motion.h3>

            {/* Certifications Grid with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCertPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certifications
                  .slice(currentCertPage * certificatesPerPage, (currentCertPage + 1) * certificatesPerPage)
                  .map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  className="relative h-64 perspective-1000 cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <motion.div
                    className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                    animate={{ 
                      rotateY: flippedCards.has(index) ? 180 : 0 
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Side */}
                    <div className={`absolute inset-0 w-full h-full rounded-xl shadow-lg border transition-all duration-300 backface-hidden ${
                      darkMode 
                        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20 hover:border-orange-500/40' 
                        : 'bg-gradient-to-br from-white to-gray-50 border-orange-200 hover:border-orange-400'
                    }`}>
                      <div className="p-6 h-full flex flex-col justify-between">
                        {/* Certificate Icon */}
                        <div className="flex justify-center mb-4">
                          <motion.div 
                            className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <CheckBadgeIcon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                        
                        {/* Certificate Name */}
                        <div className="text-center">
                          <h4 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {cert.name}
                          </h4>
                          <p className="text-orange-500 font-medium mb-4">
                            {cert.issuer}
                          </p>
                        </div>

                        {/* Click Indicator */}
                        <div className="text-center">
                          <motion.div 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`text-sm opacity-70 ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}
                          >
                            Click to view details
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div 
                      className={`absolute inset-0 w-full h-full rounded-xl shadow-lg border transform rotate-y-180 backface-hidden ${
                        darkMode 
                          ? 'bg-gradient-to-br from-gray-900 to-black border-orange-500/30' 
                          : 'bg-gradient-to-br from-gray-50 to-white border-orange-300'
                      }`}
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <div className="p-3 h-full flex flex-col">
                        {/* Header */}
                        <div className="text-center mb-3">
                          <h4 className={`font-bold text-sm mb-1 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {cert.name}
                          </h4>
                          <p className="text-orange-500 text-xs font-medium">
                            {cert.issuer}
                          </p>
                        </div>

                        {/* Certificate Preview */}
                        <div className="relative mb-3 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden aspect-[4/3]">
                          <img 
                            src={cert.image} 
                            alt={`${cert.name} Certificate`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          {/* Fallback placeholder */}
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center hidden">
                            <CheckBadgeIcon className="w-8 h-8 text-orange-500" />
                          </div>
                          
                          {/* View Button Overlay */}
                          <motion.button
                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
                            onClick={(e) => openCertificateModal(cert, e)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="text-white text-center">
                              <EyeIcon className="w-6 h-6 mx-auto mb-1" />
                              <span className="text-xs font-medium">View Full</span>
                            </div>
                          </motion.button>
                        </div>

                        {/* Compact Details */}
                        <div className="flex-1 space-y-2">
                          {/* Date & Duration */}
                          <div className="flex justify-between text-xs">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-3 h-3 text-orange-400" />
                              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                                {cert.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-3 h-3 text-orange-400" />
                              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                                {cert.duration}
                              </span>
                            </div>
                          </div>

                          {/* Skills (Limited) */}
                          <div>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className="px-1.5 py-0.5 bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                              {cert.skills.length > 3 && (
                                <span className="px-1.5 py-0.5 bg-gray-500/20 text-gray-600 dark:text-gray-400 rounded text-xs">
                                  +{cert.skills.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 pt-2">
                            <motion.button
                              onClick={(e) => openCertificateModal(cert, e)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-2 px-3 rounded-md flex items-center justify-center gap-1 font-medium"
                            >
                              <EyeIcon className="w-3 h-3" />
                              View Full Certificate
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls Below Certifications */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentCertPage(prev => Math.max(0, prev - 1))}
                disabled={currentCertPage === 0}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentCertPage === 0
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                }`}
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </motion.button>

              <div className="flex items-center gap-2">
                {Array.from({ length: Math.ceil(certifications.length / certificatesPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCertPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentCertPage === index
                        ? 'bg-orange-500 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentCertPage(prev => Math.min(Math.ceil(certifications.length / certificatesPerPage) - 1, prev + 1))}
                disabled={currentCertPage === Math.ceil(certifications.length / certificatesPerPage) - 1}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentCertPage === Math.ceil(certifications.length / certificatesPerPage) - 1
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                }`}
              >
                <ChevronRightIcon className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8 text-center"
            >
              Activities & Leadership
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(251, 146, 60, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 hover:border-orange-500/30' 
                      : 'bg-white border-gray-200 hover:border-orange-400/50'
                  }`}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg text-white shadow-lg"
                    >
                      {activity.icon}
                    </motion.div>
                    <motion.h4 
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                      className={`font-semibold transition-colors duration-300 ${
                        darkMode 
                          ? 'text-white group-hover:text-orange-300' 
                          : 'text-gray-900 group-hover:text-orange-600'
                      }`}
                    >
                      {activity.title}
                    </motion.h4>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.3 + (index * 0.1) }}
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {activity.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {showModal && selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCertificateModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl shadow-2xl ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`sticky top-0 z-10 px-6 py-4 border-b backdrop-blur-sm ${
              darkMode 
                ? 'bg-gray-900/90 border-gray-700' 
                : 'bg-white/90 border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedCertificate.name}
                  </h3>
                  <p className="text-orange-500 font-medium">
                    {selectedCertificate.issuer}
                  </p>
                </div>
                <motion.button
                  onClick={closeCertificateModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode 
                      ? 'hover:bg-gray-800 text-gray-400' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <XMarkIcon className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Certificate Image */}
              <div className="mb-6">
                <div className={`w-full rounded-xl overflow-hidden shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <img 
                    src={selectedCertificate.image} 
                    alt={`${selectedCertificate.name} Certificate`}
                    className="w-full h-auto object-contain max-h-[60vh]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden w-full h-64 flex items-center justify-center">
                    <div className="text-center">
                      <CheckBadgeIcon className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                      <p className={`text-lg font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Certificate Image Not Available
                      </p>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Please check the image path in the code
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Details Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Description
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {selectedCertificate.description}
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Skills Acquired
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Issue Date
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {selectedCertificate.date}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Duration
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {selectedCertificate.duration}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className={`text-sm font-mono ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {selectedCertificate.credentialId}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {selectedCertificate.verifyUrl && (
                      <motion.a
                        href={selectedCertificate.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        Verify Certificate
                      </motion.a>
                    )}
                    <motion.button
                      onClick={closeCertificateModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        darkMode 
                          ? 'border border-gray-600 text-gray-300 hover:bg-gray-800' 
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Education
