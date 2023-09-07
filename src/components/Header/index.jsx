import React from 'react';
import { Link } from 'react-router-dom';
import Notification from '../Notification';
import { SettingsIcon } from '../SvgIcons';
import Logo from '../Logo';
import { useNavigate } from 'react-router';
import { useGetUserDetailsQuery } from '../../store/reducers/authSlice';
import { logout } from '../../store/reducers/authSlice';
import Dropdown from '../common/Dropdown';
import Avatar from '../common/Avatar';
import logoutIcon from '../../assets/images/logout.png';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';

const Header = ({ width }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    data: user,
    isFetching,
    isSuccess,
  } = useGetUserDetailsQuery('userDetailsHeader', {
    // perform a refetch every 15mins
    pollingInterval: 900000,
    // refetchOnMountOrArgChange: true,
  });

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          {width < 1024 ? (
            <Link to="/" className="btn">
              <Logo />
            </Link>
          ) : null}
          {/* <input className={styles.search} type="text" placeholder="Search" /> */}
          <ul className={styles.buttons}>
            <li className={styles.headerBtn}>
              <Link to="/settings" className="btn">
                <SettingsIcon classNames={styles.headerIcon} />
              </Link>
            </li>
            <li className={styles.headerBtn}>
              <Notification />
            </li>
            <li className={styles.headerBtn}>
              <Dropdown
                trigger={
                  <div>
                    <Avatar image={user?.avatar} />
                  </div>
                }
                menu={[
                  <div onClick={onLogout}>
                    <img style={{ width: 15, marginRight: 8 }} src={logoutIcon} />
                    <span>Log out</span>
                  </div>,
                ]}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
