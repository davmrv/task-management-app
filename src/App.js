import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';
import theme from './Config/theme';
import { ApolloProvider } from '@apollo/client';
import client from './GraphQL/Client';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <div className='flex h-screen py-6 gap-6'>
            <Sidebar />
            <Body />
          </div>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
