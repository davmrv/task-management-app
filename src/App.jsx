import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';
import theme from './Config/theme';
import client from './GraphQL/Client';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <div className="flex h-screen py-6 gap-6">
            <Sidebar />
            <Body />
          </div>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
