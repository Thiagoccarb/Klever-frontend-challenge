import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';

import useStyles from '../styles/styles';
import {
  WishWallet,
  CustomButton,
  CustomInput,
  Loading,
  CustomCurrencyInput,
} from '../components/genericComponents';
import { getLocalStorageKey, saveData } from '../helpers/util';
import { RemoveTokenModal } from '../components/modals';
import { IToken } from '../interfaces';
import { Constants } from '../enums';

interface Data {
  token: string;
  balance: string;
}

function EditToken() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, , , id] = pathname.split('/');

  const [data, setData] = React.useState<Data>({ token: '', balance: '' });
  const [error, setError] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isOpenModal, setModal] = React.useState<boolean>(false);

  const tokensRef = React.useRef(getLocalStorageKey(Constants.TOKENS))
    || [] as IToken[] | [];
  const { current: tokens } = tokensRef;

  const getData = () => {
    const tokenData = tokens?.find((item) => item.id === id) || {};
    const { token = '', balance = '0' } = tokenData as IToken;
    setData({ token, balance });
  };

  const {
    h3,
    primaryButton,
    secondaryButton,
    gridMarginLeft,
    warningButton,
    gridItemFlexColumn,
    gridItemFlexSpaceBetween,
  } = useStyles();

  const openRemoveTokenModal = () => setModal(true);

  const closeRemoveTokenModal = () => setModal(false);

  const handleChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data, [name]: value });
  };

  const validateFields = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(data)
      .every(([, value]) => !!value);
    setError(!isValid);
    return isValid;
  };

  const updateTokenData = () => {
    const updatedTokens = tokensRef.current?.map((item) => {
      if (item.token === data.token) {
        const { token, balance } = data;
        return { id: token, token, balance };
      }
      return item;
    });
    return saveData(updatedTokens);
  };

  const clearFields = () => setData({ token: '', balance: '' });

  const handleLoadingModal = () => {
    setLoading(true);
    return setTimeout(() => setLoading(false), 2000);
  };

  const removeTokenData = () => {
    const updatedTokens = tokensRef.current?.filter((item) => item.token !== data.token);
    saveData(updatedTokens);
    handleLoadingModal();
    closeRemoveTokenModal();
    clearFields();
    return setTimeout(() => navigate('/tokens'), 2000);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    const isValidFields = validateFields(e);
    if (!isValidFields) return null;
    updateTokenData();
    handleLoadingModal();
    clearFields();
    return setTimeout(() => navigate('/tokens'), 2000);
  };

  React.useEffect(() => getData(), []);

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
            label="Token"
            name="token"
            value={data.token}
            onChange={handleChange}
            error={error}
            dataTestId="token-input"
          />
        </Grid>
        <Grid item className={gridItemFlexColumn}>
          <CustomCurrencyInput
            label="Balance"
            name="balance"
            value={data.balance}
            onChange={handleChange}
            error={error}
            dataTestId="balance-input"
          />
        </Grid>
        <Grid item className={gridItemFlexSpaceBetween}>
          <CustomButton
            className={warningButton}
            type="button"
            onClick={openRemoveTokenModal}
          >
            Remove
          </CustomButton>
          <CustomButton className={primaryButton}>
            Save
          </CustomButton>
        </Grid>
      </form>
      <Loading open={isLoading} />
      <RemoveTokenModal
        open={isOpenModal}
        closeModal={closeRemoveTokenModal}
        token={data.token}
        removeToken={removeTokenData}
      />
    </Grid>
  );
}

export default EditToken;
