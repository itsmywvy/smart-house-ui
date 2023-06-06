import React from 'react';
import { AddMemberIcon } from '../../components/SvgIcons';
import MemberCard from './MemberCard';
import Modal from '../../components/UI/Modal';
import { useAddMemberMutation, useFindUserQuery } from '../../store/reducers/membersSlice';

import styles from './Members.module.scss';
import Title from '../../components/common/Title';
import Form from '../../components/Form';
import useDebounce from '../../hooks/useDebounce';
import Layout from '../../components/Layout';
import { useGetUserDetailsQuery, usePostMembersIdsMutation } from '../../store/reducers/authSlice';
import { useSelector } from 'react-redux';

import checkmarkIcon from '../../assets/images/checkmark.svg';
import Avatar from '../../components/common/Avatar';
import Chat from '../../components/Chat';

import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://localhost:5000');

const Members = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isMembers, setIsMembers] = React.useState(true);
  const debouncedValue = useDebounce(searchValue, 500);

  const { data: searchedUsers, isSuccess } = useFindUserQuery(debouncedValue, { skip: isMembers });
  const [addMember] = useAddMemberMutation();

  const { data: user } = useGetUserDetailsQuery();

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
    if (debouncedValue.length) {
      setIsMembers(false);
    }
  };

  const handleOnAddMember = async (userId, memberId) => {
    let newMember = { userId, memberId };
    await addMember(newMember);
  };

  const [postMembersIds, { data: members }] = usePostMembersIdsMutation();

  React.useEffect(() => {
    postMembersIds(user?.members_ids);
  }, []);

  const [currentMember, setCurrentMember] = React.useState({});

  const onClickChat = (member) => {
    setShowChat(true);
    setCurrentMember(member);
  };

  const cards =
    members?.map((member) => {
      return <MemberCard key={member.id} member={member} onClickChat={() => onClickChat(member)} />;
    }) ?? [];

  const [showChat, setShowChat] = React.useState(false);

  // React.useEffect(() => {
  //   socket.emit('newUser', { userName: user?.firstName, socketID: socket.id });
  // }, []);

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
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchInput}
          placeholder="Search..."
        />
        <ul style={{ maxHeight: '320px', overflowY: 'auto', overflowX: 'hidden', padding: '10px' }}>
          {debouncedValue && isSuccess ? (
            searchedUsers.map((member) => (
              <li
                key={member.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '20px 0',
                  gap: 10,
                  position: 'relative',
                }}>
                <div style={{ width: 40, height: 40 }}>
                  {member.avatar ? (
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 100,
                      }}
                      crossOrigin="anonymous"
                      src={`http://localhost:3001/${member.avatar}`}
                    />
                  ) : (
                    <Avatar />
                  )}
                </div>
                <span>{member.firstName}</span>
                <span>{member.lastName}</span>
                <button
                  onClick={() => handleOnAddMember(user.id, member.id)}
                  style={{ position: 'absolute', right: 0, width: 40 }}>
                  <img src={checkmarkIcon} alt="" />
                </button>
              </li>
            ))
          ) : (
            <p>Not found...</p>
          )}
        </ul>

        {/* <Form title="Add member" setVisible={setShowModal} /> */}
      </Modal>
      {/* <Chat
        showChat={showChat}
        setShowChat={setShowChat}
        // socket={socket}
        member={currentMember}
        user={user}
      /> */}
    </Layout>
  );
};

export default Members;
