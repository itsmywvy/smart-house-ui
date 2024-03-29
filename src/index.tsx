import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </BrowserRouter>,
);
