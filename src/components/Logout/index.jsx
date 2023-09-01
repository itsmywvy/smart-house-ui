import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/authSlice';
import Button from '../common/Button';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <Button onSmash={() => handleClick()}>Logout</Button>
    </>
  );
};

export default Logout;
