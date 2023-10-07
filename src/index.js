import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

import Context from 'testContext/Context/Context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Context>
            <App />
          </Context>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
