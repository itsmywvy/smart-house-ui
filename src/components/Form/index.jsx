import React from 'react';
import styles from './Form.module.scss';
import Subtitle from '../common/Subtitle';
import Button from '../common/Button';
import { useAddMemberMutation } from '../../store/reducers/membersSlice';

const Form = ({ title, setVisible }) => {
  const [addMember, mutateFlags] = useAddMemberMutation();
  const [value, setValue] = React.useState({
    firstName: '',
    lastName: '',
    role: 0,
    avatar: '',
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(value.avatar);
    addMember(value);
    setVisible(false);
  };

  const convertFileToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setValue({ ...value, avatar: reader.result });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <Subtitle>{title}</Subtitle>
      <input
        className={styles.input}
        value={value.firstName}
        onChange={(e) => setValue({ ...value, firstName: e.target.value })}
        placeholder="Type first name..."
      />
      <input
        className={styles.input}
        value={value.lastName}
        onChange={(e) => setValue({ ...value, lastName: e.target.value })}
        placeholder="Type last name..."
      />
      <input accept="image/*" onChange={convertFileToBase64} className={styles.input} type="file" />
      <div className={styles.buttons}>
        <li onClick={() => setValue({ ...value, role: 0 })}>Owner</li>
        <li onClick={() => setValue({ ...value, role: 1 })}>Member</li>
      </div>
      <button className="btn">Upload</button>
      {/* <Button onClickHandle={handleOnSubmit} flags={mutateFlags}>
        Add member
      </Button> */}
    </form>
  );
};

export default Form;
