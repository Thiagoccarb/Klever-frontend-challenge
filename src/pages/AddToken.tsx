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

const TOKENS = 'tokens';

function AddToken() {
  const [data, setData] = React.useState<Data>({ token: '', balance: '' });
  const [error, setError] = React.useState<boolean>(false);

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

  const validateFields = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(data)
      .every(([, value]) => !!value);
    setError(!isValid);
  };

  const saveToken = () => {
    let newTokens;
    const tokens = localStorage.getItem(TOKENS) || '';
    if (!tokens) {
      newTokens = [{ id: data.token, token: data.token, balance: data.balance }];
      return localStorage.setItem('tokens', JSON.stringify(newTokens));
    }
    newTokens = [...JSON.parse(tokens), { id: data.token, ...data }];
    return localStorage.setItem('tokens', JSON.stringify(newTokens));
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
          onClick={() => { }}
        >
          Voltar
        </CustomButton>
      </Grid>
      <form onSubmit={validateFields}>
        <CustomInput
          error={error}
          label="Token"
          name="token"
          value={data.token}
          onChange={handleChange}
        />
        <CustomInput
          error={error}
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
            onClick={saveToken}
          >
            Save
          </CustomButton>
        </Grid>
      </form>
    </Grid>
  );
}

export default AddToken;
