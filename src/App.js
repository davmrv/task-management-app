import { Container, Box, CssBaseline, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from './Assets/logo.svg';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className='flex h-screen py-6'>
        <Box className='w-1/5 h-full'>
          <Paper className='h-full flex flex-col items-center py-4 px-6'>
            <img src={logo} alt='logo' className='w-12' />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
