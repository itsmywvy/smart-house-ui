import React from 'react';
import preloader from '../../../assets/preloader.gif';
import styles from './Prealoder.module.css';

const Preloader = () => {
  return (
    <div className={styles.preloaderWrapper}>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
