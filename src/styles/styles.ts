import { makeStyles, Theme } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const buttonStyles = (theme: Theme) => ({
  border: 'none',
  color: '#fff',
  padding: 10,
  borderRadius: 5,
  fontWeight: 700,
  height: 'fit-content',
  '&: hover': {
    cursor: 'pointer',
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },
});

const useStyles = makeStyles((theme) => ({

  header: {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0',
  },
  main: {
    backgroundColor: '#13152A',
    height: '-webkit-fill-available',
  },
  h1: {
    fontWeight: 700,
  },
  primaryButton: {
    backgroundColor: theme.palette.primary.main,
    ...buttonStyles(theme),
  },
}));

export default useStyles;
