import React from 'react';

import styles from './Scroller.module.scss';

const Scroller = ({ children }) => {
  return <ul className={styles.scroller}>{children}</ul>;
};

export default Scroller;
