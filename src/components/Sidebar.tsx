import React from 'react'
import styles from '../styles/Sidebar.module.scss'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar_body}>
        <div className={styles.sidebar_up}>
          <img src="/assets/images/Ellipse.png" alt=""/>
          <div className={styles.up_sidebar}>
            <img src="/assets/images/House.png" alt=""/>
            <img src="/assets/images/Users.png" alt=""/>
            <img src="/assets/images/Calendar.png" alt=""/>
            <img src="/assets/images/Share.png" alt=""/>
            <Link to='/'>
              <img src="/assets/images/File.png" alt=""/>
            </Link>
            <img src="/assets/images/Notebook.png" alt=""/>
            <img src="/assets/images/Heart.png" alt=""/>
            <img src="/assets/images/Arrow.png" alt=""/>
          </div>
        </div>
        
        <div className={styles.sidebar_down}>
          <img src="/assets/images/Settings.png" alt=""/>
          <img src="/assets/images/Frame.png" alt=""/>
        </div>
      </div>
     
    </>
  )
}

export default Sidebar