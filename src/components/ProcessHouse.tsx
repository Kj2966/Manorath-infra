import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const HouseModel = React.memo(({ stage, setStage }) => {
  const houseRef = useRef();

  const materials = useMemo(() => ({
    walls: new THREE.MeshStandardMaterial({
      color: '#e8e3d9', // Beige color
      metalness: 0.1,
      roughness: 0.8,
    }),
    roof: new THREE.MeshStandardMaterial({
      color: '#8B4513', // Saddle brown for roof
      metalness: 0.3,
      roughness: 0.7,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: '#2196f3',
      metalness: 0.9,
      roughness: 0.05,
      transparent: true,
      opacity: 0.6,
      envMapIntensity: 2.0,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    }),
    garage: new THREE.MeshStandardMaterial({
      color: '#d3d3d3', // Light gray
      metalness: 0.4,
      roughness: 0.6,
    }),
    trim: new THREE.MeshStandardMaterial({
      color: '#ffffff', // White
      metalness: 0.2,
      roughness: 0.5,
    }),
    door: new THREE.MeshStandardMaterial({
      color: '#8B0000',
      metalness: 0.3,
      roughness: 0.7,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
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
      {/* Foundation - Reduced size */}
      <group position={[0, -0.8, 0]} onClick={() => setStage(0)}>
        {/* Main Foundation */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[6, 1.2, 5]} /> {/* Reduced from [9, 1.5, 7.5] */}
          <meshStandardMaterial 
            color={stage === 0 ? '#5190D2' : '#2a2a2a'} 
          />
        </mesh>
        
        {/* Foundation Details */}
        {[[-2.5, 2], [2.5, 2], [-2.5, -2], [2.5, -2]].map(([x, z], i) => (
          <mesh key={i} position={[x, 0, z]} receiveShadow castShadow>
            <cylinderGeometry args={[0.2, 0.3, 1.2, 8]} />
            <meshStandardMaterial {...materials.foundation} />
          </mesh>
        ))}
      </group>

      {/* Ground Level Platform */}
      <mesh position={[0, -0.2, 0]} receiveShadow castShadow>
        <boxGeometry args={[6, 0.3, 5]} /> {/* Reduced from [9, 0.4, 7.5] */}
        <meshStandardMaterial 
          color="#616161"
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>

      {/* First Floor - Reduced Size */}
      <group position={[0, 1, 0]} onClick={() => setStage(1)}> {/* Adjusted Y position */}
        {/* Main Structure */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[5.5, 2.2, 4.5]} /> {/* Reduced from [8, 2.8, 7] */}
          <meshStandardMaterial 
            color={stage === 1 ? '#5190D2' : materials.walls.color}
            {...materials.walls}
          />
        </mesh>

        {/* Garage */}
        <group position={[-1.5, -0.2, 0]}>
          <mesh receiveShadow castShadow>
            <boxGeometry args={[2.5, 2, 4.5]} /> {/* Reduced from [4, 2.4, 7] */}
            <meshStandardMaterial {...materials.walls} />
          </mesh>
          {/* Garage Door */}
          <mesh position={[0, -0.2, 2.26]} receiveShadow castShadow>
            <boxGeometry args={[2.2, 1.6, 0.1]} /> {/* Reduced from [3.5, 2, 0.1] */}
            <meshStandardMaterial {...materials.garage} />
          </mesh>
        </group>

        {/* Front Door */}
        <mesh position={[1.5, -0.3, 2.27]} receiveShadow castShadow>
          <boxGeometry args={[0.9, 1.8, 0.1]} />
          <meshStandardMaterial {...materials.door} />
        </mesh>

        {/* Windows - First Floor */}
        {[
          [1.5, 0, 2.26], // Front window
          [1.5, 0, -2.26], // Back window
          [2.75, 0, 0], // Side window
        ].map((pos, i) => (
          <mesh key={i} position={pos} receiveShadow castShadow>
            <boxGeometry args={[0.9, 1.2, 0.1]} /> {/* Reduced from [1.2, 1.4, 0.1] */}
            <meshPhysicalMaterial {...materials.glass} />
          </mesh>
        ))}
      </group>

      {/* Second Floor - Reduced Size */}
      <group position={[0, 3.2, 0]} onClick={() => setStage(2)}> {/* Adjusted Y position */}
        {/* Main Structure */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[5.5, 2.2, 4.5]} /> {/* Reduced from [8, 2.8, 7] */}
          <meshStandardMaterial 
            color={stage === 2 ? '#5190D2' : materials.walls.color}
            {...materials.walls}
          />
        </mesh>

        {/* Balcony */}
        <group position={[0, -0.2, 2.31]}>
          <mesh receiveShadow castShadow>
            <boxGeometry args={[3, 0.2, 1]} />
            <meshStandardMaterial {...materials.trim} />
          </mesh>
          <mesh position={[0, 0.4, 0.45]} receiveShadow castShadow>
            <boxGeometry args={[2.8, 0.8, 0.08]} />
            <meshPhysicalMaterial {...materials.glass} />
          </mesh>
          {[-1.35, 1.35].map((x) => (
            <mesh key={x} position={[x, 0.4, 0.45]} receiveShadow castShadow>
              <boxGeometry args={[0.08, 0.8, 0.08]} />
              <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.5} />
            </mesh>
          ))}
        </group>

        {/* Windows - Second Floor */}
        {[
          [-1.5, 0, 2.28], [1.5, 0, 2.28],
          [-1.5, 0, -2.28], [1.5, 0, -2.28],
          [-2.76, 0, 0], [2.76, 0, 0],
        ].map((pos, i) => (
          <mesh key={i} position={pos} receiveShadow castShadow>
            <boxGeometry args={[0.9, 1.2, 0.1]} />
            <meshPhysicalMaterial {...materials.glass} />
          </mesh>
        ))}
      </group>

      {/* Hip Roof - Reduced Size */}
      <group position={[0, 4.6, 0]} onClick={() => setStage(3)}> {/* Adjusted Y position */}
        {/* Main Roof */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[6, 0.2, 5]} /> {/* Reduced from [8.5, 0.2, 7.5] */}
          <meshStandardMaterial {...materials.roof} />
        </mesh>
        
        {/* Roof Slopes */}
        {[
          { pos: [0, 0.6, 0], size: [5, 1.2, 4] }, // Center
          { pos: [-2.75, 0.3, 0], size: [0.8, 0.6, 4], rot: [0, 0, Math.PI / 4] }, // Left
          { pos: [2.75, 0.3, 0], size: [0.8, 0.6, 4], rot: [0, 0, -Math.PI / 4] }, // Right
          { pos: [0, 0.3, 2.25], size: [5, 0.6, 0.8], rot: [Math.PI / 4, 0, 0] }, // Front
          { pos: [0, 0.3, -2.25], size: [5, 0.6, 0.8], rot: [-Math.PI / 4, 0, 0] }, // Back
        ].map((config, i) => (
          <mesh
            key={i}
            position={config.pos}
            rotation={config.rot || [0, 0, 0]}
            receiveShadow
            castShadow
          >
            <boxGeometry args={config.size} />
            <meshStandardMaterial {...materials.roof} />
          </mesh>
        ))}
      </group>

      {/* Stage Labels - Adjusted positions */}
      {[
        { title: 'Strong Foundation', y: -0.8 },
        { title: 'Design Excellence', y: 1 },
        { title: 'Premium Construction', y: 3.2 },
        { title: 'Luxury Finishing', y: 4.6 }
      ].map((s, index) => (
        <Text
          key={index}
          position={[-4, s.y, 0]}
          fontSize={0.25}
          color={stage === index ? '#5190D2' : 'white'}
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
        camera={{ position: [12, 6, 12], fov: 45 }}
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
      <div className="absolute bottom-8 left-8 w-full max-w-sm">
        <div className="bg-gradient-to-r from-[#1a1a1a]/90 to-transparent p-6 rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-2 text-[#5190D2]">
            {['Foundation Phase', 'Design Excellence', 'Premium Construction', 'Luxury Finishing'][stage]}
          </h3>
          <p className="text-gray-200">
            {[
              'Building on a strong foundation with quality materials and expert engineering.',
              'Creating architectural masterpieces with attention to every detail.',
              'Premium construction with finest materials and craftsmanship.',
              'Luxury finishing touches that define excellence.'
            ][stage]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessHouse; 