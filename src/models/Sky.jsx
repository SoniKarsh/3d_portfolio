import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '../assets/3d/sky.glb'

const Sky = () => {

    const sky = useGLTF(skyScene);
  return (
    // In this mesh we will be going to use primitive elements.
    // Island isn't a primitive element, it contains alot of meshes that together creates the island.
    // We need to do it this way as we need to interact with it - Drag, Play, Scroll, etc.
    <mesh>
        {/* Why can't we use simple image as a background instead of a scene?
            The reason is - when we interact with the island, when we scroll it we also want the background the clouds to move along.
            With simple image it wont work that way.
        */}
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky