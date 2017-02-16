import Inferno from 'inferno';
import {ApolloProvider} from 'inferno-apollo';
import client from './shared/graphql/apolloClient';
import App from './App';
import './index.css';

Inferno.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
