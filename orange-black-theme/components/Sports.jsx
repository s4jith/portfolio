import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  CheckBadgeIcon,
  ChevronDownIcon,
  XMarkIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const Sports = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [expandedSport, setExpandedSport] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [currentKaratePage, setCurrentKaratePage] = useState(0)
  const [currentSkatingPage, setCurrentSkatingPage] = useState(0)
  const [flippedCards, setFlippedCards] = useState(new Set())
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

  const sportsData = [
    {
      id: 'football',
      name: 'Football',
      icon: null,
      gradient: 'from-green-600 to-emerald-700',
      bgImage: null,
      achievement: {
        title: "Captain - 2019 5's Cup Match",
        status: "Runner Up",
        description: ""
      },
      certificates: [
        {
          name: "CS Trophy",
          issuer: "College Sports Committee",
          date: "03/11/2019",
          duration: "Tournament",
          skills: ["Team Leadership", "Strategic Planning", "Match Tactics"],
          description: "Led the team as Captain in the competitive 2019 5's Cup Tournament held at Sri Krishna College of Engineering and Technology, securing runner-up position through strategic gameplay and team coordination.",
          image: "/images/Certificate/Sports/Foot Ball/20251019_174242.jpg"
        }
      ]
    },
    {
      id: 'karate',
      name: 'Karate',
      icon: null,
      gradient: 'from-red-600 to-orange-600',
      bgImage: '/images/Certificate/Sports/Background/karate.jpg',
      categories: [
        {
          name: 'Belt',
          certificates: [
            {
              name: "Karate Belt Certification",
              issuer: "Karate Academy",
              date: "20/08/2018",
              duration: "1 Year Training",
              skills: ["Discipline", "Martial Arts", "Physical Fitness"],
              description: "Achieved belt certification through rigorous training and dedication. Demonstrated proficiency in various karate techniques, kata forms, and kumite sparring.",
              image: "/images/Certificate/Sports/Karate/Belt/20251019_173934.jpg"
            }
          ]
        },
        {
          name: 'Kata',
          certificates: [
            { name: "Kata Championship - Form 1", issuer: "State Karate Association", date: "10/01/2019", duration: "Competition", skills: ["Kata Forms", "Precision", "Technique"], description: "Participated in state-level Kata championship demonstrating excellent form and technique in traditional karate movements.", image: "/images/Certificate/Sports/Karate/Kata/img-1.jpg" },
            { name: "Kata Performance - Form 2", issuer: "District Karate Federation", date: "25/02/2019", duration: "Competition", skills: ["Form Mastery", "Balance", "Control"], description: "Showcased exceptional kata performance with precision movements and perfect balance in district-level competition.", image: "/images/Certificate/Sports/Karate/Kata/img-2.jpg" },
            { name: "Kata Excellence - Form 3", issuer: "Regional Karate Board", date: "15/04/2019", duration: "Competition", skills: ["Advanced Kata", "Timing", "Power"], description: "Achieved recognition for advanced kata execution with perfect timing and controlled power in regional championship.", image: "/images/Certificate/Sports/Karate/Kata/img-3.jpg" },
            { name: "Kata Tournament - Form 4", issuer: "National Karate Council", date: "30/06/2019", duration: "Competition", skills: ["Championship Kata", "Focus", "Stamina"], description: "Competed at national level showcasing championship-level kata performance with exceptional focus and stamina.", image: "/images/Certificate/Sports/Karate/Kata/img-4.jpg" },
            { name: "Kata Mastery - Form 5", issuer: "International Karate Organization", date: "20/09/2019", duration: "Competition", skills: ["Master Forms", "Perfection", "Artistry"], description: "Demonstrated master-level kata forms with perfection in technique and artistic presentation at international event.", image: "/images/Certificate/Sports/Karate/Kata/img-5.jpg" },
            { name: "Kata Championship - Form 6", issuer: "Elite Karate Federation", date: "10/12/2019", duration: "Competition", skills: ["Elite Performance", "Consistency", "Excellence"], description: "Achieved elite level recognition for consistent excellence in kata performance throughout the championship season.", image: "/images/Certificate/Sports/Karate/Kata/img-6.jpg" }
          ]
        },
        {
          name: 'Kumite',
          certificates: [
            { name: "Kumite Sparring Certificate", issuer: "Combat Sports Academy", date: "15/11/2019", duration: "Competition", skills: ["Sparring", "Combat Tactics", "Reflexes"], description: "Awarded for exceptional performance in kumite sparring competitions. Demonstrated advanced combat tactics, quick reflexes, and strategic fighting techniques.", image: "/images/Certificate/Sports/Karate/Kumite/20251019_173655.jpg" }
          ]
        }
      ]
    },
    {
      id: 'skating',
      name: 'Roller Skating',
      icon: null,
      gradient: 'from-yellow-500 to-orange-500',
      bgImage: '/images/Certificate/Sports/Background/skating.jpg',
      certificates: [
        { name: "Roller Skating Level 1", issuer: "Skating Sports Federation", date: "05/03/2017", duration: "3 Months", skills: ["Basic Skating", "Balance", "Coordination"], description: "Completed Level 1 roller skating certification demonstrating proficiency in basic skating techniques, balance control, and body coordination.", image: "/images/Certificate/Sports/Skating/img-1.jpg" },
        { name: "Roller Skating Level 2", issuer: "Skating Sports Federation", date: "10/07/2017", duration: "3 Months", skills: ["Advanced Moves", "Speed Control", "Turns"], description: "Achieved Level 2 certification with advanced skating moves, speed control techniques, and perfect execution of various turns and tricks.", image: "/images/Certificate/Sports/Skating/img-2.jpg" },
        { name: "Roller Skating Competition", issuer: "District Skating Association", date: "20/11/2017", duration: "Competition", skills: ["Competitive Skating", "Performance", "Agility"], description: "Participated in district-level roller skating competition showcasing competitive skating skills, performance quality, and exceptional agility.", image: "/images/Certificate/Sports/Skating/img-3.jpg" },
        { name: "Roller Skating Championship", issuer: "State Skating Board", date: "15/03/2018", duration: "Championship", skills: ["Championship Skills", "Endurance", "Precision"], description: "Competed in state championship demonstrating championship-level skills, remarkable endurance, and precision in advanced skating routines.", image: "/images/Certificate/Sports/Skating/img-4.jpg" }
      ]
    }
  ]

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert)
    setShowModal(true)
  }

  const closeCertificateModal = () => {
    setShowModal(false)
    setSelectedCertificate(null)
  }

  const toggleSport = (sportId) => {
    setExpandedSport(expandedSport === sportId ? null : sportId)
    setCurrentKaratePage(0)
    setCurrentSkatingPage(0)
  }

  // Get all karate certificates flattened
  const getAllKarateCertificates = () => {
    const karate = sportsData.find(s => s.id === 'karate')
    if (!karate || !karate.categories) return []
    return karate.categories.flatMap(cat => cat.certificates)
  }

  return (
    <section id="sports" className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Animated Background */}
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
              Sports & Athletics
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
              My journey in sports, showcasing achievements in Football, Karate, and Roller Skating
            </motion.p>
          </div>

          {/* Sports Cards */}
          <div className="space-y-6">
            {sportsData.map((sport, index) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                {/* Sport Header - Always Visible */}
                <motion.div
                  className={`relative cursor-pointer overflow-hidden ${
                    expandedSport === sport.id ? 'pb-6' : ''
                  }`}
                  onClick={() => toggleSport(sport.id)}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Background Image if available */}
                  {sport.bgImage && (
                    <div className="absolute inset-0">
                      <img
                        src={sport.bgImage}
                        alt={sport.name}
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${sport.gradient} opacity-80`}></div>
                    </div>
                  )}
                  
                  {/* Gradient Background for Football */}
                  {!sport.bgImage && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${sport.gradient}`}></div>
                  )}

                  <div className="relative p-8">
                    <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                              <CheckBadgeIcon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">
                                {sport.name}
                              </h3>
                              {sport.achievement && (
                                <p className="text-white/90 text-sm">
                                  {sport.achievement.title} - {sport.achievement.status}
                                </p>
                              )}
                            </div>
                          </div>
                      
                      <motion.div
                        animate={{ rotate: expandedSport === sport.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 bg-white/20 rounded-full"
                      >
                        <ChevronDownIcon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedSport === sport.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`p-8 pt-0 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        {/* Football - Flip Card Display */}
                        {sport.id === 'football' && sport.achievement && (
                          <div className="space-y-6">
                            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              {sport.achievement.description}
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {sport.certificates.map((cert, idx) => {
                                const certIndex = `football-${idx}`;
                                const isFlipped = flippedCards.has(certIndex);
                                
                                return (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative h-64 perspective-1000 cursor-pointer"
                                    onClick={() => toggleCard(certIndex)}
                                  >
                                    <motion.div
                                      className="relative w-full h-full transition-transform duration-700"
                                      style={{ 
                                        transformStyle: 'preserve-3d',
                                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                      }}
                                    >
                                      {/* Front Face */}
                                      <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg border bg-gray-800 border-orange-500/20 backface-hidden">
                                        <div className="p-6 h-full flex flex-col justify-between">
                                          <div className="flex justify-center mb-4">
                                            <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                                              <CheckBadgeIcon className="w-8 h-8 text-white" />
                                            </div>
                                          </div>
                                          <div className="text-center flex-grow flex flex-col justify-center">
                                            <h4 className="font-bold text-lg mb-2 text-white">{cert.name}</h4>
                                            <p className="text-orange-400 text-sm mb-1">{cert.issuer}</p>
                                          </div>
                                          <div className="text-center">
                                            <p className="text-sm text-gray-300 opacity-70">Click to view details</p>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Back Face */}
                                      <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg border bg-gray-800 border-orange-500/40 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                                        <div className="p-6 h-full flex flex-col">
                                          <div className="flex-grow overflow-y-auto">
                                            <div className="space-y-3">
                                              <div>
                                                <p className="text-xs text-orange-400 font-semibold mb-1">Date</p>
                                                <p className="text-sm text-white">{cert.date}</p>
                                              </div>
                                              <div>
                                                <p className="text-xs text-orange-400 font-semibold mb-1">Duration</p>
                                                <p className="text-sm text-white">{cert.duration}</p>
                                              </div>
                                              <div>
                                                <p className="text-xs text-orange-400 font-semibold mb-2">Skills</p>
                                                <div className="flex flex-wrap gap-1">
                                                  {cert.skills.slice(0, 3).map((skill, i) => (
                                                    <span key={i} className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                                                      {skill}
                                                    </span>
                                                  ))}
                                                </div>
                                              </div>
                                              <div>
                                                <p className="text-xs text-gray-400 leading-relaxed">
                                                  {cert.description.substring(0, 120)}...
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <button 
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              openCertificateModal(cert);
                                            }}
                                            className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                                          >
                                            <EyeIcon className="w-4 h-4" />
                                            View Certificate
                                          </button>
                                        </div>
                                      </div>
                                    </motion.div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Karate - Categorized Flip Card Display with Pagination */}
                        {sport.id === 'karate' && sport.categories && (
                          <div className="space-y-8">
                            {sport.categories.map((category, catIdx) => (
                              <div key={catIdx} className="space-y-4">
                                <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                  {category.name}
                                </h4>
                                
                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={currentKaratePage}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                  >
                                    {category.certificates
                                      .slice(currentKaratePage * certificatesPerPage, (currentKaratePage + 1) * certificatesPerPage)
                                      .map((cert, certIdx) => {
                                        const certIndex = `karate-${category.name}-${currentKaratePage * certificatesPerPage + certIdx}`;
                                        const isFlipped = flippedCards.has(certIndex);
                                        
                                        return (
                                          <motion.div
                                            key={certIdx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: certIdx * 0.1 }}
                                            className="relative h-64 perspective-1000 cursor-pointer"
                                            onClick={() => toggleCard(certIndex)}
                                          >
                                            <motion.div
                                              className="relative w-full h-full transition-transform duration-700"
                                              style={{ 
                                                transformStyle: 'preserve-3d',
                                                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                              }}
                                            >
                                              {/* Front Face */}
                                              <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg border bg-gray-800 border-orange-500/20 backface-hidden">
                                                <div className="p-6 h-full flex flex-col justify-between">
                                                  <div className="flex justify-center mb-4">
                                                    <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                                                      <CheckBadgeIcon className="w-8 h-8 text-white" />
                                                    </div>
                                                  </div>
                                                  <div className="text-center flex-grow flex flex-col justify-center">
                                                    <h4 className="font-bold text-lg mb-2 text-white">{cert.name}</h4>
                                                    <p className="text-orange-400 text-sm mb-1">{cert.issuer}</p>
                                                  </div>
                                                  <div className="text-center">
                                                    <p className="text-sm text-gray-300 opacity-70">Click to view details</p>
                                                  </div>
                                                </div>
                                              </div>

                                              {/* Back Face */}
                                              <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg border bg-gray-800 border-orange-500/40 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                                                <div className="p-6 h-full flex flex-col">
                                                  <div className="flex-grow overflow-y-auto">
                                                    <div className="space-y-3">
                                                      <div>
                                                        <p className="text-xs text-orange-400 font-semibold mb-1">Date</p>
                                                        <p className="text-sm text-white">{cert.date}</p>
                                                      </div>
                                                      <div>
                                                        <p className="text-xs text-orange-400 font-semibold mb-1">Duration</p>
                                                        <p className="text-sm text-white">{cert.duration}</p>
                                                      </div>
                                                      <div>
                                                        <p className="text-xs text-orange-400 font-semibold mb-2">Skills</p>
                                                        <div className="flex flex-wrap gap-1">
                                                          {cert.skills.slice(0, 3).map((skill, i) => (
                                                            <span key={i} className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                                                              {skill}
                                                            </span>
                                                          ))}
                                                        </div>
                                                      </div>
                                                      <div>
                                                        <p className="text-xs text-gray-400 leading-relaxed">
                                                          {cert.description.substring(0, 100)}...
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <button 
                                                    onClick={(e) => {
                                                      e.stopPropagation();
                                                      openCertificateModal(cert);
                                                    }}
                                                    className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                                                  >
                                                    <EyeIcon className="w-4 h-4" />
                                                    View Certificate
                                                  </button>
                                                </div>
                                              </div>
                                            </motion.div>
                                          </motion.div>
                                        );
                                      })}
                                  </motion.div>
                                </AnimatePresence>

                                {/* Pagination for Kata category only */}
                                {category.name === 'Kata' && category.certificates.length > certificatesPerPage && (
                                  <div className="flex items-center justify-center gap-4 mt-6">
                                    <motion.button
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        setCurrentKaratePage(prev => Math.max(0, prev - 1))
                                      }}
                                      disabled={currentKaratePage === 0}
                                      className={`p-3 rounded-full transition-all duration-300 ${
                                        currentKaratePage === 0
                                          ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                          : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                                      }`}
                                    >
                                      <ChevronLeftIcon className="w-6 h-6" />
                                    </motion.button>

                                    <div className="flex items-center gap-2">
                                      {Array.from({ length: Math.ceil(category.certificates.length / certificatesPerPage) }).map((_, index) => (
                                        <button
                                          key={index}
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            setCurrentKaratePage(index)
                                          }}
                                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            currentKaratePage === index
                                              ? 'bg-orange-500 w-8'
                                              : 'bg-gray-600 hover:bg-gray-500'
                                          }`}
                                        />
                                      ))}
                                    </div>

                                    <motion.button
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        setCurrentKaratePage(prev => Math.min(Math.ceil(category.certificates.length / certificatesPerPage) - 1, prev + 1))
                                      }}
                                      disabled={currentKaratePage === Math.ceil(category.certificates.length / certificatesPerPage) - 1}
                                      className={`p-3 rounded-full transition-all duration-300 ${
                                        currentKaratePage === Math.ceil(category.certificates.length / certificatesPerPage) - 1
                                          ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                          : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                                      }`}
                                    >
                                      <ChevronRightIcon className="w-6 h-6" />
                                    </motion.button>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Roller Skating - Flip Card Grid Display with Pagination */}
                        {sport.id === 'skating' && sport.certificates && (
                          <div className="space-y-6">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={currentSkatingPage}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                              >
                                {sport.certificates
                                  .slice(currentSkatingPage * certificatesPerPage, (currentSkatingPage + 1) * certificatesPerPage)
                                  .map((cert, idx) => {
                                    const certIndex = `skating-${currentSkatingPage * certificatesPerPage + idx}`;
                                    const isFlipped = flippedCards.has(certIndex);
                                    
                                    return (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative h-64 perspective-1000 cursor-pointer"
                                        onClick={() => toggleCard(certIndex)}
                                      >
                                        <motion.div
                                          className="relative w-full h-full transition-transform duration-700"
                                          style={{ 
                                            transformStyle: 'preserve-3d',
                                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                          }}
                                        >
                                          {/* Front Face */}
                                          <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg border bg-gray-800 border-orange-500/20 backface-hidden">
                                            <div className="p-6 h-full flex flex-col justify-between">
                                              <div className="flex justify-center mb-4">
                                                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                                                  <CheckBadgeIcon className="w-8 h-8 text-white" />
                                                </div>
                                              </div>
                                              <div className="text-center flex-grow flex flex-col justify-center">
                                                <h4 className="font-bold text-lg mb-2 text-white">{cert.name}</h4>
                                                <p className="text-orange-400 text-sm mb-1">{cert.issuer}</p>
                                              </div>
                                              <div className="text-center">
                                                <p className="text-sm text-gray-300 opacity-70">Click to view details</p>
                                              </div>
                                            </div>
                                          </div>

                                          {/* Back Face */}
                                          <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg border bg-gray-800 border-orange-500/40 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                                            <div className="p-6 h-full flex flex-col">
                                              <div className="flex-grow overflow-y-auto">
                                                <div className="space-y-3">
                                                  <div>
                                                    <p className="text-xs text-orange-400 font-semibold mb-1">Date</p>
                                                    <p className="text-sm text-white">{cert.date}</p>
                                                  </div>
                                                  <div>
                                                    <p className="text-xs text-orange-400 font-semibold mb-1">Duration</p>
                                                    <p className="text-sm text-white">{cert.duration}</p>
                                                  </div>
                                                  <div>
                                                    <p className="text-xs text-orange-400 font-semibold mb-2">Skills</p>
                                                    <div className="flex flex-wrap gap-1">
                                                      {cert.skills.slice(0, 3).map((skill, i) => (
                                                        <span key={i} className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                                                          {skill}
                                                        </span>
                                                      ))}
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <p className="text-xs text-gray-400 leading-relaxed">
                                                      {cert.description.substring(0, 100)}...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <button 
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  openCertificateModal(cert);
                                                }}
                                                className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                                              >
                                                <EyeIcon className="w-4 h-4" />
                                                View Certificate
                                              </button>
                                            </div>
                                          </div>
                                        </motion.div>
                                      </motion.div>
                                    );
                                  })}
                              </motion.div>
                            </AnimatePresence>

                            {/* Pagination Controls */}
                            {sport.certificates.length > certificatesPerPage && (
                              <div className="flex items-center justify-center gap-4 mt-8">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentSkatingPage(prev => Math.max(0, prev - 1))
                                  }}
                                  disabled={currentSkatingPage === 0}
                                  className={`p-3 rounded-full transition-all duration-300 ${
                                    currentSkatingPage === 0
                                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                                  }`}
                                >
                                  <ChevronLeftIcon className="w-6 h-6" />
                                </motion.button>

                                <div className="flex items-center gap-2">
                                  {Array.from({ length: Math.ceil(sport.certificates.length / certificatesPerPage) }).map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        setCurrentSkatingPage(index)
                                      }}
                                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentSkatingPage === index
                                          ? 'bg-orange-500 w-8'
                                          : 'bg-gray-600 hover:bg-gray-500'
                                      }`}
                                    />
                                  ))}
                                </div>

                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentSkatingPage(prev => Math.min(Math.ceil(sport.certificates.length / certificatesPerPage) - 1, prev + 1))
                                  }}
                                  disabled={currentSkatingPage === Math.ceil(sport.certificates.length / certificatesPerPage) - 1}
                                  className={`p-3 rounded-full transition-all duration-300 ${
                                    currentSkatingPage === Math.ceil(sport.certificates.length / certificatesPerPage) - 1
                                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                                  }`}
                                >
                                  <ChevronRightIcon className="w-6 h-6" />
                                </motion.button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showModal && selectedCertificate && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeCertificateModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeCertificateModal}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transition-colors duration-300"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedCertificate.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {selectedCertificate.description}
                </p>
                <div className="relative">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.name}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Sports
