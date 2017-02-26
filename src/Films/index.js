import Inferno from 'inferno';
import { graphql } from 'inferno-apollo';
import gql from 'graphql-tag';
import {
  compose,
  branch,
  renderComponent,
} from 'incompose';
import Item from './components/Item'
import Loading from '../shared/Loading';
import Error from '../shared/Error';

// render a single film item by just passing its data node.
const renderFilm = (node) => (
  <Item {...node} />
);

// our list component is just a pure functional component
// that will receive the fetched films on data.allFilms
// if everything went as expected. Please not that this
// component just gets rendered, if none of the composed
// branches are rendered.
const List = (props) => (
  <div>

    {/* ROUTER */}
    {props.children}

    {/* RENDER FILMS */}
    <div className="row">
      {
        props.data.allFilms &&
        props.data.allFilms.edges &&
        props.data.allFilms.edges.map(renderFilm)
      }
    </div>

  </div>
);

// let's create our graphQL query. You can test it
// also by navigating to localhost:4000.
const query = gql`
  query AllFilms {
    allFilms {
      edges {
        node {
          id
          title
          director
        }
      }
    }
  }
`;


// let's enrich our list component and add some extra sugar
// by adding the graphql query and branches to handle the loading
// sequence and show a error message if something went wrong.
export default compose(

  // compose graphQL query to component
  graphql(query),

  // if something went wrong during apollo client init
  // or if we do have a network error, we return
  // a branched component and not our list component.
  branch(
    (props) => !props.data || props.data.error,
    renderComponent(Error),
  ),

  // while loading, we want to show a loading screen
  // to our users, so we compose another branch
  // which checks the loading state
  branch(
    (props) => props.data.loading,
    renderComponent(Loading),
  )
)(List);
