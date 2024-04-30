import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

// Build your scene declaratively with re-usable, self-contained components that react to state, are readily interactive and can participate in React's ecosystem.
const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    // w-full => 100% of width
    // h-screen => 100vh of screen
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'> 
        {/* // Top part that shows the active area */}
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      {/* Canvas is a root component that sets up our entire 3D scene. */}
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        // Object neared than 0.1 wont be rendered and farther than 1000 also wont be rendered
        camera={ { near: 0.1, far: 1000 } }
      >
        {/* Used for rendering the loading screen */}
        <Suspense fallback={<Loader />}>
          {/* 5 different types of lights necessary to make things work in a way you want to light up the scene basically */}
          {/* Fox's island from https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907 download in GLB and then to
            make it compatible in react you need to convert it -> gltf.pmnd.rs -> this creates glb files into react components.
          */}
          {/* directionalLight -> Simulates the light coming from a distance source like from the sun. 
            play with the array to know more how light affects the overall scene representation.
          */}
          <directionalLight 
            position={[1, 1, 1]}
            intensity={2}
          />
          {/* 
            ambientLight -> illuminates all objects in the scene equally without casting shadows.
            So, no need for position.
          */}
          <ambientLight intensity={0.5} />
          {/* pointLight -> Emits light in all direction from a single point.
            In this scene we don't need it so, we can remove it as we are outside and for that we have sun and ambient light.
          */}
          {/* <pointLight /> */}
          {/* spotLight -> Similar to point light. You can give it an angle as well as its in a shape of a cone. */}
          {/* <spotLight /> */}
          {/* hemisphereLight -> It illuminates the scene with the gradient color. */}
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={1} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
            planePosition={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home