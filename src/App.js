import { Container, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Box className="p-6">
          <h1 className="text-4xl mb-2">
            Task Management App
          </h1>
          <p>
            Init!
          </p>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
