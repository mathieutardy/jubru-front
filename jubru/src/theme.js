import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode: mode,
    background: {
      primary: mode === 'light' ? '#FFFFFF' : '#1F1F1F',
      secondary: mode === 'light' ? '#FFFFFF' : '#121212',
      third: mode === 'light' ? '#ECECEC' : '#02BBFF',
    },
    text: {
      primary:'#1D9DD9',
    },
    icon: {
      main: mode === 'light' ? '#707070' : '#FFFFFF',
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
