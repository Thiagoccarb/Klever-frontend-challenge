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
  dataTestId: string;

}

function CustomInput(props: Props) {
  const {
    label: labelName,
    value,
    name,
    error,
    onChange,
    dataTestId,
  } = props;
  const {
    input,
    label,
  } = useStyles();
  return (
    <>
      <InputLabel
        className={label}
      >
        {labelName}
      </InputLabel>
      <TextField
        inputProps={{
          'data-testid': dataTestId,
        }}
        error={error}
        value={value}
        name={name}
        onChange={onChange}
        className={input}
        fullWidth
        helperText={error && !value && 'required field!'}
      />
    </>
  );
}

export default CustomInput;
