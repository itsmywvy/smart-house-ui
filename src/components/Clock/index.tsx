import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTime } from '../../store/reducers/homeSlice';
import styles from './Clock.module.scss';

const Clock = () => {
  const time = useAppSelector((state) => state.home.time);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    let timer = setInterval(() => dispatch(setTime()), 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className={styles.time}>{time}</div>;
};

export default Clock;
