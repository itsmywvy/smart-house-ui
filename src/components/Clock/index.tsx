import React from 'react';
import styles from './Clock.module.scss';
import useClock from '../../hooks/useClock';

const Clock = () => {
  const [time] = useClock();

  return <div className={styles.time}>{time}</div>;
};

export default Clock;
