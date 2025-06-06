
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 500;
  
  const geometry = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    return geometry;
  }, []);

  const velocities = useMemo(() => {
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return velocities;
  }, []);

  useFrame(() => {
    if (particlesRef.current && particlesRef.current.geometry) {
      const positionAttribute = particlesRef.current.geometry.attributes.position;
      const positions = positionAttribute.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        // Add mouse influence
        const mouseInfluence = 0.1;
        positions[i * 3] += velocities[i * 3] + mousePosition.x * mouseInfluence * 0.001;
        positions[i * 3 + 1] += velocities[i * 3 + 1] + mousePosition.y * mouseInfluence * 0.001;
        positions[i * 3 + 2] += velocities[i * 3 + 2];
        
        // Wrap around boundaries
        if (positions[i * 3] > 10) positions[i * 3] = -10;
        if (positions[i * 3] < -10) positions[i * 3] = 10;
        if (positions[i * 3 + 1] > 10) positions[i * 3 + 1] = -10;
        if (positions[i * 3 + 1] < -10) positions[i * 3 + 1] = 10;
      }
      
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial 
        size={0.05} 
        color="#7ccaff" 
        transparent 
        opacity={0.6}
      />
    </points>
  );
};

const ParticleField = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default ParticleField;
