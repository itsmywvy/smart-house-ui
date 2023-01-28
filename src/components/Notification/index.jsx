import React, { useEffect, useRef, useState } from 'react';
import styles from './Notification.module.scss';
import notifyIcon from '../../assets/images/notify.svg';

const Notification = () => {
  const [popUpActive, setPopUpActive] = useState(false);

  const onClickedNotify = () => {
    setPopUpActive((state) => (state = !popUpActive));
  };

  const currentBtnRef = useRef(null);
  const currentWindowRef = useRef(null);

  const onClickOutsideButton = (e) => {
    if (
      !e.composedPath().includes(currentBtnRef.current) &&
      !e.composedPath().includes(currentWindowRef.current)
    ) {
      setPopUpActive(false);
    }
  };

  useEffect(() => document.body.addEventListener('click', onClickOutsideButton), []);

  return (
    <div className={styles['notification-wrapper']}>
      <button ref={currentBtnRef} className="btn" onClick={onClickedNotify}>
        <img src={notifyIcon} alt="" />
      </button>
      {popUpActive && (
        <ul ref={currentWindowRef} className={styles['notification-list']}>
          <li>Haven’t got any notifications yet</li>
        </ul>
      )}
    </div>
  );
};

export default Notification;
