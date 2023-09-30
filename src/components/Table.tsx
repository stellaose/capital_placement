import React from 'react'
import styles from '../styles/Home.module.scss'
import TableCard from './TableCard'

const Table = () => {
  return (
    <>
      <div className={styles.table_body}>
        <h3>Detailed Opportunity Overview</h3>
        
        <div className={styles.table_filter_body}>
          <div className={styles.table_input}>
            <img src="/assets/images/Search.png" alt=""/>
            <input 
              type="text"
              placeholder='Search by employer name'
            />
            <img src="/assets/images/Circle_Warning.png" alt=""/>
            
          </div>
          <div className={styles.sort}>
            <p>Sort by</p>
            <img src="/assets/images/Sort.png" alt=""/>
          </div>
          
          <button>
            Export All As CSV
          </button>
        </div>
        
        <div >
          <TableCard/>
        </div>
      </div>
    </>
  )
}

export default Table