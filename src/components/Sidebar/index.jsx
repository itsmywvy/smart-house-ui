import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BillingIcon,
  HomeIcon,
  MembersIcon,
  SecurityIcon,
  StatisticsIcon,
} from '../../components/SvgIcons';
import Logo from '../Logo';
import { useSelector } from 'react-redux';

import styles from './Sidebar.module.scss';

const Sidebar = ({ width }) => {
  const currentRoom = useSelector((state) => state.rooms.currentRoom);

  const navLinks = [
    { url: `/rooms/${currentRoom}`, name: 'Rooms', icon: <HomeIcon /> },
    { url: '/security', name: 'Security', icon: <SecurityIcon /> },
    { url: '/statistics', name: 'Statistics', icon: <StatisticsIcon /> },
    { url: '/members', name: 'Members', icon: <MembersIcon /> },
    { url: '/billing', name: 'Billing', icon: <BillingIcon /> },
  ];

  return (
    <aside className={styles.sidebar}>
      {width > 1024 && (
        <NavLink to="/">
          <Logo />
        </NavLink>
      )}
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
