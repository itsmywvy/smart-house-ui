import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { decodeBase64 } from '../../utils/decodeBase64';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/authSlice';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.auth.userToken);

  const checkTokenExpire = React.useCallback(() => {
    if (userToken) {
      const currentToken = decodeBase64(userToken);
      if (currentToken.exp * 1000 < new Date()) {
        dispatch(logout());
      }
    }
  }, [userToken]);

  const isLogged = useAuth(userToken, '/login');

  React.useEffect(() => {
    checkTokenExpire();
  }, [navigate]);

  // returns child route elements
  return isLogged && <Outlet />;
};

export default ProtectedRoute;
