import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { BedroomIcon, KitchenIcon, LivingRoomIcon, BathroomIcon } from '../../components/SvgIcons';
import styles from './Rooms.module.scss';

import { fetchRooms } from '../../features/roomsSlice';

const Rooms = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <div className={styles.room}>
      <div className={styles.roomContent}>
        {/* <ul>
          <Routes>
            {rooms?.map((room) => (
              <Route key={room.name + room.id} path={`/${room.name}`} element={<div>allo</div>} />
            ))}
            <Route path="*" element={<div>Huita</div>} />
          </Routes>
        </ul> */}

        <Outlet />
      </div>

      <nav className={styles.navigation}>
        <NavLink
          to="bedroom"
          className={({ isActive }) =>
            isActive ? [styles.navigation__item, styles.active].join(' ') : styles.navigation__item
          }>
          <BedroomIcon />
          <span>Bedroom</span>
        </NavLink>
        <NavLink
          to="kitchen"
          className={({ isActive }) =>
            isActive ? [styles.navigation__item, styles.active].join(' ') : styles.navigation__item
          }>
          <KitchenIcon />
          <span>Kitchen</span>
        </NavLink>
        <NavLink
          to="livingroom"
          className={({ isActive }) =>
            isActive ? [styles.navigation__item, styles.active].join(' ') : styles.navigation__item
          }>
          <LivingRoomIcon />
          <span>Living room</span>
        </NavLink>
        <NavLink
          to="bathroom"
          className={({ isActive }) =>
            isActive ? [styles.navigation__item, styles.active].join(' ') : styles.navigation__item
          }>
          <BathroomIcon />
          <span>Bathroom</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Rooms;
