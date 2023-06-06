import React, { useCallback } from 'react';
import { Navigate, Route, Router, Routes, redirect, useNavigate } from 'react-router-dom';
import './App.scss';
import Billing from './pages/Billing';
import Header from './components/Header';
import Home from './pages/Home';
import Member from './pages/Members';
import Rooms from './pages/Rooms';
import Sidebar from './components/Sidebar';
import Statistics from './pages/Statistics';
import Room from './pages/Rooms/Room';
import MobileMenu from './components/MobileMenu';
import MenuProvider from './contexts/menuContext';
import ScrollToTop from './components/ScrollToTop';
import useWindowSize from './hooks/useWindowSize';
import Login from './pages/Login/Login';
import { getJwtToken } from './utils/login';
import Signup from './pages/Signup/Signup';
import Security from './pages/Security';

function App() {
  const navigate = useNavigate();
  const [width] = useWindowSize();

  React.useEffect(() => {
    const jwtToken = getJwtToken();
    if (!jwtToken) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rooms" element={<Rooms width={width} />}>
          {/* <Route index element={<Room />} /> */}
          <Route path=":roomName" element={<Room />} />
        </Route>
        <Route path="/security" element={<Security />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/members" element={<Member />} />
      </Routes>
    </>
  );
}

export default App;
