// import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/styles';

import {
  WishWallet,
  CustomButton,
} from '../components/genericComponents';

function Home() {
  const { primaryButton, gridAddToken } = useStyles();
  return (
    <Grid
      container
      component="section"
      id="wallet-container"
    >
      <WishWallet />
      <Grid
        item
        className={gridAddToken}
      >

        <CustomButton
          className={primaryButton}
        >
          Add Token
        </CustomButton>
      </Grid>
    </Grid>
  );
}

export default Home;
