import React from 'react';
import styles from '../Input.module.scss';

import viewIcon from '../../../../assets/images/view.png';
import hideIcon from '../../../../assets/images/hide.png';

import { InputProps } from '../index';

const PasswordInput = ({ label, name, register, validationSchema, half }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={`${styles.inputGroup} ${half && styles.half}`}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        name={name}
        className={styles.input}
        type={showPassword ? 'text' : 'password'}
        {...register(name, validationSchema)}
      />
      <img
        className={styles.passwordIcon}
        onClick={() => setShowPassword(!showPassword)}
        src={showPassword ? viewIcon : hideIcon}
      />
    </div>
  );
};

export default PasswordInput;
