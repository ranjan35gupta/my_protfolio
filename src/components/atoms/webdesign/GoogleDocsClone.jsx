import React from 'react'
import styles from './googledocs.module.css'

import img1 from './../pics/48e1b1ea-374b-4b94-bd6c-1eb71adbf81e.jpg'
const GoogleDocsClone = () => {
  return (
    <div className={styles.GoogleDocsClone_container} >
     <a href="https://google-docs-k6ci.vercel.app/" target='/'> <img src={img1} alt="" className={styles.image} /> </a>
     <div className={styles.btn_container}>
      <a href="https://github.com/ranjan35gupta/google_docs" target='/' className={styles.link}><button className={styles.btn}>githup</button></a>
      <a href="https://twitter-final-gamma.vercel.app/" target='/' className={styles.link}><button className={styles.btn}>visit website</button></a>

      </div>
    </div>
  )
}

export default GoogleDocsClone