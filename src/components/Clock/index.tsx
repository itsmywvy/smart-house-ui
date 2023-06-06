import React from 'react';
import useClock from '../../hooks/useClock';

import styles from './Clock.module.scss';

const Clock = () => {
  const [time] = useClock();

  return <div className={styles.time}>{time}</div>;
};

export default Clock;
