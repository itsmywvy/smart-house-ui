import { Route } from 'react-router';
import './App.css';
import BillingContainer from './components/Billing/BillingContainer';
import Header from './components/Header/Header';
import HomeContainer from './components/Home/HomeContainer';
import MemberContainer from './components/Members/MemberContainer';
import RoomsContainer from './components/Rooms/RoomsContainer';
import Sidebar from './components/Sidebar/Sidebar';
import StatisticsContainer from './components/Statistics/StatisticsContainer';

function App() {
  return (
    <div className="page">
      <Sidebar/>
      <main className="main">
        <Header/>
        <Route path="/home" render={() => <HomeContainer/>}/>
        <Route path="/rooms" render={() => <RoomsContainer/>}/>
        <Route path="/statistics" render={() => <StatisticsContainer/>}/>
        <Route path="/billing" render={() => <BillingContainer/>}/>
        <Route path="/members" render={() => <MemberContainer/>}/>
      </main>
      
    </div>
  );
}

export default App;
