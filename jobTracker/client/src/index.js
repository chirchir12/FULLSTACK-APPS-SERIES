import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import JobContextProvider from './context/JobContext';
import { ToastProvider } from 'react-toast-notifications';
ReactDOM.render(
  <React.StrictMode>
    <JobContextProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </JobContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
