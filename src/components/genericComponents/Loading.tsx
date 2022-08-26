import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface IProps {
  open: boolean;
}
export default function Loading({ open }: IProps) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        data-testid="spinner"
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
