import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, OrbitControls } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

// Animated particle system
const Stars = (props) => {
  const ref = useRef()
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f97316"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Floating geometric shapes
const FloatingShape = ({ position, color = "#8b5cf6", speed = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.1, 0]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  )
}

// Animated wave grid
const WaveGrid = () => {
  const meshRef = useRef()
  const count = 50

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      const positions = meshRef.current.geometry.attributes.position.array

      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          const index = (i * count + j) * 3
          const x = (i - count / 2) * 0.1
          const z = (j - count / 2) * 0.1
          
          positions[index + 1] = Math.sin(x * 2 + time) * 0.1 + Math.cos(z * 2 + time) * 0.1
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const positions = useMemo(() => {
    const positions = new Float32Array(count * count * 3)
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3
        positions[index] = (i - count / 2) * 0.1     // x
        positions[index + 1] = 0                     // y
        positions[index + 2] = (j - count / 2) * 0.1 // z
      }
    }
    return positions
  }, [])

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#f97316" size={0.01} transparent opacity={0.3} />
    </points>
  )
}

// Main 3D Background Component
const ThreeDBackground = ({ 
  showParticles = true, 
  showShapes = false, 
  showWaveGrid = false,
  interactive = false,
  className = ""
}) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: -1 }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {showParticles && <Stars />}
          
          {showShapes && (
            <>
              <FloatingShape position={[-1, 0.5, -0.5]} color="#f97316" speed={0.8} />
              <FloatingShape position={[1, -0.3, -0.3]} color="#dc2626" speed={1.2} />
              <FloatingShape position={[0.5, 0.8, -0.8]} color="#ea580c" speed={0.6} />
              <FloatingShape position={[-0.8, -0.5, -0.6]} color="#f59e0b" speed={1.5} />
            </>
          )}
          
          {showWaveGrid && <WaveGrid />}
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          {interactive && <OrbitControls enableZoom={false} enablePan={false} />}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeDBackground
