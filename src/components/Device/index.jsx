import React from 'react';
import styles from './Device.module.scss';

const Device = ({ deviceIcon, deviceName }) => {
  return (
    <div className={styles.device}>
      <div className={styles.deviceIcon}>{deviceIcon}</div>
      <span>{deviceName}</span>
    </div>
  );
};

export default React.memo(Device);
