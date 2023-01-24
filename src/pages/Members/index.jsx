import React, { useState } from 'react';
import { AddMemberIcon } from '../../components/SvgIcons';
import MemberCard from './MemberCard/MemberCard';
import Modal from '../../components/UI/Modal/Modal';

import styles from './Members.module.css';

const Members = (props) => {
  const [modal, setModal] = useState(false);

  const cards = props.members.map((elem) => {
    return (
      <MemberCard
        id={elem.id}
        firstName={elem.firstName}
        lastName={elem.lastName}
        avatar={elem.avatar}
        membership={elem.membership}
        location={elem.homeLocation}
        status={elem.homeStatus}
        room={elem.room}
        key={elem.id + elem.firstName}
      />
    );
  });

  return (
    <div>
      <h1 className={`${styles.title} content-title`}>Members</h1>
      <div className={styles.membersCards}>
        {cards}
        <div className={`${styles.card} ${styles.emptyCard}`}>
          <button className="btn btn-add" onClick={() => setModal(true)}>
            <AddMemberIcon />
          </button>
        </div>
      </div>
      <Modal visible={modal} setVisible={setModal} />
    </div>
  );
};

export default Members;
