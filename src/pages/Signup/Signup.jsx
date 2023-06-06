import React from 'react';
import { useForm } from 'react-hook-form';
import { getJwtToken, login, setJwtToken, setRefreshToken, signup } from '../../utils/login';
import { useNavigate } from 'react-router';
import Title from '../../components/common/Title';

import styles from './Signup.module.scss';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = React.useState('');

  const onSubmit = async ({ firstName, lastName, email, password }) => {
    const { message, success } = await signup({ firstName, lastName, email, password });
    if (success) {
      setSuccessMessage(message);
      setTimeout(() => navigate('/login'), 3000);
    } else {
      debugger;
      setSuccessMessage(message);
    }
  };

  // navigation('/');

  return (
    <div className={styles.login}>
      <Title>Sign Up</Title>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Type your first name"
          {...register('firstName', {
            required: true,
          })}
        />
        <input
          placeholder="Type your last name"
          {...register('lastName', {
            required: true,
          })}
        />
        <input
          placeholder="Type your email"
          {...register('email', {
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            required: true,
          })}
        />
        <input
          placeholder="Type your password"
          {...register('password', { required: true, minLength: 8 })}
        />
        <input type="submit" />
      </form>
      <Link to="/login">Already have an account?</Link>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Signup;
