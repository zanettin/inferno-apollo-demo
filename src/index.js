import Inferno from 'inferno';
import {ApolloProvider} from 'inferno-apollo';
import client from './shared/graphql/apolloClient';
import App from './App';
import './index.css';

// wrap the apollo provider for inferno around your core component
// and pass the configured client.
Inferno.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
