import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Billing from './pages/Billing';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Member from './pages/Members';
import Rooms from './pages/Rooms';
import Sidebar from './components/Sidebar/Sidebar';
import Statistics from './pages/Statistics';
import Room from './pages/Rooms/Room';
import { useDispatch } from 'react-redux';
import { fetchRooms } from './features/rooms/roomsSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <div className="main-container">
      <Sidebar />
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />}>
              <Route index element={<Room />} />
              <Route path=":roomName" element={<Room />} />
            </Route>

            <Route path="/statistics" element={<Statistics />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/members" element={<Member />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
