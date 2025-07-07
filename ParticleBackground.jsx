import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 2000 }) {
  const mesh = useRef();
  const light = useRef();

  // Generate random positions for particles
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 20;
      temp[i3 + 1] = (Math.random() - 0.5) * 20;
      temp[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return temp;
  }, [count]);

  // Animate particles
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.y = time * 0.05;
      
      // Update particle positions for floating effect
      const positions = mesh.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }

    if (light.current) {
      light.current.position.x = Math.sin(time) * 5;
      light.current.position.z = Math.cos(time) * 5;
    }
  });

  return (
    <group>
      <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7042f8"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <pointLight ref={light} distance={40} intensity={8} color="#e879f9" />
    </group>
  );
}

function FloatingGeometry() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.2;
      mesh.current.rotation.y = time * 0.1;
      mesh.current.position.y = Math.sin(time) * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={[3, 0, -5]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

function ParticleBackground({ className = "" }) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}

export default ParticleBackground;

