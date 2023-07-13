import React from 'react'
import styles from './notes.module.css'
import img1 from './../pics/c35272e2-f65b-4f71-b51a-7fba90ffc634.jpg'
const NotesApp = () => {
  return (
    <div className={styles.notes_container}>

    <a href="https://notes-two-lake.vercel.app/" target='/'>  <img src={img1} alt="pics" className={styles.image} /></a>
    <div className={styles.btn_container}>
      <a href="https://github.com/ranjan35gupta/notes" target='/' className={styles.link}><button className={styles.btn}>githup</button></a>
      <a href="https://twitter-final-gamma.vercel.app/" target='/' className={styles.link}><button className={styles.btn}>visit website</button></a>

      </div>
    </div>
  )
}

export default NotesApp