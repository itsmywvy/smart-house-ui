import React from 'react';
import { useHref, useNavigate } from 'react-router-dom';

export default function useCurrentPage() {
  const href = useHref();
  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem('currentUrl', href);
    navigate(localStorage.getItem('currentUrl'));
  }, [href]);
}
