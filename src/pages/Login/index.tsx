import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { shallowEqual } from 'react-redux';
import { loginUser } from '../../store/reducers/authSlice';
import Subtitle from '../../components/common/Subtitle';
import useAuth from '../../hooks/useAuth';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Form from '../../components/Form';

import styles from './Login.module.scss';
import PasswordInput from '../../components/common/Input/PasswordInput';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    // formState: { errors },
  } = useForm<FormValues>();

  const { userToken, isLoading, isError, isSuccess } = useAppSelector(
    (state) => ({
      userToken: state.auth.userToken,
      isLoading: state.auth.isLoading,
      isError: state.auth.isError,
      isSuccess: state.auth.isSuccess,
    }),
    shallowEqual,
  );

  const isLogged = useAuth(userToken, '/login');

  React.useEffect(() => {
    if (isLogged) navigate('/');
    console.log(isLogged);
  }, [isLogged]);

  const onSubmitForm: SubmitHandler<FormValues> = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  return (
    <div className="auth auth--login">
      <div className="auth__item auth-decor">
        <div className="auth-decor__info auth-info">
          <p className="auth-info__text">
            <span>A few clicks away from</span> <strong>Complete home</strong>
            <br></br>
            <strong>control</strong>
          </p>
        </div>
      </div>
      <div className="auth__item auth-form">
        <Subtitle classNames={styles.subtitle}>Sign in</Subtitle>
        <Form onSubmit={onSubmitForm}>
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Type email"
            register={register}
            validationSchema={{
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            }}
          />

          <PasswordInput
            name="password"
            label="Password"
            placeholder="min 8 characters"
            register={register}
            validationSchema={{
              required: true,
              minLength: 8,
            }}
          />
          <Button type="submit" variant="auth">
            Sign in
          </Button>

          <p className="unauth">
            Don't have accout yet?
            <Link className="auth-link" to="/signup">
              Sign up
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
