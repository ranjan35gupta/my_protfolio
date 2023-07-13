import React from 'react'
import styled from 'styled-components'
import './hero.css'
import Navbar from './sections/Navbar'
import {AiOutlineLine} from 'react-icons/ai'
import img1 from './atoms/pics/Ranjan.jpg'
import { MeshDistortMaterial, OrbitControls, PerspectiveCamera, RenderTexture,Sphere,Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Section = styled.div`
height:100vh;
background-color:rebeccapurple;
`
const Hero = () => {
  return (
    <div className='hero_section' id='home'>
      <Navbar/>
      <div className='hero_container'>
        <div className='hero_left'>
          <h1 className='h1'>Think.Make.Solve</h1>
          <div className='logo_container'>
         <AiOutlineLine className='icon'/>
            <h4 className='h4'>What we Do</h4>
          </div>
          <h5 className='h5'> We enjoy creating delightful,human-centered digital experience</h5>
          <button className='btn1'>Learn More</button>
        </div>
        <div className='hero_right'>
        <Canvas >
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Sphere args ={[1,100,200]} scale={2.4}>
        <MeshDistortMaterial color='#380461' attach='material' distort={0.5} speed={2} />
     
        </Sphere>
      </Canvas>
          <img src={img1} alt="" className='img1'/>

        </div>
      </div>
    </div>
  )
}

export default Hero