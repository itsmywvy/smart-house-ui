import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    onResizeWindow();

    window.addEventListener('resize', onResizeWindow);

    return () => {
      window.removeEventListener('resize', onResizeWindow);
    };
  }, []);

  const onResizeWindow = () => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  };

  return (
    <div className="main-container">
      <Sidebar width={width} />
      <Header width={width} />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />}>
              {/* <Route index element={<Room />} /> */}
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
