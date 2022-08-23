/* eslint-disable no-unused-vars */
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Input, InputLabel } from '@mui/material';
import useStyles from '../../styles/styles';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.SyntheticEvent) => void;
}

function AddToken(props: Props) {
  const {
    label: labelName,
    value,
    name,
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
      <Input
        value={value}
        name={name}
        onChange={onChange}
        className={input}
        fullWidth
        disableUnderline
      />
    </Grid>
  );
}

export default AddToken;
