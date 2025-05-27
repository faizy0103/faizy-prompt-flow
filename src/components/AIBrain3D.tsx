
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const RotatingBrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#0c94ee"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive="#0c94ee"
          emissiveIntensity={0.3}
        />
      </Sphere>
      {/* Neural connections */}
      {[...Array(20)].map((_, i) => (
        <Sphere key={i} args={[0.02, 8, 8]} position={[
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3
        ]}>
          <meshBasicMaterial color="#7ccaff" />
        </Sphere>
      ))}
    </Float>
  );
};

const AIBrain3D = () => {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0c94ee" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7ccaff" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.5} fade speed={1} />
        <RotatingBrain />
      </Canvas>
    </div>
  );
};

export default AIBrain3D;
