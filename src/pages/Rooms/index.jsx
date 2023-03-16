import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { BedroomIcon, KitchenIcon, LivingRoomIcon, BathroomIcon } from '../../components/SvgIcons';
import styles from './Rooms.module.scss';

import { fetchRooms } from '../../features/roomsSlice';

const roomNavLinks = [
  { url: 'bedroom', name: 'Bedroom', icon: <BedroomIcon /> },
  { url: 'kitchen', name: 'Kitchen', icon: <KitchenIcon /> },
  { url: 'livingroom', name: 'Living room', icon: <LivingRoomIcon /> },
  { url: 'bathroom', name: 'Bathroom', icon: <BathroomIcon /> },
];

const Rooms = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <div className={styles.room}>
      <div className={styles.roomContent}>
        <Outlet />
      </div>

      <nav className={styles.navigation}>
        {roomNavLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.url}
            className={({ isActive }) =>
              isActive
                ? [styles.navigation__item, styles.active].join(' ')
                : styles.navigation__item
            }>
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Rooms;
