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
      fontSize: '5vmin',
      color: '#fff',
      margin: 0,
      padding: 0,
      '@media (max-width:400px)': {
        fontSize: '20px',
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
