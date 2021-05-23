import { Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
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
      </main>
      
    </div>
  );
}

export default App;
