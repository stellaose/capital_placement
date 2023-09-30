import React from 'react'
import styles from '../styles/Home.module.scss'
import { tableCard } from './Database'
import { Link } from 'react-router-dom'

const TableCard = () => {
  return (
    <>
      {
        tableCard.map((data) => (
          <div className={styles.table_map} key={data.id}>
            <div className={styles.map_title}>
              <p>{data.name}</p>
              
              <div className={styles.title_right}>
                <Link to={`/name/${data.id}`}>
                  <img src="/assets/images/Chart_Pie.png" alt=""/>
                </Link>
                <img src="/assets/images/Document.png" alt=""/>
              </div>
            </div>
            
            <div className={styles.map_flex}>
              {
                data.grid.map((item) => (
                  <div className={styles.grid_grid} key={item.name}>
                    <p className={styles.applied}>{item.name}</p>
                    <p className={styles.num}>{item.num}</p>
                  </div>
                ))
              }
            </div>
            
            <div className={styles.map_table}>
              <table>
                <thead>
                  <tr>
                    <th>Opportunity Name</th>
                    <th>Status</th>
                    <th>Applied</th>
                    <th>Recommended</th>
                    <th>Interview</th>
                    <th>Offer</th>
                    <th>Hired</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td rowSpan={3}>UX Internship</td>
                    <td className={`${styles.apply} ${styles.active}`}>Active</td>
                    <td>20</td>
                    <td>17</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                  </tr>
                  
                  <tr>
                    <td className={`${styles.apply} ${styles.dis}`}>Disqualified</td>
                    <td>7</td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  
                  <tr className={styles.tr}>
                    <td>Sub-total</td>
                    <td>27</td>
                    <td>21</td>
                    <td>5</td>
                    <td>4</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td rowSpan={3}>UX Internship</td>
                    <td className={`${styles.apply} ${styles.active}`}>Active</td>
                    <td>20</td>
                    <td>17</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                  </tr>
                  
                  <tr>
                    <td className={`${styles.apply} ${styles.dis}`}>Disqualified</td>
                    <td>7</td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  
                  <tr className={styles.tr}>
                    <td>Sub-total</td>
                    <td>27</td>
                    <td>21</td>
                    <td>5</td>
                    <td>4</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default TableCard