import React from 'react'

import styles from './Header.module.css'
import settingIcon from '../../assets/images/settings.svg'
import notifyIcon from '../../assets/images/notify.svg'
import userIcon from '../../assets/images/user.svg'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className={styles.header}>
       <input className={styles.search} type="text" placeholder="Search"/>
        <div className={styles.buttons}>
          <button className={`${styles.button} btn`}>
            <img src={settingIcon} alt=""/>
          </button>
          <button className={`${styles.button} btn`}>
            <img src={notifyIcon} alt=""/>
          </button>
          <NavLink to="/home" className={`${styles.button} btn`}>
            <img src={userIcon} alt=""/>
          </NavLink>
        </div>
    </header>
  )
}

export default Header