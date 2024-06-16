import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa la nueva API para crear la raíz
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));  // Crea la raíz
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
