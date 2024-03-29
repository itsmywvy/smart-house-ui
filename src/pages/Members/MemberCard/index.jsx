import React from 'react';
import { MessageIcon, MembersIcon } from '../../../components/SvgIcons';

import styles from './MemberCard.module.scss';
import { IMember } from '../../../store/reducers/membersSlice';
import Button from '../../../components/common/Button';
import { BASE_URL } from '../../../api/api';

const MemberCard = ({ member, onClickChat, setCurrentMember }) => {
  const { firstName, lastName, membership, homeLocation, id, avatar } = member;

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.avatarWrapper}>
          {avatar ? (
            <img
              crossOrigin="anonymous"
              className={styles.avatar}
              src={`${BASE_URL}/${avatar}`}
              alt=""
            />
          ) : (
            <MembersIcon />
          )}
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
      <div className={`${styles.sendMessageBtn}`}>
        <Button onSmash={onClickChat}>
          <MessageIcon />
        </Button>
      </div>
    </div>
  );
};

export default MemberCard;
