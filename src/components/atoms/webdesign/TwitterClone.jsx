import React from 'react'
import styled from 'styled-components'
import img1 from './../pics/88192415-765d-45fc-9e85-5fcd3dd87db2.jpg'
import styles from './twitterclone.module.css'

const Container = styled.div`
height:100%;
width:100%;

`

const TwitterClone = () => {
    
  return (
    <div className={styles.twitter_container}>
    <a href="https://twitter-final-gamma.vercel.app/" target='/'>  <img src={img1} alt="pics" className={styles.image}/> </a>
      <div className={styles.btn_container}>
      <a href="https://github.com/ranjan35gupta/twitter_final" target='/' className={styles.link}><button className={styles.btn}>githup</button></a>
      <a href="https://twitter-final-gamma.vercel.app/" target='/' className={styles.link}><button className={styles.btn}>visit website</button></a>

      </div>
    
    
    </div>
    
)
}

export default TwitterClone