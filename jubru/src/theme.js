import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode: mode,
    background: {
      primary: mode === 'light' ? '#FFFFFF' : '#181818',
    },
    primary: {
      main: '#1D9DD9'
    },
    text: {
      primary:'#1D9DD9',
    },
    icon: {
      main: mode === 'light' ? '#707070' : '#D7D7D7',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Montserrat',
      'Helvetica Neue',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

export default getTheme;
