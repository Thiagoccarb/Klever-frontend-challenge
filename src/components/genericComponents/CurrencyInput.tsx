/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@mui/material/TextField';
import useStyles from '../../styles/styles';

function CurrrencyInput(props: any) {
  const { input } = useStyles();
  const {
    inputRef,
    value,
    onChange,
  } = props;

  return (
    <NumberFormat
      {...props}
      className={input}
      getInputRef={inputRef}
      value={value}
      customInput={TextField}
      allowEmptyFormatting
      type="text"
      thousandSeparator="."
      decimalSeparator=","
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
    />
  );
}

export default CurrrencyInput;
