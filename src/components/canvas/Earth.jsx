import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
//helper lib of react-three
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

// can use ant 3-D Modal just replace it in the public folder with its .gltf file
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    //primitive helps put the scene into play with scaling and rotation etc
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  // we have the scene the modal now we have to put it in the Canvas(React -3/Fiber) to actually show....!!!!
  return (
    <Canvas
      shadows
      frameloop="always" // 👈 this makes it render every frame
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Suspense is for when the loading is happening */}
      <Suspense fallback={<CanvasLoader />}>
        {/* controls are given by Orbit control  */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* call in the earth component or any other one  */}
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
