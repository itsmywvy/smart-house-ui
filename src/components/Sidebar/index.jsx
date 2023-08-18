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
        {navLinks.map((link, i) => (
          <NavLink
            to={link.url}
            key={i}
            className={({ isActive }) =>
              isActive ? [styles.nav__link, styles.active].join(' ') : styles.nav__link
            }>
            {link.icon}
            <span className={styles['nav__link-text']}>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
