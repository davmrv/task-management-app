import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import keys from '../Config/keys.json';

export default new ApolloClient({
  uri: 'https://syn-api-prod.herokuapp.com/graphql',
  headers: {
    Authorization: `Bearer ${keys.API_KEY}`,
  },
  cache: new InMemoryCache(),
});
