import React from 'react';
import styles from './Subtitle.module.scss';

const Subtitle = ({ children, classNames }) => {
  return <h2 className={[styles.subtitle, classNames].join(' ')}>{children}</h2>;
};

export default Subtitle;
