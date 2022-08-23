/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren } from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

function CustomButton(props: PropsWithChildren) {
  const { children, ...buttonProps } = props;
  return (
    <ButtonUnstyled
      {...buttonProps}
    >
      {children}
    </ButtonUnstyled>
  );
}

export default CustomButton;
