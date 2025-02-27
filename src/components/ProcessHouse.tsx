import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const HouseModel = React.memo(({ stage, setStage }) => {
  const houseRef = useRef();

  const geometries = useMemo(() => ({
    foundation: new THREE.BoxGeometry(5, 0.5, 5),
    wall: new THREE.BoxGeometry(4, 2.5, 4),
    window: new THREE.BoxGeometry(0.8, 1, 0.1),
    roof: new THREE.ConeGeometry(3, 2, 4),
  }), []);

  const materials = useMemo(() => ({
    base: new THREE.MeshStandardMaterial({
      metalness: 0.5,
      roughness: 0.7,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: '#87CEEB',
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.7,
      envMapIntensity: 1,
    }),
  }), []);

  useFrame((state) => {
    if (!houseRef.current) return;
    const angle = state.pointer.x * Math.PI / 8;
    houseRef.current.rotation.y = THREE.MathUtils.lerp(
      houseRef.current.rotation.y,
      angle,
      0.1
    );
  });

  const stages = [
    {
      position: [-3, 2, 0],
      color: '#5190D2',
      title: 'Initial Consultation',
      description: 'Foundation Phase'
    },
    {
      position: [-3, 4, 0],
      color: '#5190D2',
      title: 'Planning & Design',
      description: 'Blueprint Stage'
    },
    {
      position: [-3, 6, 0],
      color: '#5190D2',
      title: 'Construction',
      description: 'Building Phase'
    },
    {
      position: [-3, 8, 0],
      color: '#5190D2',
      title: 'Project Delivery',
      description: 'Final Touches'
    }
  ];

  return (
    <group ref={houseRef}>
      {/* Foundation */}
      <mesh 
        position={[0, -0.25, 0]} 
        onClick={() => setStage(0)}
        receiveShadow
        castShadow
      >
        <boxGeometry args={[5, 0.5, 5]} />
        <meshStandardMaterial 
          color={stage === 0 ? '#5190D2' : '#666'} 
          metalness={0.5}
          roughness={0.7}
        />
      </mesh>

      {/* Main Structure - First Floor */}
      <group position={[0, 1.25, 0]} onClick={() => setStage(1)}>
        {/* Walls */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[4, 2.5, 4]} />
          <meshStandardMaterial 
            color={stage === 1 ? '#5190D2' : '#e0e0e0'}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        {/* Windows */}
        {[[-2, 0, 0], [2, 0, 0], [0, 0, 2], [0, 0, -2]].map((pos, i) => (
          <mesh key={i} position={pos} receiveShadow castShadow>
            <boxGeometry args={[0.8, 1, 0.1]} />
            <meshPhysicalMaterial 
              color="#87CEEB"
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.7}
              envMapIntensity={1}
            />
          </mesh>
        ))}
      </group>

      {/* Second Floor */}
      <group position={[0, 3.75, 0]} onClick={() => setStage(2)}>
        {/* Main Structure */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[4, 2.5, 4]} />
          <meshStandardMaterial 
            color={stage === 2 ? '#5190D2' : '#e0e0e0'}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        {/* Balcony */}
        <mesh position={[0, 0, 2.2]} receiveShadow castShadow>
          <boxGeometry args={[2, 0.1, 0.4]} />
          <meshStandardMaterial color="#999" />
        </mesh>

        {/* Windows */}
        {[[-1.5, 0, 0], [1.5, 0, 0]].map((pos, i) => (
          <mesh key={i} position={pos} receiveShadow castShadow>
            <boxGeometry args={[0.8, 1, 0.1]} />
            <meshPhysicalMaterial 
              color="#87CEEB"
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.7}
              envMapIntensity={1}
            />
          </mesh>
        ))}
      </group>

      {/* Roof */}
      <group position={[0, 5.5, 0]} onClick={() => setStage(3)}>
        {/* Main Roof */}
        <mesh receiveShadow castShadow>
          <coneGeometry args={[3, 2, 4]} />
          <meshStandardMaterial 
            color={stage === 3 ? '#5190D2' : '#8B4513'}
            metalness={0.3}
            roughness={0.8}
          />
        </mesh>

        {/* Roof Details */}
        <mesh position={[0, 0.5, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[0.3, 0.3, 1, 8]} />
          <meshStandardMaterial color="#666" />
        </mesh>
      </group>

      {/* Door */}
      <mesh position={[0, 0.75, 2]} receiveShadow castShadow>
        <boxGeometry args={[1, 1.5, 0.1]} />
        <meshStandardMaterial 
          color="#8B4513"
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>

      {/* Steps */}
      {[0.3, 0.6].map((y, i) => (
        <mesh key={i} position={[0, y/3, 2.3 + i * 0.3]} receiveShadow castShadow>
          <boxGeometry args={[1.5, 0.2, 0.3]} />
          <meshStandardMaterial color="#999" />
        </mesh>
      ))}

      {/* Stage Labels */}
      {stages.map((s, index) => (
        <Text
          key={index}
          position={s.position}
          fontSize={0.3}
          color={stage === index ? s.color : 'white'}
          anchorX="left"
          anchorY="middle"
        >
          {s.title}
        </Text>
      ))}
    </group>
  );
});

const ProcessHouse = () => {
  const [stage, setStage] = useState(0);

  const staticElements = useMemo(() => (
    <>
      <color attach="background" args={['#1a1a1a']} />
      <ambientLight intensity={0.5} />
      <pointLight 
        position={[10, 10, 10]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <gridHelper args={[20, 20, '#4d4d4d', '#4d4d4d']} />
    </>
  ), []);

  return (
    <div className="relative h-[600px] w-full">
      <Canvas
        shadows
        camera={{ position: [10, 10, 10], fov: 45 }}
        className="w-full h-full"
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {staticElements}
          <HouseModel stage={stage} setStage={setStage} />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>

      {/* Stage Information Overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-2">
            {['Initial Consultation', 'Planning & Design', 'Construction', 'Project Delivery'][stage]}
          </h3>
          <p className="text-gray-200">
            {[
              'We discuss your vision, requirements, and project scope.',
              'Detailed project planning and architectural design phase.',
              'Expert execution with regular quality checks and updates.',
              'Final inspections and handover of your completed project.'
            ][stage]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessHouse; 