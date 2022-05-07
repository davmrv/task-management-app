import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Sidebar from './Components/Sidebar';
import theme from './Config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className='flex h-screen py-6'>
        <Sidebar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
