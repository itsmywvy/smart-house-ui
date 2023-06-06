import React from 'react';
import { useNavigate } from 'react-router';

export default function useAuth(token, redirectUrl) {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    if (!token || token === 'undefined') {
      setIsLogged(false);
      return navigate(redirectUrl);
    }

    setIsLogged(true);
    navigate('/');
  }, [token]);

  return isLogged;
}
