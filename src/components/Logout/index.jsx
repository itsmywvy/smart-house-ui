import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default Logout;
