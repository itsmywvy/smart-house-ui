import React from 'react';
import styles from './Input.module.scss';

export type InputProps = {
  value?: string;
  type?: string;
  placeholder: string;
  label: string;
  name: string;
  register: any;
  validationSchema: any;
  half?: boolean;
};

const Input = ({
  type,
  placeholder,
  label,
  name,
  register,
  validationSchema,
  half,
}: InputProps) => {
  return (
    <div className={`${styles.inputGroup} ${half && styles.half}`}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        name={name}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...register(name, validationSchema)}
      />
    </div>
  );
};

export default Input;
