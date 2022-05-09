import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import customColors from './customColors';

export default createTheme({
  palette: {
    mode: 'dark',
    ...customColors,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
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
            borderRight: `solid 4px ${customColors.primary.main}`,
            background: 'linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)',
            color: customColors.primary.main,
            '.MuiListItemIcon-root': {
              color: customColors.primary.main,
            },
          },
        },
      },
    },
  },
});
