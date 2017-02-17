import {
  default as ApolloClient,
  createNetworkInterface
} from 'apollo-client';

// we setup the apollo client for inferno
// by defining the network interface for it.
// in this example we connect to our swapi node
// backend which provides the graqhQL interface.
export default new ApolloClient({
  networkInterface : createNetworkInterface({
    uri : 'http://localhost:4000/graphql',
  })
});