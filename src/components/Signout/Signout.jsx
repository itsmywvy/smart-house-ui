import React from 'react';
import { useNavigate } from 'react-router';
import { setJwtToken, setRefreshToken } from '../../utils/login';

const Signout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    setJwtToken('');
    setRefreshToken('');
    navigate('/login');
  };

  return (
    <>
      <button onClick={handleClick}>Signout</button>
    </>
  );
};

export default Signout;
