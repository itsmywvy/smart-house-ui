import React from 'react';
import styles from './Select.module.scss';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';

type SelectProps = {
  optionsList: Option[];
  label?: string;
  defaultValue: string;
  value: string | number;
  onChange: (value: string) => void;
};

type Option = { name: string; value: string };

export default function Select({ optionsList, label, defaultValue, value, onChange }: SelectProps) {
  const [visibleList, setVisibleList] = React.useState(false);

  const selectRef = React.useRef(null);

  // Close optionsList on click outside element
  useOutsideAlerter(selectRef, () => setVisibleList(false));

  const handleClick = () => {
    setVisibleList(!visibleList);
  };

  const handleChange = (value: string) => {
    onChange(value);
    console.log(value);
    setVisibleList(false);
  };

  return (
    <div
      className={`${styles.select} ${visibleList ? styles['select--active'] : ''}`}
      ref={selectRef}>
      {label && <p className={styles.select__label}>{label}</p>}
      <div
        onClick={handleClick}
        className={optionsList ? `${styles.selectedText} ${styles.active}` : styles.selectedText}>
        <span>
          {optionsList.find((option: Option) => option.value === value)?.name || defaultValue}
        </span>
      </div>
      {visibleList && (
        <ul className={styles.optionsList}>
          {optionsList.map((option: Option) => (
            <li
              onClick={() => handleChange(option.value)}
              className={styles.optionsList__item}
              key={option.value}>
              <span
                className={`${styles.optionsList__item} ${value === option.name && styles.active}`}
                data-value={option.name}>
                {option.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
