import React from 'react';
import Box from '../common/Box';
import styles from './Dropup.module.scss';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import { changeCurrentRoom } from '../../features/roomsSlice';

const Dropup = ({ data }) => {
  const dispatch = useDispatch();
  const [showRoomList, setShowRoomList] = React.useState(false);
  const { roomName } = useParams();

  const onClickRoomItem = (item) => {
    setShowRoomList(false);
  };

  const onClickLink = (item) => {
    dispatch(changeCurrentRoom(item));
  };

  return (
    <div className={styles.dropup}>
      <Box>
        <div onClick={() => setShowRoomList((prev) => !prev)} className={styles.dropup__item}>
          {data.find((item) => item.url === roomName)?.icon || <MenuIcon />}
        </div>
      </Box>

      {showRoomList && (
        <div className={styles['dropup-wrapper']}>
          {data.map((link, i) => (
            <NavLink to={link.url} key={i} onClick={() => onClickLink(link.url)}>
              <Box>
                <div className={styles['dropup__item']} onClick={() => onClickRoomItem(link.url)}>
                  {link.icon}
                </div>
              </Box>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropup;
