import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import useStyles from '../styles/styles';

import {
  WishWallet,
  CustomButton,
} from '../components/genericComponents';

function AddToken() {
  const { primaryButton } = useStyles();
  return (
    <Grid
      container
      component="section"
      id="wallet-container"
    >
      <WishWallet />
      <Grid
        item
      >
        <Typography component="h3">
          Add Token
        </Typography>
        <CustomButton
          className={primaryButton}
        >
          Voltar
        </CustomButton>
      </Grid>
    </Grid>
  );
}

export default AddToken;
