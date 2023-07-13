import React from 'react'
import styled from 'styled-components'
import styles from'./works.module.css'
import {useState} from 'react'
import TwitterClone from './atoms/webdesign/TwitterClone'
import GymWebsite from './atoms/webdesign/GymWebsite'
import GoogleDocsClone from './atoms/webdesign/GoogleDocsClone'
import NotesApp from './atoms/webdesign/NotesApp'
import KanbanBoard from './atoms/webdesign/KanbanBoard'
import { OrbitControls, PerspectiveCamera, RenderTexture,Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
 
const ListItem = styled.li`
font-size: 60px;  
  font-weight: bold;
   cursor: pointer;
  color:transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media screen and (max-width:768px) {
    font-size: 24px;
    color:white;
    -webkit-text-stroke:0px;
  }

&::after{

 content:"${(props)=>props.text}";
 position:absolute;  
 top:0;
 left: 0;
 color:pink;
 width: 0;
 overflow: hidden;
 white-space: nowrap;
 }
 &:hover{
    &::after{
        animation:moveText 0.5s linear both;

        @keyframes moveText {
          to{
              width: 100%;
          }
        }
    }
} 

`;

const Works = () => {
  const data = [
    "TwitterClone",
    "Gym Website",
    "Google Docs",
    "Notes App",
    "Kanban Board",
  ]
  const [work,setWork] = useState("TwitterClone")
  return (
    <div className={styles.work_section} id='works'>
        
<div className={styles.work_container}>
  <div className={styles.left}>
    <ul className={styles.lists}>
 {data.map(item=>{
  return(
    
    <ListItem  key={item} text={item} onClick={()=>setWork(item)} >
    {item}
  </ListItem>
  
  )
     
 })}
 </ul>

  </div>
  <div className={styles.right}>
  {work==="TwitterClone"?(<TwitterClone/> ):work==="Gym Website"?(<GymWebsite/>):work==="Google Docs"?(<GoogleDocsClone/>):work==="Notes App"?(<NotesApp/>):(<KanbanBoard/>)}
   
  
{/* {work==="TwitterClone"?(<TwitterClone/>):work==="Gym Website"?(<GymWebsite/>):work==="Google Docs"?(<GoogleDocsClone/>):work==="Notes App"?(<NotesApp/>):(<KanbanBoard/>)} */}
  </div>
</div>


    </div>
  )
}

export default Works