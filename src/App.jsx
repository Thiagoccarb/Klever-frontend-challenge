import * as React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './styles/theme';

import AppRoutes from './Routes';

import './styles/styles.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
