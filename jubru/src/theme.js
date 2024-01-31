import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode: mode,
    background: {
      primary: mode === 'light' ? white[500] : lightBlack[500],
      secondary: mode === 'light' ?  white[500] : black[500],
      third: mode === 'light' ? white[500] : lightBlack[500],
    },
    text: {
      primary: blue[500],
    },
    icon: {
      main: mode === 'light' ? grey[500] :  white[500],
      green: green[500],
      red: red[500],
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

const grey =  {
          100: "#e2e2e2",
          200: "#c6c6c6",
          300: "#a9a9a9",
          400: "#8d8d8d",
          500: "#707070",
          600: "#5a5a5a",
          700: "#434343",
          800: "#2d2d2d",
          900: "#161616"
};

const black={
    100: "#d0d0d0",
    200: "#a0a0a0",
    300: "#717171",
    400: "#414141",
    500: "#121212",
    600: "#0e0e0e",
    700: "#0b0b0b",
    800: "#070707",
    900: "#040404"
};

const lightBlack = {
    100: "#d2d2d2",
    200: "#a5a5a5",
    300: "#797979",
    400: "#4c4c4c",
    500: "#1f1f1f",
    600: "#191919",
    700: "#131313",
    800: "#0c0c0c",
    900: "#060606"
};


const blue =  {
    100: "#d2ebf7",
    200: "#a5d8f0",
    300: "#77c4e8",
    400: "#4ab1e1",
    500: "#1d9dd9",
    600: "#177eae",
    700: "#115e82",
    800: "#0c3f57",
    900: "#061f2b"
};


const white = {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
};


const green = {
    100: "#d5ecd9",
    200: "#abd9b3",
    300: "#81c68e",
    400: "#57b368",
    500: "#2da042",
    600: "#248035",
    700: "#1b6028",
    800: "#12401a",
    900: "#09200d"
};

const red = {
    100: "#efcdcf",
    200: "#df9b9f",
    300: "#d0696e",
    400: "#c0373e",
    500: "#b0050e",
    600: "#8d040b",
    700: "#6a0308",
    800: "#460206",
    900: "#230103"
};