import * as React from 'react';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import logo from '../assets/logo.svg';

import useStyles from '../styles/styles';

function InitialPage() {
  const { header, main } = useStyles();
  const { pathname } = useLocation();
  return (
    <Grid
      component="main"
      className={main}
    >
      {
        pathname === '/'
        && <Navigate to="/tokens" />
      }
      <Grid
        className={header}
        component="header"
      >
        <img src={logo} data-testid="klever-image" alt="Klever-logo" id="logo" />
      </Grid>
      <Outlet />
    </Grid>
  );
}

export default InitialPage;
