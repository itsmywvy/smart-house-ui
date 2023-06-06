import React from 'react';
import styles from './Dropdown.module.scss';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';

const Dropdown = ({ trigger, menu }) => {
  const [visible, setVisible] = React.useState(false);
  const dropdownRef = React.useRef();
  useOutsideAlerter(dropdownRef, () => setVisible(false));

  const handleClick = () => {
    setVisible((prev) => !visible);
    console.log(visible);
  };

  return (
    <div className={styles.dropdown}>
      {React.cloneElement(trigger, {
        onClick: () => {
          setVisible(!visible);
        },
      })}
      {visible ? (
        <ul className={styles.menu}>
          {menu.map((item, i) => (
            <li key={i}>
              {React.cloneElement(item, {
                onClick: () => {
                  item.props.onClick();
                  setVisible(!visible);
                },
                ref: dropdownRef,
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
