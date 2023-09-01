import React from 'react';
import { ReactComponent as CheckmarkIcon } from '../../../assets/images/checkmark.svg';
import preloader from '../../../assets/preloader.gif';

import styles from './Button.module.scss';

type ButtonProps = {
  type?: string,
  variant?: string,
  children?: React.ReactNode,
  onSmash?: () => void,
  disabled?: Boolean,
};

const Button = ({ type, variant, children, onSmash, disabled }: ButtonProps, ref) => {
  const variantButton = variant === 'pay' ? styles.pay : variant === 'auth' ? styles.auth : '';

  return (
    <button
      ref={ref}
      type={type ? type : 'button'}
      disabled={disabled}
      className={`${styles.btn} ${variant ? variantButton : ''}`}
      onClick={onSmash}>
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
