import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import logo from '../../assets/images/logo.png';
import { HomeIcon, SecurityIcon, StatisticsIcon, MembersIcon, BillingIcon } from '../SvgIcons';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={`${styles.logo} ${styles.sidebar__logo}`}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                isActive
                  ? [styles.listItem__link, styles.activeLink].join(' ')
                  : styles.listItem__link
              }>
              <HomeIcon />
              <span className={styles.listItem__text}>Rooms</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to="/security"
              className={({ isActive }) =>
                isActive
                  ? [styles.listItem__link, styles.activeLink].join(' ')
                  : styles.listItem__link
              }>
              <SecurityIcon />
              <span className={styles.listItem__text}>Security</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive
                  ? [styles.listItem__link, styles.activeLink].join(' ')
                  : styles.listItem__link
              }>
              <StatisticsIcon />
              <span className={styles.listItem__text}>Statistics</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to="members"
              className={({ isActive }) =>
                isActive
                  ? [styles.listItem__link, styles.activeLink].join(' ')
                  : styles.listItem__link
              }>
              <MembersIcon />
              <span className={styles.listItem__text}>Members</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to="/billing"
              className={({ isActive }) =>
                isActive
                  ? [styles.listItem__link, styles.activeLink].join(' ')
                  : styles.listItem__link
              }>
              <BillingIcon />
              <span className={styles.listItem__text}>Billing</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
