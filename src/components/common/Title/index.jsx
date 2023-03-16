import React from 'react';
import styles from './Title.module.scss';

const Title = ({ children, classNames }) => {
  return <h1 className={[styles.title, classNames].join(' ')}>{children}</h1>;
};

export default Title;
