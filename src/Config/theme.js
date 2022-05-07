import { createTheme } from '@mui/material/styles';

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
  },
});
