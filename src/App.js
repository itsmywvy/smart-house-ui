import React from 'react';
import Billing from './pages/Billing';
import Home from './pages/Home';
import Member from './pages/Members';
import Rooms from './pages/Rooms';
import Statistics from './pages/Statistics';
import Room from './pages/Rooms/Room';
import ScrollToTop from './components/ScrollToTop';
import useWindowSize from './hooks/useWindowSize';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Security from './pages/Security';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import Settings from './pages/Settings';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import useCurrentPage from './hooks/useCurrentPage';

function App() {
  const [width] = useWindowSize();
  useCurrentPage();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms width={width} />}>
            {/* <Route index element={<Room />} /> */}
            <Route path=":roomName" element={<Room />} />
          </Route>
          <Route path="/security" element={<Security />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/members" element={<Member />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
