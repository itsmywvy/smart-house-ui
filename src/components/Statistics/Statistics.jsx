import React from 'react'
import {Line, Doughnut} from 'react-chartjs-2'
import { FridgeIcon, KettleIcon, PcIcon, StoveIcon, TvIcon, WasherIcon } from '../SvgIcons'

import styles from './Statistics.module.css'

const Statistics = () => {

  const dataElec = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [
                  {
                    data: [52, 64, 57, 69, 43, 42, 41, 58, 41, 67, 76, 39],
                    backgroundColor: '#EE777F',
                    borderColor: '#ee777f',
                    tension: 0.5,
                  },
      ]
  }

  const dataWater = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
                {
                  data: [36, 53, 54, 70, 38, 58, 38, 45, 51, 64, 62, 57],
                  backgroundColor: '#65BDC0',
                  borderColor: '#65BDC0',
                  tension: 0.5,
                },
    ]
  }

  const dataWaste = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
                {
                  data: [68, 32, 34, 66, 74, 55, 67, 39, 68, 79, 64, 57],
                  backgroundColor: '#1D2343',
                  borderColor: '#1D2343',
                  tension: 0.5,
                },
    ]
  }

  const dataSorting = {
      labels: [
      'Glass',
      'Plastic',    
      'Paper'
    ],
    datasets: [{
      label: 'Sorting',
      data: [25, 15, 60],
      backgroundColor: [ 
        '#65BDC0',
        '#1D2343',
        '#EE777F'
      ],   
    }]
  }
  
  const optionsLine =  {
    responsive: true,
    aspectRatio: 3,
    plugins: {
      legend: {
        display: false
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 14,
        bottom: 14
      }
    }
  }

  const optionsDoughnut = {
    borderWidth: 0,
    cutout: 25,
    hover: false,
    legend: false,
    responsive: false,
    borderAlign: 'inner',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          color: 'rgba(29, 35, 67, 0.75)',
          font: {
            size: 17
          }
        },
        
      }
    }
  }

  return (
    <div className={styles.grid}>
        <div className={`${styles.gridItem} ${styles.gridItem__elec}`}>
          <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Electricity</h2>
          <div className={styles.blockWrapper}>
             <Line data={dataElec} options={optionsLine} id="electricity"/>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItem__water}`}>
          <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Water</h2>
          <div className={styles.blockWrapper}>
            <Line data={dataWater} options={optionsLine} id="water"/>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItem__waste}`}>
          <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Waste Management</h2>
          <div className={styles.blockWrapper}>
            <Line data={dataWaste} options={optionsLine} id="waste"/>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItem__sorting}`}>
          <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Sorting</h2>
          <div className={styles.blockWrapper}>
            <div className={styles.sortingDate}>
            {`${dataElec.labels[new Date().getMonth()]}, ${new Date().getUTCFullYear()}`}
          </div>
          <Doughnut data={dataSorting} id="sort" options={optionsDoughnut}/>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItem__devices}`}>
          <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Devices</h2>
          <div className={styles.devices}>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--dark-blue`}>
                <TvIcon/>
              </div>
              <span>TV</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--red`}>
                <KettleIcon/>
              </div>
              <span>Kettle</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--blue`}>
                <WasherIcon/>
              </div>
              <span>Washer</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--red`}>
                <FridgeIcon/>
              </div>
              <span>Fridge</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--blue`}>
                <StoveIcon/>
              </div>
              <span>Stove</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--dark-blue`}>
                <PcIcon/>
              </div>
              <span>PC</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Statistics
