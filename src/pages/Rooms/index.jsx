import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { BedroomIcon, KitchenIcon, LivingRoomIcon, BathroomIcon } from '../../components/SvgIcons';
import Box from '../../components/common/Box';
import Dropup from '../../components/Dropup';
import { fetchRooms } from '../../features/roomsSlice';
import { changeCurrentRoom } from '../../features/roomsSlice';

import styles from './Rooms.module.scss';
import Layout from '../../components/Layout/Layout';

const roomNavLinks = [
  { url: 'bedroom', name: 'Bedroom', icon: <BedroomIcon /> },
  { url: 'kitchen', name: 'Kitchen', icon: <KitchenIcon /> },
  { url: 'livingroom', name: 'Living room', icon: <LivingRoomIcon /> },
  { url: 'bathroom', name: 'Bathroom', icon: <BathroomIcon /> },
];

const Rooms = ({ width }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const onClickLink = (item) => {
    dispatch(changeCurrentRoom(item));
  };

  return (
    <Layout>
      <div className={styles.rooms}>
        <div className={styles.roomsContent}>
          <Outlet />
        </div>

        {width > 1024 ? (
          <nav className={styles.navigation}>
            {roomNavLinks.map((link, i) => (
              <NavLink
                onClick={() => onClickLink(link.url)}
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
        ) : (
          <Dropup data={roomNavLinks} />
        )}
      </div>
    </Layout>
  );
};

export default Rooms;
