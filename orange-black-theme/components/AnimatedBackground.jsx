import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedBackground = ({ pattern = 'dots', intensity = 'medium', color = 'blue' }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'from-blue-500/10 to-purple-500/10'
      case 'green':
        return 'from-green-500/10 to-cyan-500/10'
      case 'purple':
        return 'from-purple-500/10 to-pink-500/10'
      case 'orange':
        return 'from-orange-500/10 to-red-500/10'
      default:
        return 'from-orange-500/10 to-red-500/10'
    }
  }

  const getIntensityCount = () => {
    switch (intensity) {
      case 'low': return 20
      case 'medium': return 40
      case 'high': return 60
      default: return 40
    }
  }

  const renderDots = () => {
    const count = getIntensityCount()
    const dots = []

    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100
      const y = Math.random() * 100
      const delay = Math.random() * 5
      const duration = 3 + Math.random() * 4

      dots.push(
        <motion.div
          key={i}
          className={`absolute w-1 h-1 bg-gradient-to-r ${getColorClasses()} rounded-full`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )
    }

    return dots
  }

  const renderLines = () => {
    const count = Math.floor(getIntensityCount() / 4)
    const lines = []

    for (let i = 0; i < count; i++) {
      const isHorizontal = Math.random() > 0.5
      const position = Math.random() * 100
      const length = 10 + Math.random() * 20
      const delay = Math.random() * 3
      const duration = 2 + Math.random() * 3

      lines.push(
        <motion.div
          key={i}
          className={`absolute bg-gradient-to-r ${getColorClasses()}`}
          style={
            isHorizontal
              ? {
                  top: `${position}%`,
                  left: `${Math.random() * 80}%`,
                  width: `${length}%`,
                  height: '1px',
                }
              : {
                  left: `${position}%`,
                  top: `${Math.random() * 80}%`,
                  height: `${length}%`,
                  width: '1px',
                }
          }
          animate={{
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )
    }

    return lines
  }

  const renderCircles = () => {
    const count = Math.floor(getIntensityCount() / 2)
    const circles = []

    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100
      const y = Math.random() * 100
      const size = 20 + Math.random() * 100
      const delay = Math.random() * 4
      const duration = 4 + Math.random() * 6

      circles.push(
        <motion.div
          key={i}
          className={`absolute border border-gradient-to-r ${getColorClasses().replace('/10', '/20')} rounded-full`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderColor: color === 'blue' ? 'rgba(59, 130, 246, 0.2)' : 
                        color === 'orange' ? 'rgba(249, 115, 22, 0.2)' : 
                        'rgba(139, 92, 246, 0.2)'
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )
    }

    return circles
  }

  const renderWaves = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${getColorClasses()}`}
          style={{
            clipPath: 'polygon(0 80%, 100% 60%, 100% 100%, 0% 100%)'
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute inset-0 bg-gradient-to-l ${getColorClasses()}`}
          style={{
            clipPath: 'polygon(0 70%, 100% 90%, 100% 100%, 0% 100%)'
          }}
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    )
  }

  const renderPattern = () => {
    switch (pattern) {
      case 'dots':
        return renderDots()
      case 'lines':
        return renderLines()
      case 'circles':
        return renderCircles()
      case 'waves':
        return renderWaves()
      default:
        return renderDots()
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {renderPattern()}
    </div>
  )
}

export default AnimatedBackground
