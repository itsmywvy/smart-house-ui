import React from 'react'
import Device from '../Device/Device'
import styles from './Kitchen.module.css'

import {FridgeIcon, ThermometherIcon, DropIcon, LightIcon, KettleIcon, IndoorGrillIcon, MicrowaveIcon, TvIcon, MulticookerIcon, DishwasherIcon, StoveIcon} from '../../SvgIcons'
import Thermomether from '../../Thermomether/Thermomether'


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
          {/* <div className={styles.thermomether}>
            <div className={`${styles.termometherWrapper} termomether-wrapper--red`}>
              <div className={styles.termIcon}>
                <ThermometherIcon/>
              </div>
            </div>
          </div> */}

        <Thermomether icon={<ThermometherIcon/>} 
                      cssStyles={
                                 {width: 76, height: 176, background: "#FFE5E5"}} 
                      value={null}/>
        </div>

        <div className={styles.climate__item}>
          <div className={styles.info}>
            <span className={styles.info__text}>Room’s Humidity</span>
            <span className={styles.info__numbers}>40%</span>
          </div>
          <Thermomether icon={<DropIcon/>} 
                      cssStyles={
                                 {width: 76, height: 176, background: "#CAEEEF"}} 
                      value={null}/>
        </div>

        <div className={styles.climate__item}>
          <div className={styles.info}>
            <span className={styles.info__text}>Room’s Lightning</span>
            <span className={styles.info__numbers}>86%</span>
          </div>
          <Thermomether icon={<LightIcon/>} 
                      cssStyles={
                                 {width: 76, height: 176, backgroundColor: "#C5CAE3"}} 
                      value={null}/>
        </div>
      </div>
      <div className={styles.device}>
        <h2 className={`content-subtitle ${styles.subtitle}`}>Devices</h2>
        <div className={styles.deviceWrapper}>
          <Device deviceName="Fridge" deviceIcon={<FridgeIcon/>}/>
          <Device deviceName="Kettle" deviceIcon={<KettleIcon/>}/>
          <Device deviceName="Stove" deviceIcon={<StoveIcon/>}/>
          <Device deviceName="Dishwasher" deviceIcon={<DishwasherIcon/>}/>
          <Device deviceName="Multicooker" deviceIcon={<MulticookerIcon/>}/>
          <Device deviceName="TV" deviceIcon={<TvIcon/>}/>
          <Device deviceName="Microwave" deviceIcon={<MicrowaveIcon/>}/>
          <Device deviceName="Indoor Grill" deviceIcon={<IndoorGrillIcon/>}/>
        </div>
      </div>
    </div>
  )
}

export default Kitchen
