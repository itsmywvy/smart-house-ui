import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../../contexts/menuContext';

import styles from './Sidebar.module.scss';
import logo from '../../assets/images/logo.png';

import {
  BillingIcon,
  HomeIcon,
  MembersIcon,
  SecurityIcon,
  StatisticsIcon,
} from '../../components/SvgIcons';
import Logo from '../Logo';

const navLinks = [
  { url: '/rooms/bedroom', name: 'Rooms', icon: <HomeIcon /> },
  { url: '/security', name: 'Security', icon: <SecurityIcon /> },
  { url: '/statistics', name: 'Statistics', icon: <StatisticsIcon /> },
  { url: '/members', name: 'Members', icon: <MembersIcon /> },
  { url: '/billing', name: 'Billing', icon: <BillingIcon /> },
];

const Sidebar = ({ width }) => {
  return (
    <aside className={styles.sidebar}>
      {width > 1024 && <Logo />}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link, i) => (
            <li className={styles.listItem} key={i}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  isActive
                    ? [styles.listItem__link, styles.activeLink].join(' ')
                    : styles.listItem__link
                }>
                {link.icon}
                <span className={styles.listItem__text}>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
