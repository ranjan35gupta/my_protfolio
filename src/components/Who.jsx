import React from 'react'
import styled from 'styled-components'
import './who.css'
import {AiOutlineLine} from 'react-icons/ai'
import { OrbitControls, PerspectiveCamera, RenderTexture,Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Cube from './atoms/cube/Cube'

const Section = styled.div`
height:100vh;
background-color:rebeccapurple;
`
const Who = () => {
  return (
    <div className='hero_container' id='studio'>
     <div className='who_right'>
     <Canvas camera={{fov:25,position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
     
        <Cube/>
      </Canvas>


    </div>


    <div className='who_left'>
      <h1 className='h1'>Think outside the square space</h1>
      <div className='logo_container'>
     <AiOutlineLine className='icon'/>
        <h4 className='h4'>What we Are</h4>
      </div>
      <h5 className='h5'> a creative group of designs and development with a passion for the arts</h5>
      <button className='btn1'>see our works</button>
    </div>
    
  </div>
  )
}

export default Who