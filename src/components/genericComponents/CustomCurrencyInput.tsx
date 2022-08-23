/* eslint-disable no-unused-vars */
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { InputLabel } from '@mui/material';

import CurrencyInput from './CurrencyInput';
import useStyles from '../../styles/styles';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.SyntheticEvent) => void;
  error: boolean;
}

function CustomCurrencyInput(props: Props) {
  const {
    label: labelName,
    value,
    name,
    error,
    onChange,
  } = props;
  const {
    input,
    inputContainer,
    label,
  } = useStyles();
  return (
    <Grid item className={inputContainer}>
      <InputLabel
        className={label}
      >
        {labelName}
      </InputLabel>
      <CurrencyInput
        error={error}
        value={value}
        name={name}
        onChange={onChange}
        className={input}
        fullWidth
        helperText={error && !value && 'required field!'}
      />
    </Grid>
  );
}

export default CustomCurrencyInput;
