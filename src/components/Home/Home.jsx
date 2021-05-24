import React from 'react'
import styles from './Home.module.css'

import userIcon from '../../assets/images/user.svg'
import cloudIcon from '../../assets/images/clouds.svg'
import { IntercomIcon, MusicIcon, ThermometherIcon, WifiIcon } from '../SvgIcons'
import Thermomether from '../Thermomether/Thermomether'
import Diagram from './Diagram/Diagram'


const Home = () => {
  const hours = new Date().toLocaleString('en-US', {hour: 'numeric', hour12: true})
  const minutes = new Date().toLocaleString('en-US', {minute: 'numeric', hour12: true})

  const data = [
    {id: 1, value: 83},
    {id: 2, value: 36}
  ]

  return (
    <div className={`${styles.home}`}>
        <h1 className={`${styles.title} content-title`}>Welcome, David</h1>
        <div className={styles.info}>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Time</h3>
            <div className={styles.time}>
              {hours}<span>: </span>{minutes}
            </div>
          </div>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Outdoor Temperature</h3>
            <div className={styles.temp}>
              <span>+21.3°C</span>
              <img src={cloudIcon} alt=""/>
            </div>
          </div>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Members at home:</h3>
            <div className={styles.members}>
              <div className={styles.membersUser}>
                <img src={userIcon} alt=""/>
                <span>Annie</span>
              </div>
              <div className={styles.membersUser}>
                <img src={userIcon} alt=""/>
                <span>John</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Controls:</h2>
        <div className={styles.controlsInfo}>
          <div className={styles.controlsInfo__item}>
            <h3>Light Intensity</h3>
            <Diagram value={86} color={"#65BDC0"}/>
          </div>

          <div className={styles.controlsInfo__item}>
            <h3>Air Conditioning</h3>
            <Diagram value={36} color={"#1D2343"}/>
          </div>

          <div className={styles.controlsInfo__item}>
            <h3>Temperature</h3>
            <Thermomether icon={<ThermometherIcon/>} 
                          cssStyles={{
                                      width: 85,
                                      height: 240,
                          }}
                          value={23}/>
          </div>

          <div className={styles.shortcuts}>
            <h3>Shortcuts</h3>
            <div className={styles.shortcutsWrapper}>
              <div className={`${styles.shortcut} block--red`}>
                <WifiIcon/>
                <span>WI-FI</span>
              </div>

              <div className={`${styles.shortcut} block--blue`}>
                <MusicIcon/>
                <span>Music</span>
              </div>

              <div className={`${styles.shortcut} block--dark-blue`}>
                <IntercomIcon/>
                <span>Intercom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Home
