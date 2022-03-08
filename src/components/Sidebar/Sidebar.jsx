import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.css'
import logo from '../../assets/images/logo.png'

import {ReactComponent as HomeIcon} from '../../assets/images/home.svg'
import {ReactComponent as SecurityIcon} from '../../assets/images/security.svg'
import {ReactComponent as StatisticsIcon} from '../../assets/images/statistics.svg'
import {ReactComponent as MembersIcon} from '../../assets/images/members.svg'
import {ReactComponent as BillingIcon} from '../../assets/images/billing.svg'


const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={`${styles.logo} ${styles.sidebar__logo}`}>
        <img src={logo} alt="logo"/>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <NavLink to="/rooms" 
                     activeClassName={styles.activeLink} 
                     className={styles.listItem__link}>
              <HomeIcon />
              <span className={styles.listItem__text}>Rooms</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to="/security" 
                     className={styles.listItem__link} 
                     activeClassName={styles.activeLink}>
              <SecurityIcon/>
              <span className={styles.listItem__text}>Security</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to="/statistics" className={styles.listItem__link} activeClassName={styles.activeLink}>
              <StatisticsIcon/>
              <span className={styles.listItem__text}>Statistics</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to="members" className={styles.listItem__link} activeClassName={styles.activeLink}>
              <MembersIcon/>
              <span className={styles.listItem__text}>Members</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to="/billing" className={styles.listItem__link} activeClassName={styles.activeLink}>
              <BillingIcon/>
              <span className={styles.listItem__text}>Billing</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
