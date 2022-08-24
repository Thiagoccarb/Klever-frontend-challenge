/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren } from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

function CustomButton(props: PropsWithChildren<{
  children: string;
  className: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  onClick?: () => void;
}>) {
  const { children, type, ...buttonProps } = props;
  return (
    <ButtonUnstyled
      {...buttonProps}
      type={type}
    >
      {children}
    </ButtonUnstyled>
  );
}

export default CustomButton;

CustomButton.defaultProps = {
  onClick: () => { },
  type: 'submit',
};
