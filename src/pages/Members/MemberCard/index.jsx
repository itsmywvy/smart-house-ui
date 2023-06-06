import React from 'react';
import { MessageIcon, MembersIcon } from '../../../components/SvgIcons';

import styles from './MemberCard.module.scss';
import { IMember } from '../../../store/reducers/membersSlice';

const MemberCard: React.FC<IMember> = ({
  avatar,
  firstName,
  lastName,
  membership,
  _id: id,
  homeLocation,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.avatarWrapper}>
          {avatar ? <img className={styles.avatar} src={avatar} alt="" /> : <MembersIcon />}
        </div>
        <div className={styles.name}>
          {firstName} {lastName}
        </div>
        <div className={styles.role}>{id === '1' ? membership : membership + ' ' + id}</div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.status}>Status: {homeLocation ? 'At home' : 'Out'}</div>
        <div className={styles.room}>{homeLocation}</div>
      </div>
      <button className={`${styles.sendMessageBtn} btn`}>
        <MessageIcon />
      </button>
    </div>
  );
};

export default MemberCard;
