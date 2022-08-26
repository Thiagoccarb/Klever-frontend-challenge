import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import logo from '../../assets/shooting-star.svg';

function WishWallet() {
  return (
    <Grid
      container
      id="wish-wallet-container"
    >
      <img src={logo} data-testid="shooting-star-logo" alt="shooting-star-logo" width="20vw" id="star-logo" />
      <Typography variant="h1">
        Wish Wallet
      </Typography>
    </Grid>
  );
}

export default WishWallet;
