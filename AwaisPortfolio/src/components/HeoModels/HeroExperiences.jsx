import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import React from 'react'
import { Room } from './Room'
import Herolights from './Herolights'
import Particles from './Particles'

const HeroExperiences = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 900px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <Canvas camera={{position: [1, 0, 15], fov: 45}}>
     
     <Herolights/>
      <Particles count={150} />
      <OrbitControls 
           enablePan={true}
           enableZoom={!isTablet}
           maxDistance={20}
           minDistance={5}
           minPolarAngle={Math.PI / 5}
           maxPolarAngle={Math.PI / 2}
      />
        <group
          scale={isMobile? 0.7 :1}
          position={[0, -3.5, 0]}
          rotation={[0,-Math.PI /4,0]}
        ></group>
      <Room/>
      
    </Canvas>
  )
}

export default HeroExperiences
