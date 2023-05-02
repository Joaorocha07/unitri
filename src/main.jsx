import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import './assets/global-styles.css';
import { Provider } from 'react-redux';
import AsoecTheme from './themes/AsoecTheme';
import AppRoutes from './routes/AppRoutes';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={AsoecTheme}>
    <Provider store={store}>
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
);
