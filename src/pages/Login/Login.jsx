import React from 'react';
import { useForm } from 'react-hook-form';
import { getJwtToken, login, setJwtToken, setRefreshToken } from '../../utils/login';
import { useNavigate } from 'react-router';

import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import Title from '../../components/common/Title';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    const { jwtToken, refreshToken, user } = await login({ email, password });
    setJwtToken(jwtToken);
    setRefreshToken(refreshToken);
    navigate('/');
  };

  // navigation('/');

  return (
    <div className={styles.login}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>
        <input
          placeholder="Type email"
          {...register('email', {
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            required: true,
          })}
        />
        <input
          placeholder="Type password"
          {...register('password', { required: true, minLength: 8 })}
        />
        <input type="submit" />
      </form>
      <Link to="/signup">Don't have accout yet?</Link>
    </div>
  );
};

export default Login;
