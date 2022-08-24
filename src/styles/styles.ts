import { makeStyles, Theme } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const buttonStyles = (theme: Theme, color: string) => ({
  border: 'none',
  color: '#fff',
  padding: 10,
  borderRadius: 5,
  fontWeight: 700,
  height: 'fit-content',
  width: '100px',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: alpha(color, 0.9),
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
  h3: {
    fontWeight: 700,
  },
  marginLeft: {
    marginLeft: '32px',
  },
  editIcon: {
    '&.MuiSvgIcon-root': {
      color: '#fff',
      width: '12px',
      margin: '0 10px',
      '&:hover': { cursor: 'pointer' },
    },
  },
  primaryButton: {
    backgroundColor: theme.palette.primary.main,
    ...buttonStyles(theme, theme.palette.primary.main),
  },
  secondaryButton: {
    backgroundColor: theme.palette.secondary.main,
    ...buttonStyles(theme, theme.palette.secondary.main),
  },
  warningButton: {
    backgroundColor: theme.palette.warning.main,
    ...buttonStyles(theme, theme.palette.secondary.main),
  },
  gridAddTokenBody: {
    margin: '20px 0 0 10vw',
    '@media (min-width:800px)': {
      margin: '0 0 0 80px',
    },
  },
  gridItemFlexSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '10px  0',
    alignItems: 'center',
  },
  gridItemFlex: {
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  gridItemFlexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: '100%',
    padding: '10px',
    textAlign: 'center',
  },
  gridItemFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '10px 0',
  },
  gridItemFlexFlexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    margin: '10px 0',
  },
  gridMargin: {
    margin: '20px  0',
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
  gridModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
  },
  modal: {
    '& .MuiBackdrop-root': {
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgb(0 0 0 / 90%)',
    },
  },
}));

export default useStyles;
