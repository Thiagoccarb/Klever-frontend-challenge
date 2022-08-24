import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/styles';
import { IToken } from '../interfaces';
import { getLocalStorageKey } from '../helpers/util';

import {
  WishWallet,
  CustomButton,
} from '../components/genericComponents';

function Home() {
  const {
    primaryButton, gridAddToken, gridHomeBody, h2, gridHomeSecondaryHeader,
  } = useStyles();

  const TOKENS = 'tokens';

  const data = getLocalStorageKey(TOKENS) || [] as IToken[] | [];

  const ref = React.useRef(data);

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
          onClick={() => console.log(ref)}

        >
          Add Token
        </CustomButton>
      </Grid>
      <Grid
        item
        className={gridHomeSecondaryHeader}
      >
        <Typography
          variant="h4"
          className={h2}
        >
          Tokens
        </Typography>
        <Typography
          variant="h4"
          className={h2}
        >
          Balance
        </Typography>
      </Grid>
      {
        ref.current.map(({ id, balance, token }) => (
          <Grid
            item
            className={gridHomeBody}
            key={id}
          >
            <Typography className={h2} variant="h2">
              {token}
            </Typography>
            <Typography className={h2} variant="h2">
              {balance}
            </Typography>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default Home;
