import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating}) => {

  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    // In this mesh we will be going to use primitive elements.
    // Island isn't a primitive element, it contains alot of meshes that together creates the island.
    // We need to do it this way as we need to interact with it - Drag, Play, Scroll, etc.
    <mesh ref={skyRef}>
        {/* Why can't we use simple image as a background instead of a scene?
            The reason is - when we interact with the island, when we scroll it we also want the background the clouds to move along.
            With simple image it wont work that way.
        */}
        {/* Use the primitive element when you want to directly embed a complex 3D
      model or scene */}
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky