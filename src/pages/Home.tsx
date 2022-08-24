import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

import useStyles from '../styles/styles';
import { IToken } from '../interfaces';
import { getLocalStorageKey } from '../helpers/util';
import {
  WishWallet,
  CustomButton,
} from '../components/genericComponents';
import { Constants } from '../enums';

function Home() {
  const navigate = useNavigate();
  const {
    primaryButton,
    gridMargin,
    marginLeft,
    gridItemFlexSpaceBetween,
    gridItemFlex,
    editIcon,
    gridItemFlexCenter,
  } = useStyles();

  const data = getLocalStorageKey(Constants.TOKENS) || [] as IToken[] | [];
  const tokensRef = React.useRef(data);
  const { current: tokens } = tokensRef;
  const emptyData = !tokens.length;

  const TokensElement = (
    <>
      <Grid item className={gridItemFlexSpaceBetween}>
        <Typography variant="h4" className={marginLeft}>
          Tokens
        </Typography>
        <Typography variant="h4" className={marginLeft}>
          Balance
        </Typography>
      </Grid>
      {
        tokens.map(({ id, balance, token }) => (
          <Grid item className={gridItemFlexSpaceBetween} key={id}>
            <Grid item className={gridItemFlex}>
              <Tooltip title="Edit" placement="left-start">
                <EditIcon
                  className={editIcon}
                  onClick={() => navigate(`/tokens/edit/${id}`)}
                />
              </Tooltip>
              <Typography variant="h2">
                {token.toLocaleUpperCase()}
              </Typography>
            </Grid>
            <Typography variant="h2">
              {balance}
            </Typography>
          </Grid>
        ))
      }
    </>
  );

  const EmptyDataElement = (
    <Grid
      item
      className={gridItemFlexCenter}
    >
      <Typography
        variant="h1"
      >
        No Token Registered yet.
      </Typography>
    </Grid>
  );

  return (
    <Grid
      container
      component="section"
      id="wallet-container"
    >
      <WishWallet />
      <Grid item className={gridMargin}>

        <CustomButton
          className={primaryButton}
          onClick={() => navigate('/tokens/add')}
        >
          Add Token
        </CustomButton>
      </Grid>
      {
        !emptyData
        && TokensElement
      }
      {
        emptyData
        && EmptyDataElement
      }
    </Grid>
  );
}

export default Home;
