import React, { useState } from 'react';
import { AddMemberIcon } from '../../components/SvgIcons';
import MemberCard from './MemberCard';
import Modal from '../../components/UI/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchMembers } from '../../store/reducers/membersSlice';

import styles from './Members.module.scss';
import Title from '../../components/common/Title';

const Members = () => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const members = useAppSelector((state) => state.members.data);

  const cards = members.map((elem) => {
    return <MemberCard key={elem.id} {...elem} />;
  });

  React.useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  return (
    <div>
      <Title classNames={styles.title}>Members</Title>
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
