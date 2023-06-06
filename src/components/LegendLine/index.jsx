import React from 'react';

import styles from './LegendsLine.module.scss';

const LegendLine = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.datasets.map((item, i) => (
        <li key={i} className={styles.listItem}>
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

export default LegendLine;
