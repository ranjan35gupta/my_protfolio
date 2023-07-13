import React from 'react'
import './navbar.css'
import image from './../atoms/pics/a6769bb2af0e4172950992a5ce1eb8f7-removebg-preview.png'
import {BsSearch} from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className='navbar_section'>
      <div className='navbar_container'>
        <div className='links'>
          <img src={image} alt="pic" className='logo' />
          <ul className='lists'>
     <HashLink to="#home" smooth className='a_links'>      <li className='listItem'>Home</li></HashLink> 
      <HashLink to='#studio' smooth className='a_links'  >    <li  className='listItem'>Studio</li></HashLink>  
      <HashLink  to='#works' smooth className='a_links'  >      <li  className='listItem'>Works</li></HashLink>
       <HashLink to='#contacts' smooth className='a_links'  >     <li  className='listItem'>Contact</li></HashLink>
            </ul>
        </div>
        <div className='icons'>
            <BsSearch className='icon1'/>
            <HashLink to='#contacts' smooth className='a_links'  >    <button className='btn'>Hire Now</button> </HashLink> 
        </div>
      </div>
  

    </div>
  )
}

export default Navbar