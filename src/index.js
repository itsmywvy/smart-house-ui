import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
