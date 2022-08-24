import { createTheme } from '@material-ui/core';

const paletteTheme = createTheme({
  palette: {
    primary: {
      main: '#AA33B5',
    },
    secondary: {
      main: '#646464',
    },
    warning: {
      main: '#920000',
    },
  },
});

const theme = createTheme({
  typography: {
    fontFamily: [
      'Shoika Regular',
      'sans-serif',
    ].join(','),
    h1: {
      padding: 0,
      margin: 0,
      color: '#fff',
      fontSize: '5vmin',
      fontWeight: 700,
      '@media (max-width:400px)': {
        fontSize: '20px',
      },
    },
    h2: {
      padding: 0,
      margin: 0,
      color: '#fff',
      fontSize: '4vmin',
      fontWeight: 700,
      '@media (max-width:400px)': {
        fontSize: '18px',
      },
    },
    h4: {
      padding: 0,
      margin: 0,
      color: '#fff',
      fontSize: '2vmin',
      '@media (max-width:400px)': {
        fontSize: '10px',
      },
    },
  },
  palette: {
    primary: {
      main: paletteTheme.palette.primary.main,
    },
    secondary: {
      main: paletteTheme.palette.secondary.main,
    },
    warning: {
      main: paletteTheme.palette.warning.main,
    },
  },
});

export default theme;
