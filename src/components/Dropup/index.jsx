import React from 'react';
import Box from '../common/Box';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { changeCurrentRoom } from '../../store/reducers/roomsSlice';
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';

import styles from './Dropup.module.scss';

const Dropup = ({ data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const { roomName } = useParams();

  const onClickRoomItem = (item) => {
    setVisible(!visible);
  };

  const onClickLink = (item) => {
    dispatch(changeCurrentRoom(item));
  };

  const dropupRef = React.useRef();

  useOutsideAlerter(dropupRef, () => setVisible(false));

  return (
    <div className={styles.dropup} ref={dropupRef}>
      <Box>
        <div onClick={() => setVisible((prev) => !prev)} className={styles.dropup__item}>
          {data.find((item) => item.url === roomName)?.icon || <MenuIcon />}
        </div>
      </Box>

      {visible && (
        <div className={styles['dropup-wrapper']}>
          {data.map((link, i) => (
            <NavLink to={link.url} key={i} onClick={() => onClickLink(link.url)}>
              <Box>
                <div className={styles.dropup__item} onClick={() => onClickRoomItem(link.url)}>
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
