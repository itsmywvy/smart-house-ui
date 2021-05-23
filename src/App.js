import { Route } from 'react-router';
import './App.css';
import Billing from './components/Billing/Billing';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Members from './components/Members/Members';
import Rooms from './components/Rooms/Rooms';
import Sidebar from './components/Sidebar/Sidebar';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <div className="page">
      <Sidebar/>
      <main className="main">
        <Header/>
        <Route path="/home" render={() => <Home />}/>
        <Route path="/rooms" render={() => <Rooms/>}/>
        <Route path="/statistics" render={() => <Statistics/>}/>
        <Route path="/billing" render={() => <Billing/>}/>
        <Route path="/members" render={() => <Members/>}/>
      </main>
      
    </div>
  );
}

export default App;
