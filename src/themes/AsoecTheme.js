import { createTheme } from '@mui/material';

const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#273e74',
    },
    secondary: {
      main: '#c91303',
      light: '#C91303',
      dark: '#8c0d02',
    },
    error: {
      main: '#c91303',
      light: '#c91303',
      dark: '#8c0d02',
    },
    success: {
      main: '#00ccb0',
    },
    warning: {
      main: '#ffd900',
    },
    info: {
      main: '#ff5d00',
    },
  },
  typography: {
    h3: {
      fontSize: '2.4rem',
    },
    subtitle1: {
      fontSize: '.9rem',
    },
  },
};

const AsoecTheme = createTheme(themeOptions);

export default AsoecTheme;
