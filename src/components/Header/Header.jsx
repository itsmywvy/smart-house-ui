import React from 'react'

import styles from './Header.module.css'
import settingIcon from '../../assets/images/settings.svg'
import userIcon from '../../assets/images/user.svg'
import { Link } from 'react-router-dom'
import Notification from '../Notification/Notification'


const Header = () => {
  return (
    <header className={styles.header}>
       <input className={styles.search} type="text" placeholder="Search"/>
        <div className={styles.buttons}>
          <div className={styles.headerBtn}>
            <Link to="/settings" className="btn">
              <img src={settingIcon} alt=""/>
            </Link>
          </div>
          <div className={styles.headerBtn}>
            <Notification/>
          </div>
          <div className={styles.headerBtn}>
            <Link to="/home" className="btn">
              <img src={userIcon} alt=""/>
            </Link>
          </div>
        </div>
    </header>
  )
}

export default Header