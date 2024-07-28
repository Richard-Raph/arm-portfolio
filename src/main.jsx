import React from 'react';
import App from './App.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client';
import { TitleProvider } from './contexts/TitleContext';
import MouseContextProvider from './contexts/MouseContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleProvider>
      <MouseContextProvider>
        <App />
      </MouseContextProvider>
    </TitleProvider>
  </React.StrictMode>,
);