import React from 'react'
import styles from './Home.module.css'

import userIcon from '../../assets/images/user.svg'
import cloudIcon from '../../assets/images/clouds.svg'
import { IntercomIcon, MusicIcon, ThermometherIcon, WifiIcon } from '../SvgIcons'
import Thermomether from '../Thermomether/Thermomether'
import Diagram from './Diagram/Diagram'


const Home = (props) => {
  const members = props.members.filter(obj => obj.homeStatus === true).map((obj,i) => {
    return (
      <li key={`${obj}${i}`} className={styles.membersUser}>
        <img src={obj.avatar ? obj.avatar : userIcon} alt=""/>
        <span>{obj.firstName}</span>
      </li>
    )
  })

  return (
    <div className={`${styles.home}`}>
        <h1 className={`${styles.title} content-title`}>Welcome, David</h1>
        <div className={styles.info}>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Time</h3>
            <div className={styles.time}>
              {props.setHours}<span>:</span>{props.setMinutes} {new Date().getHours() >= 12 ? 'pm' : 'am'}
            </div>
          </div>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Outdoor Temperature</h3>
            <div className={styles.temp}>
              <span>{props.controls.temperatureOutside}°C</span>
              <img src={cloudIcon} alt=""/>
            </div>
          </div>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Members at home:</h3>
            <ul className={styles.members}>
              {members}
            </ul>
          </div>
        </div>
        <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Controls:</h2>
        <div className={styles.controlsInfo}>
          <div className={styles.controlsInfo__item}>
            <h3>Light Intensity</h3>
            <Diagram value={props.controls.light} color={"#65BDC0"}/>
          </div>

          <div className={styles.controlsInfo__item}>
            <h3>Air Conditioning</h3>
            <Diagram value={props.controls.air} color={"#1D2343"}/>
          </div>

          <div className={styles.controlsInfo__item}>
            <h3>Temperature</h3>
            <Thermomether icon={<ThermometherIcon/>} 
                          scaleColor="var(--red)"
            >{props.temperatureInside * 2}</Thermomether>
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
