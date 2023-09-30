import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout';
import { Line } from "react-chartjs-2";
import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend } from 'chart.js';
import { Qualified, Disqualified, homeTable } from '../components/Database';
import styles from '../styles/Home.module.scss'
import Table from '../components/Table';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Home = () => {
  const [userData, setUserData] = useState({
    labels: Qualified.map((datei) => datei.month),
    datasets: [
      {
        label: "Qualified",
        data: Qualified.map((x) => x.value),
        borderWidth: 3,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(252,235,176)',
        borderColor: 'rgb(252,235,176)',
        borderCapStyle: 'butt' as const,
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter' as const,
        pointBorderColor: 'rgb(252,235,176, 0.7)',
        pointBackgroundColor: 'rgb(252,235,176, 0.7)',
        pointBorderWidth: 14,
        pointHoverBackgroundColor: 'rgb(252,235,176, 0.7)',
        pointHoverBorderColor: 'rgb(252,235,176, 0.7)',
        pointHoverBorderWidth: 2,
      },
      {
        label: "Disqualified",
        data: Disqualified.map((x) => x.value),
        borderWidth: 3,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(163,148,255)',
        borderColor: 'rgb(163,148,255)',
        borderCapStyle: 'butt' as const,
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter' as const,
        pointBorderColor: 'rgba(163,148,255,0.7)',
        pointBackgroundColor: 'rgba(163,148,255,0.7)',
        pointBorderWidth: 14,
        pointHoverBackgroundColor: 'rgba(163,148,255,0.7)',
        pointHoverBorderColor: 'rgba(163,148,255,0.7)',
        pointHoverBorderWidth: 2,
      },
    ],
});

const legendMargin = {
  id: "legendMargin",
  beforeInit: function (chart:any) {
    const fitValue = chart.legend.fit;
    chart.legend.fit = function fit() {
      fitValue.bind(chart.legend)();
      return (this.height += 20);
    };
  }
};
  return (
    <DashboardLayout>
      <div className={styles.home_body}>
        <div className={styles.home_content}>
          <div className={styles.title_div}>
            <p className={styles.title}>Opportunity Overview</p>
            <div className={styles.title_right}>
              <span>London Internship Program <img src="/assets/images/Arrow-Down.png" alt=""/></span>
              <div className={styles.span}>
                <img src="/assets/images/Calendar_Days.png" alt="" className={styles.calendar}/>
                <span>01 Jan 2023 - 31 July 2023</span>
                <img src="/assets/images/Arrow-Down.png" alt="" className={styles.down}/>
              </div>
            </div>
          </div>
          
          <div className={styles.grid_div}>
            <div className={styles.grid_one}>
              <div className={styles.grid_up}>
                <div className={styles.grid_grid}>
                  <p className={styles.applied}>Applied</p>
                  <p className={styles.num}>3,122</p>
                  
                  <div className={styles.div_graph}>
                    <p>Previous Period</p>
                    <section>
                      <p>1590</p>
                      <span className={styles.up}>
                        <img src="/assets/images/Trending_Up.png" alt=""/> 15%
                      </span>
                    </section>
                  </div>
                </div>
                <div className={styles.grid_grid}>
                  <p className={styles.applied}>Offer</p>
                  <p className={styles.num}>183</p>
                  
                  <div className={styles.div_graph}>
                    <p>Previous Period</p>
                    <section>
                      <p>71</p>
                      <span className={styles.up}>
                        <img src="/assets/images/Trending_Up.png" alt=""/> 15%
                      </span>
                    </section>
                  </div>
                </div>
                <div className={styles.grid_grid}>
                  <p className={styles.applied}>Hired</p>
                  <p className={styles.num}>98</p>
                  
                  <div className={styles.div_graph}>
                    <p>Previous Period</p>
                    <section>
                      <p>167</p>
                      <span className={styles.down}>
                        <img src="/assets/images/Trending_Down.png" alt=""/> 15%
                      </span>
                    </section>
                  </div>
                </div>
              </div> 
              
              <div className={styles.grid_down}>
                <p>Recommended <img src="/assets/images/Arrow-Down.png" alt=""/></p>
                <Line 
                data={userData}
                plugins={[legendMargin]}
                height={75.99}
                options={{
                  maintainAspectRatio: false,
                  devicePixelRatio: 1,
                  animation: false,
                  plugins: {
                    legend: {
                      position: 'top',
                      align:'end',
                     
                      labels: {
                        boxHeight: 10,
                        boxWidth: 10,
                        useBorderRadius:true,
                        borderRadius: 5,
                        // padding: 20
                      }
                    }
                  },
                  scales: {
                    y: {
                     
                      ticks: {
                        stepSize: 250,
                        
                      },
                      title: {
                        padding: 40,
                        align: 'start',
                      },
                      grid: {
                        tickLength:30,
                        lineWidth: 1,
                        color: '#bcbcbc'
                      },
                    },
                    x: {
                      grid: {
                        display:true,
                        tickLength:40,
                        lineWidth: 1,
                        color: '#bcbcbc'
                      },
                    }
                  }
                }}/>
              </div> 
            </div>
            
            <div className={styles.grid_two}>
              <div className={styles.grid_two_up}>
                <div className={styles.up}>
                  <p className={styles.text_bold}> Total Candidate Flow</p>
                  <p className={styles.num}>4,567</p>
                  
                  <div className={styles.progress_div}>
                    <div className={styles.green}>
                      <progress value={100} max={100} />
                      <p>Qualified 78%</p>
                    </div>
                    <div className={styles.red}>
                      <progress value={100} max={100} />
                      <p>Disqualified 22%</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.two_down}>
                  <table>
                    <thead>
                      <tr>
                        <th className={styles.stage}>Stage</th>
                        <th>Qualified</th>
                        <th>Disqualified</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      {
                        homeTable.map((data) => (
                          <tr key={data.id}>
                            <td className={styles.stage}>{data.name}</td>
                            <td>{data.qualified}</td>
                            <td>{data.disqualified}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
               
              </div>
              
              <div className={styles.grid_two_down}>
                <div className={styles.two_down_grid}>
                  <div className={styles.div_rec}>
                    <p>Recommended</p>
                    <p>214</p>
                  </div>
                  
                  <div className={styles.div_graph}>
                    <p>Previous Period</p>
                    <section>
                      <p>90</p>
                      <span className={styles.up}>
                        <img src="/assets/images/Trending_Up.png" alt=""/> 15%
                      </span>
                    </section>
                  </div>
                </div>
                <div className={styles.two_down_grid}>
                  <div className={styles.div_rec}>
                    <p>Interview</p>
                    <p>442</p>
                  </div>
                  
                  <div className={styles.div_graph}>
                    <p>Previous Period</p>
                    <section>
                      <p>90</p>
                      <span className={styles.up}>
                        <img src="/assets/images/Trending_Up.png" alt=""/> 15%
                      </span>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Table/>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home