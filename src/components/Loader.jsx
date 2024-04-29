import React from 'react'
import { Html } from '@react-three/drei'

// To render something which is not 3D inside Canvas(3D fiber element), we need to wrap that element around something which can help us avoid any issues we might face.
const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'>
          
        </div>
      </div>
    </Html>
  )
}

export default Loader