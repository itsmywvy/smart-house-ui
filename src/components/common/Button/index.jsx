import React from 'react';
import { ReactComponent as CheckmarkIcon } from '../../../assets/images/checkmark.svg';
import preloader from '../../../assets/preloader.gif';

import styles from './Button.module.scss';

const Button = ({ flags, children, onClickHandle }) => {
  const { isLoading, isSuccess, isError, isUninitialized } = flags;

  return (
    <button
      disabled={isLoading}
      className={`${styles.btnPay} btn ${isSuccess && styles.success}`}
      onClick={onClickHandle}>
      {isLoading && <img className={styles.btnIcon} src={preloader} alt="" />}
      {isSuccess && <CheckmarkIcon />}
      {isError && <span>Something went wrong</span>}
      {isUninitialized && <span>{children}</span>}
    </button>
  );
};

export default Button;
