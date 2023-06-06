import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import useWindowSize from '../../hooks/useWindowSize';

const Layout = ({ children }) => {
  const [width] = useWindowSize();

  return (
    <div className="main-container">
      <Sidebar width={width} />
      <Header width={width} />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
