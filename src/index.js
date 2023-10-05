import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'components/App';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Context from 'testContext/Context/Context';
import './redux/store';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Context>
          <App />
        </Context>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
