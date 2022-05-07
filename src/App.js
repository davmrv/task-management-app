import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from './Components/Sidebar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation: {
          borderRadius: 20,
        }
      }
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className='flex h-screen py-6'>
        <Sidebar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
