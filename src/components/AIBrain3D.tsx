
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingBrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const smallSpheresRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
    
    if (smallSpheresRef.current) {
      smallSpheresRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      {/* Main brain sphere */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhongMaterial
          color="#0c94ee"
          shininess={100}
          emissive="#0c94ee"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Neural connections */}
      <group ref={smallSpheresRef}>
        {[...Array(20)].map((_, i) => (
          <mesh 
            key={i} 
            position={[
              (Math.random() - 0.5) * 3,
              (Math.random() - 0.5) * 3,
              (Math.random() - 0.5) * 3
            ]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#7ccaff" />
          </mesh>
        ))}
      </group>
    </>
  );
};

const AIBrain3D = () => {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0c94ee" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7ccaff" />
        <RotatingBrain />
      </Canvas>
    </div>
  );
};

export default AIBrain3D;
