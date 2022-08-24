/* eslint-disable no-unused-vars */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@material-ui/core/Grid';

import useStyles from '../../styles/styles';

import {
  CustomButton,
  CustomCurrencyInput,
} from '../genericComponents';

interface IProps {
  open: boolean;
  onChange: (e: React.SyntheticEvent) => void;
  closeModal: () => void;
  updateToken: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
}

export default function UpdateTokenModal({
  open, onChange, closeModal, value, updateToken,
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
      BackdropProps={{
        timeout: 0,
      }}
      className={modal}
    >
      <Grid
        container
        component="section"
        id="add-token-container"
        className={gridModal}
      >
        <Grid item>
          <Typography variant="h4">
            Token has already been registered, would you like to update it?
          </Typography>
        </Grid>
        <Grid item className={gridItemFlexColumn}>
          <form onSubmit={updateToken}>
            <CustomCurrencyInput
              label="Balance"
              name="balance"
              value={value}
              onChange={onChange}
              error={false}
            />
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
              >
                Update
              </CustomButton>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Modal>
  );
}
