import React from 'react';

import styles from './Chat.module.scss';
import { BASE_URL } from '../../api/api';

const Chat = ({ showChat, setShowChat, socket, member, user }) => {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [typingStatus, setTypingStatus] = React.useState('');

  const lastMessageRef = React.useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('message', {
        text: message,
        name: `${user.firstName} ${user.lastName}`,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };

  const handleTyping = () => {
    socket.emit('typing', `${user?.firstName} is typing...`);
  };

  React.useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);

  React.useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  React.useEffect(() => {
    socket.on('newUserResponse', (data) => {
      // console.log(data);
      setUsers(data);
    });

    // return () =>
    //   socket.on('disconnect', () => {
    //     console.log('🔥: A user disconnected');
    //   });
  }, [socket, users]);

  React.useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`${styles.chat} ${showChat ? styles.active : ''}`}>
      <div onClick={() => setShowChat(false)} className={styles.close}>
        X
      </div>
      <div className={`${styles.contact} ${styles.bar}`}>
        <div className={styles.pic}>
          <img
            crossOrigin="anonymous"
            className={styles.avatar}
            src={`${BASE_URL}/${member.avatar}`}
            alt=""
          />
        </div>
        <div className={styles.name}>{`${member.firstName} ${member.lastName}`}</div>
        <div className={styles.seen}>Today at 12:56</div>
      </div>
      <div className={styles.messages} id="chat">
        {messages.map((mess) =>
          mess.name === `${user.firstName} ${user.lastName}` ? (
            <div className={`${styles.message} ${styles.sender}`}>{mess.text}</div>
          ) : (
            <div className={`${styles.message} ${styles.recipient}`}>{mess.text}</div>
          ),
        )}
        <div ref={lastMessageRef} />
        <p>{typingStatus}</p>
      </div>
      <form style={{ flexBasis: '4rem' }} onSubmit={handleSendMessage}>
        <div className={styles.input}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here!"
            type="text"
            onKeyDown={handleTyping}
          />
        </div>
      </form>
    </div>
  );
};

export default Chat;
