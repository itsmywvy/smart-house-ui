import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../../contexts/menuContext';
import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const navLinks = React.useContext(MenuContext);
  return (
    <div className={styles.mobileMenu}>
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
    </div>
  );
};

export default MobileMenu;
