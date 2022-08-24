import { makeStyles, Theme } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const buttonStyles = (theme: Theme) => ({
  border: 'none',
  color: '#fff',
  padding: 10,
  borderRadius: 5,
  fontWeight: 700,
  height: 'fit-content',
  width: '100px',
  '&: hover': {
    cursor: 'pointer',
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 0',
  },
  main: {
    backgroundColor: '#13152A',
    height: '-webkit-fill-available',
  },
  h2: {
    marginLeft: '50px',
  },
  h3: {
    fontWeight: 700,
  },
  primaryButton: {
    backgroundColor: theme.palette.primary.main,
    ...buttonStyles(theme),
  },
  secondaryButton: {
    backgroundColor: theme.palette.secondary.main,
    ...buttonStyles(theme),
  },
  warningButton: {
    backgroundColor: theme.palette.warning.main,
    ...buttonStyles(theme),
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 0 10vw',
    '@media (min-width:800px)': {
      margin: '0 0 0 80px',
    },
  },
  gridHomeSecondaryHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    margin: '30px  0 0 0',
  },
  gridHomeBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    margin: '10px  0',
  },
  gridAddToken: {
    margin: '20px  0',
  },
  gridSaveToken: {
    textAlign: 'right',
  },
  inputContainer: {
    margin: '20px 0 20px 10vw',
    '@media (min-width:800px)': {
      margin: '20px 0 20px 80px',
    },
  },
  input: {
    '& .MuiInputBase-root': {
      backgroundColor: '#fff',
      borderRadius: '5px',
      fontFamily: [
        'Shoika Regular',
        'sans-serif',
      ].join(','),
      fontWeight: 700,
      fontSize: '1rem',
      '&.Mui-focused fieldset': {
        borderColor: '#13152A',
      },
    },
    '& .MuiInputBase-input': {
      padding: '10px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'transparent',
    },
    '& .MuiFormHelperText-root': {
      marginLeft: 0,
    },
  },
  label: {
    '&.MuiFormLabel-root': {
      color: 'white',
    },
  },
}));

export default useStyles;
