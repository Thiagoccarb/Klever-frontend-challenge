import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from '../styles/styles';

function NotFoundPage() {
  const { main, gridItemFlexCenter } = useStyles();
  return (
    <Grid
      item
      component="main"
      className={main}
    >
      <Grid
        item
        className={gridItemFlexCenter}
      >
        <Typography
          variant="h1"
        >
          Sorry, requested page not found.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default NotFoundPage;
