import React from 'react';

import styles from './Header.module.scss';
import settingIcon from '../../assets/images/settings.svg';
import userIcon from '../../assets/images/user.svg';
import { Link } from 'react-router-dom';
import Notification from '../Notification';
import { SettingsIcon, UserIcon } from '../SvgIcons';
import Logo from '../Logo';
import Signout from '../Signout/Signout';

const Header = ({ width }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          {width < 1024 ? <Logo /> : null}
          {/* <input className={styles.search} type="text" placeholder="Search" /> */}
          <div className={styles.buttons}>
            <div className={styles.headerBtn}>
              <Signout />
            </div>
            <div className={styles.headerBtn}>
              <Link to="/settings" className="btn">
                <SettingsIcon classNames={styles.headerIcon} />
              </Link>
            </div>
            <div className={styles.headerBtn}>
              <Notification />
            </div>
            <div className={styles.headerBtn}>
              <Link to="/" className="btn">
                <UserIcon classNames={styles.headerIcon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
