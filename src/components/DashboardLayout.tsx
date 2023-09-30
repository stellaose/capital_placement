import React from 'react'
import styles from '../styles/Sidebar.module.scss'


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <div className={styles.dashboard_layout}>
        {children}
      </div>
    </>
   
  )
}

export default DashboardLayout