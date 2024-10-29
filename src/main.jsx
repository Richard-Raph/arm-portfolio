import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { TitleProvider } from './helpers/TitleContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleProvider>
      <App />
    </TitleProvider>
  </React.StrictMode>
);