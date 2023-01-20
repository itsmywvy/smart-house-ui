import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { BedroomIcon, KitchenIcon, LivingRoomIcon, BathroomIcon } from '../../components/SvgIcons';
import { convertToFahrenheit, fetchRooms } from '../../features/rooms/roomsSlice';
import Room from './Room';
import styles from './Rooms.module.scss';

const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.data);

  React.useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <div className={styles.room}>
      <div className={styles.roomContent}>
        <ul>
          {rooms?.map((room) => (
            <Route
              key={room.name + room.id}
              path={`/rooms/${room.name}`}
              render={() => <Room data={room} />}
            />
          ))}
        </ul>
      </div>

      <nav className={styles.navigation}>
        <NavLink
          to="/rooms/bedroom"
          className={styles.navigation__item}
          activeClassName={styles.active}>
          <BedroomIcon />
          <span>Bedroom</span>
        </NavLink>
        <NavLink
          to="/rooms/kitchen"
          className={styles.navigation__item}
          activeClassName={styles.active}>
          <KitchenIcon />
          <span>Kitchen</span>
        </NavLink>
        <NavLink
          to="/rooms/livingroom"
          className={styles.navigation__item}
          activeClassName={styles.active}>
          <LivingRoomIcon />
          <span>Living room</span>
        </NavLink>
        <NavLink
          to="/rooms/bathroom"
          className={styles.navigation__item}
          activeClassName={styles.active}>
          <BathroomIcon />
          <span>Bathroom</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Rooms;
