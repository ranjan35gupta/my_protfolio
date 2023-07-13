import React from 'react'
import styles from './gym.module.css'
import img1 from './../pics/928e895c-545f-4302-9bad-e8de80ab31a6.jpg'
const GymWebsite = () => {
  return (
    <div className={styles.gym_container}>
    <a href="https://gym-3yh1.vercel.app/signup" target='/'>  <img src={img1} alt="pics" className={styles.image}/></a> 
    <div className={styles.btn_container}>
      <a href="https://github.com/ranjan35gupta/Gym" target='/' className={styles.link}><button className={styles.btn}>githup</button></a>
      <a href="https://twitter-final-gamma.vercel.app/" target='/' className={styles.link}><button className={styles.btn}>visit website</button></a>

      </div>
      </div>
  )
}

export default GymWebsite