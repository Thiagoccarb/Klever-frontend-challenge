/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren } from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

function CustomButton(props: PropsWithChildren<{
  children: string;
  className: string;
  onClick?: () => void;
}>) {
  const { children, ...buttonProps } = props;
  return (
    <ButtonUnstyled
      {...buttonProps}
      type="submit"
    >
      {children}
    </ButtonUnstyled>
  );
}

export default CustomButton;

CustomButton.defaultProps = {
  onClick: () => { },
};
