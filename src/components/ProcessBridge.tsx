import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const BridgeModel = React.memo(({ stage, setStage }) => {
  const bridgeRef = useRef();

  // Define enhanced materials for more realism
  const materials = useMemo(() => ({
    // Concrete with subtle texture and variations
    concrete: new THREE.MeshStandardMaterial({ 
      color: '#D3D0CB', 
      roughness: 0.9,
      metalness: 0.05,
      flatShading: false
    }),
    // Slightly darker concrete for shadows and variations
    concreteDark: new THREE.MeshStandardMaterial({ 
      color: '#B8B5B0', 
      roughness: 0.85,
      metalness: 0.05
    }),
    // Railing material
    railing: new THREE.MeshStandardMaterial({ 
      color: '#CDCAC5', 
      roughness: 0.7,
      metalness: 0.05
    }),
    // Material for ground/raft
    raft: new THREE.MeshStandardMaterial({
      color: '#A8A49F',
      roughness: 0.95,
      metalness: 0.05
    }),
    // Text material
    text: new THREE.MeshStandardMaterial({
      color: '#222222',
      roughness: 0.5
    })
  }), []);

  useFrame((state) => {
    if (!bridgeRef.current) return;
    const angle = state.pointer.x * Math.PI / 8;
    bridgeRef.current.rotation.y = THREE.MathUtils.lerp(
      bridgeRef.current.rotation.y,
      angle,
      0.1
    );
  });

  // Create wear and weathering texture
  const textureCreator = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Fill with base color
    ctx.fillStyle = '#D3D0CB';
    ctx.fillRect(0, 0, 512, 512);
    
    // Add noise for concrete texture
    for (let i = 0; i < 15000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = Math.random() * 2 + 1;
      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.07})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Add some stains
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = Math.random() * 50 + 10;
      ctx.fillStyle = `rgba(120,120,110,${Math.random() * 0.1})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  };
  
  // Apply texture to materials
  const concreteTexture = useMemo(textureCreator, []);
  materials.concrete.map = concreteTexture;

  // Memoize serration positions to prevent flickering
  const frontSerrationPositions = useMemo(() => 
    Array.from({ length: 5 }).map((_, i) => ([-9.5, 1.2, -2 + i]))
  , []);

  const backSerrationPositions = useMemo(() => 
    Array.from({ length: 5 }).map((_, i) => ([9.5, 1.2, -2 + i]))
  , []);

  return (
    <group ref={bridgeRef}>
      {/* Raft/Foundation */}
      <mesh position={[0, -4, 0]} receiveShadow castShadow>
        <boxGeometry args={[24, 0.8, 9]} />
        <meshStandardMaterial {...materials.raft} />
      </mesh>

      {/* Label for Raft */}
      <Text 
        position={[8, -4, 4.6]} 
        fontSize={0.4} 
        color="black" 
        anchorX="center" 
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        RAFT
      </Text>
      
      {/* Piers/Support Columns */}
      <mesh position={[-7, -1, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1, 1.2, 6, 32]} />
        <meshStandardMaterial {...materials.concreteDark} map={concreteTexture} />
      </mesh>
      <mesh position={[7, -1, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1, 1.2, 6, 32]} />
        <meshStandardMaterial {...materials.concreteDark} map={concreteTexture} />
      </mesh>

      {/* Labels for Piers */}
      <Text 
        position={[-7, -1, 3]} 
        fontSize={0.4} 
        color="black" 
        anchorX="center" 
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        PIER
      </Text>
      
      <Text 
        position={[7, -1, 3]} 
        fontSize={0.4} 
        color="black" 
        anchorX="center" 
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        PIER
      </Text>

      {/* Girders (underneath structure) */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[0, 1.1, -2 + i]} receiveShadow castShadow>
          <boxGeometry args={[19, 0.3, 0.6]} />
          <meshStandardMaterial {...materials.concrete} map={concreteTexture} />
        </mesh>
      ))}
      
      {/* Label for Girders */}
      <Text 
        position={[-8, 1.1, 0]} 
        fontSize={0.4} 
        color="black" 
        anchorX="center" 
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        GIRDERS
      </Text>

      {/* Main Bridge Deck (Slab) */}
      <mesh position={[0, 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[20, 1.2, 5]} />
        <meshStandardMaterial {...materials.concrete} map={concreteTexture} />
      </mesh>
      
      {/* Label for Slab */}
      <Text 
        position={[0, 2, -3]} 
        fontSize={0.4} 
        color="black" 
        anchorX="center" 
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        SLAB
      </Text>

      {/* Front side serrations */}
      {frontSerrationPositions.map((position, i) => (
        <mesh key={`front-${i}`} position={position} receiveShadow castShadow>
          <boxGeometry args={[1, 0.8, 0.6]} />
          <meshStandardMaterial {...materials.concreteDark} map={concreteTexture} />
        </mesh>
      ))}
      
      {/* Back side serrations */}
      {backSerrationPositions.map((position, i) => (
        <mesh key={`back-${i}`} position={position} receiveShadow castShadow>
          <boxGeometry args={[1, 0.8, 0.6]} />
          <meshStandardMaterial {...materials.concreteDark} map={concreteTexture} />
        </mesh>
      ))}

      {/* Top Cantilever Section */}
      <mesh position={[0, 3.1, 0]} receiveShadow castShadow>
        <boxGeometry args={[22, 1, 5.5]} />
        <meshStandardMaterial {...materials.concrete} map={concreteTexture} />
      </mesh>

      {/* Top Edge Railings */}
      {/* Left side railings */}
      {Array.from({ length: 11 }).map((_, i) => (
        <mesh key={`left-${i}`} position={[-10 + i*2, 3.6, -2.5]} receiveShadow castShadow>
          <boxGeometry args={[0.3, 1, 0.3]} />
          <meshStandardMaterial {...materials.railing} map={concreteTexture} />
        </mesh>
      ))}
      
      {/* Right side railings */}
      {Array.from({ length: 11 }).map((_, i) => (
        <mesh key={`right-${i}`} position={[-10 + i*2, 3.6, 2.5]} receiveShadow castShadow>
          <boxGeometry args={[0.3, 1, 0.3]} />
          <meshStandardMaterial {...materials.railing} map={concreteTexture} />
        </mesh>
      ))}
      
      {/* Horizontal top rails */}
      <mesh position={[0, 4.1, -2.5]} receiveShadow castShadow>
        <boxGeometry args={[22, 0.2, 0.3]} />
        <meshStandardMaterial {...materials.railing} map={concreteTexture} />
      </mesh>
      
      <mesh position={[0, 4.1, 2.5]} receiveShadow castShadow>
        <boxGeometry args={[22, 0.2, 0.3]} />
        <meshStandardMaterial {...materials.railing} map={concreteTexture} />
      </mesh>
      
      {/* Label for Railing */}
      <Text 
        position={[10, 3.8, -2.5]} 
        fontSize={0.4} 
        color="black" 
        anchorX="center" 
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        RAILING
      </Text>

      {/* Bridge Label */}
      <Text position={[0, 4.8, 0]} fontSize={0.5} color="black" anchorX="center" anchorY="middle">
        Concrete Bridge Model
      </Text>
    </group>
  );
});

const ProcessBridge = () => {
  const [stage, setStage] = useState(0);

  const staticElements = useMemo(() => (
    <>
      <color attach="background" args={['#1a1a1a']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <spotLight 
        position={[-10, 15, 0]} 
        angle={0.3} 
        penumbra={0.8} 
        intensity={0.8} 
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
          <BridgeModel stage={stage} setStage={setStage} />
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
            {['Bridge Construction'][stage]}
          </h3>
          <p className="text-gray-200">
            {'Building a strong and reliable concrete bridge with quality materials and expert engineering.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessBridge;