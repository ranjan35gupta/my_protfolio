import React from 'react'
import styles from './kanban.module.css'
import img1 from './../pics/d566632d-9f80-4397-b98c-edda27daedfb.jpg'

const KanbanBoard = () => {
  return (
    <div className={styles.kanban_container}>
    <a href="https://kanban-board-clone-7c65.vercel.app/" target='/'>  <img src={img1} alt="pics" className={styles.image}/></a>

    <div className={styles.btn_container}>
      <a href="https://github.com/ranjan35gupta/Kanban_Board_Clone/tree/kanban/board" target='/' className={styles.link}><button className={styles.btn}>githup</button></a>
      <a href="https://twitter-final-gamma.vercel.app/" target='/' className={styles.link}><button className={styles.btn}>visit website</button></a>

      </div>
    </div>
  )
}

export default KanbanBoard