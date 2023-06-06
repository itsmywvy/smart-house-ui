import React, { useMemo, useState } from 'react';
import { AddMemberIcon } from '../../components/SvgIcons';
import MemberCard from './MemberCard';
import Modal from '../../components/UI/Modal';
import { IMember, useGetMembersQuery } from '../../store/reducers/membersSlice';

import styles from './Members.module.scss';
import Title from '../../components/common/Title';
import Form from '../../components/Form';
import useDebounce from '../../hooks/useDebounce';
import Layout from '../../components/Layout/Layout';

const Members = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 2000);

  const { data } = useGetMembersQuery();

  const cards =
    data?.map((elem) => {
      return <MemberCard key={elem['_id']} {...elem} />;
    }) ?? [];

  const searchedMember = useMemo(() => {
    if (!data) {
      return data;
    }

    return [
      ...data.filter((member) => member.lastName.toLowerCase().includes(searchValue.toLowerCase())),
    ];
  }, [searchValue, data]);

  return (
    <Layout>
      <Title classNames={styles.title}>Members</Title>
      <div className={styles.membersCards}>
        {cards}
        <div className={`${styles.card} ${styles.emptyCard}`}>
          <button className="btn btn-add" onClick={() => setShowModal(true)}>
            <AddMemberIcon />
          </button>
        </div>
      </div>
      <Modal visible={showModal} setVisible={setShowModal}>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        {searchValue &&
          searchedMember.map((member) => (
            <div style={{ display: 'flex', alignItems: 'center', padding: '20px 0', gap: 10 }}>
              <div style={{ width: 40, height: 40 }}>
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 100 }}
                  src={member.avatar}
                />
              </div>
              <span>{member.firstName}</span>
              <span>{member.lastName}</span>
            </div>
          ))}
        {/* <Form title="Add member" setVisible={setShowModal} /> */}
      </Modal>
    </Layout>
  );
};

export default Members;
