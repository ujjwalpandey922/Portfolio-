import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ device }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  // Responsive configs
  const config = {
    mobile: {
      scale: 0.25,
      position: [0, -1, -0.2],
    },
    tablet: {
      scale: 0.45,
      position: [0, -2.1, -0.8],
    },
    desktop: {
      scale: 0.85,
      position: [0, -3.25, -1.5],
    },
  };

  const { scale, position } = config[device];

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
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
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 600px)');
    const tabletQuery = window.matchMedia(
      '(max-width: 1024px) and (min-width: 601px)'
    );

    const handleDeviceChange = () => {
      if (mobileQuery.matches) {
        setDevice('mobile');
      } else if (tabletQuery.matches) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    // Initial check
    handleDeviceChange();

    // Add listeners
    mobileQuery.addEventListener('change', handleDeviceChange);
    tabletQuery.addEventListener('change', handleDeviceChange);

    // Cleanup
    return () => {
      mobileQuery.removeEventListener('change', handleDeviceChange);
      tabletQuery.removeEventListener('change', handleDeviceChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers device={device} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
