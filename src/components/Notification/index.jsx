import React from 'react';
import { NotifyIcon } from '../SvgIcons';

import styles from './Notification.module.scss';
import Button from '../common/Button';

const Notification = () => {
  const [popUpActive, setPopUpActive] = React.useState(false);

  const onClickedNotify = () => {
    setPopUpActive((state) => (state = !popUpActive));
  };

  const currentBtnRef = React.useRef(null);
  const currentWindowRef = React.useRef(null);

  const onClickOutsideButton = (e) => {
    if (
      !e.composedPath().includes(currentBtnRef.current) &&
      !e.composedPath().includes(currentWindowRef.current)
    ) {
      setPopUpActive(false);
    }
  };

  React.useEffect(() => document.body.addEventListener('click', onClickOutsideButton), []);

  return (
    <div className={styles['notification-wrapper']}>
      <Button className="btn" onSmash={() => onClickedNotify()} ref={currentBtnRef}>
        <NotifyIcon />
      </Button>
      {popUpActive && (
        <ul ref={currentWindowRef} className={styles['notification-list']}>
          <li>Haven’t got any notifications yet</li>
        </ul>
      )}
    </div>
  );
};

export default Notification;
