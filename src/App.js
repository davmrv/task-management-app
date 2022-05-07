import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';
import theme from './Config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <div className='flex h-screen py-6 gap-6'>
          <Sidebar />
          <Body />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
