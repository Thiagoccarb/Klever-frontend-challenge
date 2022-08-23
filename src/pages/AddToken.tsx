import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import useStyles from '../styles/styles';

import {
  WishWallet,
  CustomButton,
  CustomInput,
} from '../components/genericComponents';

interface Data {
  token: string;
  balance: string;
}

function AddToken() {
  const [data, setData] = React.useState<Data>({ token: '', balance: '' });
  const {
    h3,
    gridItem,
    gridSaveToken,
    primaryButton,
    secondaryButton,
  } = useStyles();

  const handleChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data, [name]: value });
  };

  return (
    <Grid
      container
      component="section"
      id="add-token-container"
    >
      <WishWallet />
      <Grid
        item
        className={gridItem}
      >
        <Typography component="h3" className={h3}>
          Add Token
        </Typography>
        <CustomButton
          className={secondaryButton}
        >
          Voltar
        </CustomButton>
      </Grid>
      <CustomInput
        label="Token"
        name="token"
        value={data.token}
        onChange={handleChange}
      />
      <CustomInput
        label="Balance"
        name="balance"
        value={data.balance}
        onChange={handleChange}
      />
      <Grid
        item
        className={gridSaveToken}
      >
        <CustomButton
          className={primaryButton}
        >
          Save
        </CustomButton>
      </Grid>
    </Grid>
  );
}

export default AddToken;
