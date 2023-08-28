import React from 'react';

import styles from './LegendsLineList.module.scss';

const LegendLineList = ({ list, handleToggle }) => {
  return (
    <ul className={styles.list}>
      {list.datasets.map((item, i) => (
        <li
          key={i}
          className={`${styles.listItem} ${!item.active ? styles.listItem__active : ''}`}
          onClick={() => handleToggle(i)}>
          <div
            className={styles.listItemBullet}
            style={{
              backgroundColor: item.backgroundColor,
            }}
          />
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default LegendLineList;
