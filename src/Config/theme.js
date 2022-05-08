import { createTheme, palette } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export default createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation: {
          borderRadius: 20,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: grey[900],
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '.MuiInputAdornment-root': {
            color: grey[700],
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            borderRight: 'solid 4px #DA584B',
            color: '#DA584B',
            background: 'linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)',
            '.MuiListItemIcon-root': {
              color: '#DA584B',
            },
          },
        },
      },
    },
  },
});
