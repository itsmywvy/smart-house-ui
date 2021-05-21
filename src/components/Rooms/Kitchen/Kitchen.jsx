import React from 'react'
import Device from '../Device'
import styles from './Kitchen.module.css'

import {FridgeIcon} from '../../SvgIcons'


const Kitchen = () => {
  return (
    <div>
      <h1 className={`${styles.title} content-title`}>Kitchen</h1>
      <div className={styles.climate}>
        <div className={styles.climate__item}>
          <div className={styles.info}>
            <span className={styles.info__text}>Room’s Temperature</span>
            <span className={styles.info__numbers}>+23.5°C</span>
            <span className={styles.info__numbers}>74.3°F</span>
          </div>
          <div className={styles.thermomether}>
            <div className="termomether-wrapper termomether-wrapper--red">
              <img src="images/termomether.svg" alt=""/>
            </div>
          </div>
        </div>

        <div className="room-climate__item">
          <div className="room-climate__item-info">
            <span className="room-climate__item-info-text">Room’s Humidity</span>
            <span className="room-climate__item-info-numbers">40%</span>
          </div>
          <div className="room-climate__item-thermomether">
            <div className="termomether-wrapper termomether-wrapper--blue">
              <img src="images/drop.svg" alt=""/>
            </div>
          </div>
        </div>

        <div className="room-climate__item">
          <div className="room-climate__item-info">
            <span className="room-climate__item-info-text">Room’s Lightning</span>
            <span className="room-climate__item-info-numbers">86%</span>
          </div>
          <div className="room-climate__item-thermomether">
            <div className="termomether-wrapper termomether-wrapper--dark-blue">
              <img src="images/light.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="device">
        <h2 className="content-subtitle controls__subtitle">Devices</h2>
        <div className="devices-wrapper">
          <Device deviceName="Fridge" deviceIcon={<FridgeIcon/>}/>
        </div>
      </div>
    </div>
  )
}

export default Kitchen
