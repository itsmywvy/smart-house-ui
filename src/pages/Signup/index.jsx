import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { signupUser } from '../../store/reducers/authSlice';
import Subtitle from '../../components/common/Subtitle';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Form from '../../components/Form';
import useAuth from '../../hooks/useAuth';

import styles from './Signup.module.scss';
import PasswordInput from '../../components/common/Input/PasswordInput';

const Signup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { userToken, isLoading, isError, isSuccess, userInfo } = useSelector(
    (state) => ({
      userToken: state.auth.userToken,
      isLoading: state.auth.isLoading,
      isError: state.auth.isError,
      isSuccess: state.auth.isSuccess,
      userInfo: state.auth.userInfo,
    }),
    shallowEqual,
  );

  useAuth(userToken, '/signup');

  const onSubmitForm = (data) => {
    dispatch(signupUser(data));
  };

  React.useEffect(() => {
    if (isSuccess) navigate('/login');
  }, [isSuccess]);

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="auth">
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
        <Subtitle classNames={styles.subtitle}>Create your account</Subtitle>
        <Form onSubmit={onSubmitForm}>
          <Input
            type="text"
            name="firstName"
            label="First name"
            placeholder="Your first name"
            errors={errors}
            register={register}
            validationSchema={{
              required: true,
              maxLength: 20,
            }}
            required
            half
          />

          <Input
            type="text"
            name="lastName"
            label="Last name"
            placeholder="Your last name"
            errors={errors}
            register={register}
            validationSchema={{
              required: true,
              maxLength: 20,
            }}
            required
            half
          />

          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Type email"
            errors={errors}
            register={register}
            validationSchema={{
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            }}
            required
          />

          <PasswordInput
            type="password"
            name="password"
            label="Password"
            placeholder="min 8 characters"
            errors={errors}
            register={register}
            validationSchema={{
              required: true,
              minLength: 8,
            }}
            required
          />

          <Button type="submit" variant="auth" flags={{ isError, isLoading, isSuccess }}>
            Create account
          </Button>

          <p className="unauth">
            Already have an account?
            <Link className="auth-link" to="/login">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
