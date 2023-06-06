import React from 'react';
import styles from './Avatar.module.scss';
import { UserIcon } from '../../SvgIcons';

const Avatar = ({ image, variant }) => {
  const avatar = image ? (
    <img crossOrigin="anonymous" src={`http://localhost:3001/${image}`} alt="avatar" />
  ) : (
    <UserIcon classNames={styles.headerIcon} />
  );

  return (
    <div className={[styles.avatar, variant === 'lg' ? styles['avatar--lg'] : null].join(' ')}>
      {avatar}
    </div>
  );
};

export default Avatar;
