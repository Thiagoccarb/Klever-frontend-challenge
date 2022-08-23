/* eslint-disable no-unused-vars */
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, InputLabel } from '@mui/material';
import useStyles from '../../styles/styles';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.SyntheticEvent) => void;
  error: boolean;
}

function CustomInput(props: Props) {
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
      <TextField
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

export default CustomInput;
