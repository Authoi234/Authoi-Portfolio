import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 1}
         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [10, 3, 5] : [20, 3, 5],  // Better camera positions
        fov: isMobile ? 35 : 25
      }}
    //   camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        height: isMobile ? '50vh' : '60vh',  // Reduced canvas height
        width: '100%'
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
         <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={5}  // Minimum zoom distance
          maxDistance={20} // Maximum zoom distance
          maxPolarAngle={Math.PI}  // Full 180° vertical rotation
          minPolarAngle={0}  // Full 180° vertical rotation
          enableRotate={true}
          rotateSpeed={0.5}  // Slower rotation
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;