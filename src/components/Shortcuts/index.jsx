import React from 'react';
import { IntercomIcon, MusicIcon, WifiIcon } from '../SvgIcons';

import styles from './Shortcuts.module.scss';

const Shortcuts = () => {
  return (
    <div className={styles.shortcuts}>
      <h3>Shortcuts</h3>
      <div className={styles['shortcuts-wrapper']}>
        <div className={`${styles.shortcut}`}>
          <WifiIcon />
          <span>WI-FI</span>
        </div>

        <div className={styles.shortcut}>
          <MusicIcon />
          <span>Music</span>
        </div>

        <div className={styles.shortcut}>
          <IntercomIcon />
          <span>Intercom</span>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
