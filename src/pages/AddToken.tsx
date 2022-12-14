import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import useStyles from '../styles/styles';
import { getLocalStorageKey, saveData } from '../helpers/util';
import {
  WishWallet,
  CustomButton,
  CustomInput,
  CustomCurrencyInput,
  Loading,
} from '../components/genericComponents';
import { UpdateTokenModal } from '../components/modals';
import { Constants } from '../enums';

interface Data {
  token: string;
  balance: string;
}

function AddToken() {
  const navigate = useNavigate();
  const [data, setData] = React.useState<Data>({ token: '', balance: '' });
  const [error, setError] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isOpenModal, setModal] = React.useState<boolean>(false);

  const tokensRef = React.useRef(getLocalStorageKey(Constants.TOKENS));
  const { current: tokens } = tokensRef;

  const {
    h3,
    gridItemFlexFlexEnd,
    primaryButton,
    secondaryButton,
    gridItemFlexSpaceBetween,
    gridItemFlexColumn,
    gridMarginLeft,
  } = useStyles();

  const clearFields = () => setData({ token: '', balance: '' });

  const handleChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data, [name]: value });
  };

  const checkExistingToken = () => {
    if (!tokens) return false;
    return tokens
      .map(({ token }) => token.toLocaleLowerCase())
      .includes(data.token.toLocaleLowerCase());
  };

  const openUpdateTokenModal = () => setModal(true);

  const closeUpdateTokenModal = () => setModal(false);

  const validateFields = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(data)
      .every(([, value]) => !!value);
    setError(!isValid);
    return isValid;
  };

  const handleLoadingModal = () => {
    setLoading(true);
    return setTimeout(() => setLoading(false), 2000);
  };

  const saveTokenData = () => {
    const newTokens = !tokens
      ? [{ id: data.token, token: data.token, balance: data.balance }]
      : [...tokens, { id: data.token, ...data }];
    return saveData(newTokens);
  };

  const updateExistingTokenData = () => {
    const updatedTokens = tokens?.map((item) => {
      if (item.token === data.token) {
        return { ...item, balance: data.balance };
      }
      return item;
    });
    return saveData(updatedTokens);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    const isValidFields = validateFields(e);
    if (!isValidFields) return null;
    const existingToken = checkExistingToken();
    if (existingToken) {
      openUpdateTokenModal();
      return null;
    }
    saveTokenData();
    clearFields();
    handleLoadingModal();
    return setTimeout(() => navigate('/tokens'), 2000);
  };

  const updateToken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateExistingTokenData();
    closeUpdateTokenModal();
    handleLoadingModal();
    return setTimeout(() => navigate('/tokens'), 2000);
  };

  return (
    <Grid
      container
      component="section"
      id="add-token-container"
    >
      <Grid
        item
        className={gridMarginLeft}
      >
        <WishWallet />
      </Grid>
      <Grid item>
        <Grid item className={gridItemFlexSpaceBetween}>
          <Typography component="h3" className={h3}>
            Add Token
          </Typography>
          <CustomButton
            className={secondaryButton}
            onClick={() => navigate('/tokens')}
          >
            Voltar
          </CustomButton>
        </Grid>
        <form onSubmit={submit}>
          <Grid item className={gridItemFlexColumn}>
            <CustomInput
              error={error}
              label="Token"
              name="token"
              value={data.token}
              onChange={handleChange}
              dataTestId="token-input"
            />
          </Grid>
          <CustomCurrencyInput
            label="Balance"
            name="balance"
            value={data.balance}
            onChange={handleChange}
            error={error}
            dataTestId="balance-input"
          />
          <Grid item className={gridItemFlexFlexEnd}>
            <CustomButton className={primaryButton}>
              Save
            </CustomButton>
          </Grid>
        </form>
      </Grid>
      <Loading open={isLoading} />
      <UpdateTokenModal
        open={isOpenModal}
        closeModal={closeUpdateTokenModal}
        value={data.balance}
        onChange={handleChange}
        updateToken={updateToken}
      />
    </Grid>
  );
}

export default AddToken;
