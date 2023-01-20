import { Suspense, lazy } from 'react';
import { Route } from 'react-router';
import './App.scss';
import Billing from './pages/Billing';
import Header from './components/Header/Header';
import Home from './pages/Home';
import MemberContainer from './pages/Members/MemberContainer';
import Rooms from './pages/Rooms';
import Sidebar from './components/Sidebar/Sidebar';
import StatisticsContainer from './pages/Statistics/StatisticsContainer';
import Preloader from './components/common/Preloader/Preloader';

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Header />
      <main className="main">
        <div className="container">
          <Route path="/home" render={() => <Home />} />
          <Route path="/rooms" render={() => <Rooms />} />
          <Route path="/statistics" render={() => <StatisticsContainer />} />
          <Route path="/billing" render={() => <Billing />} />
          <Route path="/members" render={() => <MemberContainer />} />
        </div>
      </main>
    </div>
  );
}

export default App;
