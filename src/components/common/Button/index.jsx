import React from 'react';
import { ReactComponent as CheckmarkIcon } from '../../../assets/images/checkmark.svg';
import preloader from '../../../assets/preloader.gif';

import styles from './Button.module.scss';

type ButtonProps = {
  type?: string,
  flags?: any,
  variant?: string,
  children?: React.ReactNode,
  onSmash?: () => void,
};

const Button = ({ type, flags, variant, children, onSmash }: ButtonProps) => {
  const { isLoading, isSuccess, isError, isUninitialized } = flags;

  const variantButton = variant === 'pay' ? styles.pay : variant === 'auth' ? styles.auth : '';

  return (
    <button
      type={type ? type : 'button'}
      disabled={isLoading}
      className={`${styles.btn} ${variantButton} ${isSuccess && styles.success}`}
      onClick={onSmash}>
      {isLoading && <img className={styles.btnIcon} src={preloader} alt="" />}
      {isSuccess && <CheckmarkIcon />}
      {isError && <span>Something went wrong</span>}
      {/* {isUninitialized && <span>{children}</span>} */}
      <span>{children}</span>
    </button>
  );
};

export default Button;
