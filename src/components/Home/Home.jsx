import React from 'react'
import styles from './Home.module.css'

import userIcon from '../../assets/images/user.svg'
import cloudIcon from '../../assets/images/clouds.svg'


const Home = () => {
  const hours = new Date().toLocaleString('en-US', {hour: 'numeric', hour12: true}).slice(0, 2)
  const minutes = new Date().toLocaleString('en-US', {minute: 'numeric', hour12: true})

  return (
    <div className={`${styles.home} ${styles.content}`}>
        <h1 className={`${styles.title} content-title`}>Welcome, David</h1>
        <div className={styles.info}>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Time</h3>
            <div className={styles.time}>
              {hours}<span>: </span>{minutes}pm
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
            <div className="diagram-wrapper">
              {/* <svg viewBox="0 0 42 42" className="diagram">
                <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="transparent" stroke-width="3"></circle>
                <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#65BDC0" stroke-width="3" stroke-dasharray="85 10" stroke-dashoffset="70"></circle>
                <g className="chart-text">
                  <text x="50%" y="50%" className="chart-number">
                    83%
                  </text>
                </g>
              </svg> */}
              <div className="diagram-count">
                <span>0</span>
                <span>100</span>
              </div>
            </div>
          </div>

          <div className="controls-info__item">
            <h3>Air Conditioning</h3>
            <div className="diagram-wrapper">
              {/* <svg width="100%" height="100%" viewBox="0 0 42 42" className="diagram">
                <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="transparent" stroke-width="3"></circle>
                <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#1D2343" stroke-width="3" stroke-dasharray="36 67" stroke-dashoffset="70"></circle>
                <g className="chart-text">
                  <text x="50%" y="50%" className="chart-number">
                    36%
                  </text>
                </g>
              </svg> */}
              <div className="diagram-count">
                <span>0</span>
                <span>100</span>
              </div>
            </div>
          </div>

          <div className="controls-info__item">
            <h3>Temperature</h3>
            <div className="termomether-wrapper">
              <img src="images/termomether.svg" alt=""/>
              <span>+23°C</span>
            </div>
          </div>

          <div className="controls-shortcuts">
            <h3>Shortcuts</h3>
            <div className="shortcuts-wrapper">
              <div className="block block--red">
                <img src="images/wifi.svg" alt=""/>
                <span>WI-FI</span>
              </div>

              <div className="block block--blue">
                <img src="images/music.svg" alt=""/>
                <span>Music</span>
              </div>

              <div className="block block--dark-blue">
                <img src="images/intercom.svg" alt=""/>
                <span>Intercom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Home
