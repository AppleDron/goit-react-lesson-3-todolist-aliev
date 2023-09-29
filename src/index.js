import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'components/App';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Context from 'testContext/Context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
