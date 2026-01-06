import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const MouseTrail = ({ enabled = true, particleCount = 15 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState([])

  useEffect(() => {
    if (!enabled) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      setTrail(prevTrail => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, id: Date.now() },
          ...prevTrail.slice(0, particleCount - 1)
        ]
        return newTrail
      })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [enabled, particleCount])

  if (!enabled) return null

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ 
            scale: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default MouseTrail
