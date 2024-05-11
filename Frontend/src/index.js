import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Slice from './components/redux/Slice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Slice}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
