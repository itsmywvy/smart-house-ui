import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTime } from '../../features/homeSlice';
import styles from './Clock.module.scss';

const Clock = () => {
  const time = useSelector((state) => state.home.time);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let timer = setInterval(() => dispatch(setTime()), 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className={styles.time}>{time}</div>;
};

export default Clock;
