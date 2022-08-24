import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@material-ui/core/Grid';

import useStyles from '../../styles/styles';

import {
  CustomButton,
} from '../genericComponents';

interface IProps {
  open: boolean;
  closeModal: () => void;
  removeToken: () => void;
  token: string;
}

export default function UpdateTokenModal({
  open, closeModal, token, removeToken,
}: IProps) {
  const {
    gridItemFlexColumn,
    primaryButton,
    warningButton,
    modal,
    gridModal,
    gridItemFlexSpaceBetween,
  } = useStyles();

  return (
    <Modal
      open={open}
      onClose={closeModal}
      className={modal}
      BackdropProps={{
        timeout: 0,
      }}
    >
      <Grid
        container
        component="section"
        id="add-token-container"
        className={gridModal}
      >
        <Grid item>
          <Typography variant="h4">
            {
              `Do you really wish to remove token ${token}? This action is irreversible`
            }
          </Typography>
        </Grid>
        <Grid item className={gridItemFlexColumn}>
          <Grid item className={gridItemFlexSpaceBetween}>
            <CustomButton
              className={primaryButton}
              type="button"
              onClick={closeModal}
            >
              Cancel
            </CustomButton>
            <CustomButton
              className={warningButton}
              onClick={removeToken}
            >
              Remove
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
}
