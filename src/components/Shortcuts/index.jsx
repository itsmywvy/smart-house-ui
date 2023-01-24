import React from 'react';
import styles from './Shortcuts.module.scss';

import { IntercomIcon, MusicIcon, WifiIcon } from '../SvgIcons';

const Shortcuts = () => {
  return (
    <div className={styles.shortcuts}>
      <h3>Shortcuts</h3>
      <div className={styles.shortcutsWrapper}>
        <div className={`${styles.shortcut} block--red`}>
          <WifiIcon />
          <span>WI-FI</span>
        </div>

        <div className={`${styles.shortcut} block--blue`}>
          <MusicIcon />
          <span>Music</span>
        </div>

        <div className={`${styles.shortcut} block--dark-blue`}>
          <IntercomIcon />
          <span>Intercom</span>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
