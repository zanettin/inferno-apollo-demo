import Inferno from 'inferno';
import {ApolloProvider} from 'inferno-apollo';
import client from './shared/graphql/apolloClient';
import {Router} from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './shared/createRoutes';
import 'bootstrap/dist/css/bootstrap.css';

const browserHistory = createBrowserHistory();

// wrap the apollo provider for inferno around your core component
// and pass the configured client.
Inferno.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory} children={routes} />
  </ApolloProvider>,
  document.getElementById('app')
);