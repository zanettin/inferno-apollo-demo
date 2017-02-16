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
import './list.css';

const renderFilm = (node) => (
  <Item {...node} />
);

const List = (props) => (
  <div>
    <h1>Film-List</h1>
    <ul className="List">
      {
        props.data.allFilms &&
        props.data.allFilms.edges &&
        props.data.allFilms.edges.map(renderFilm)
      }
    </ul>
  </div>
);

const query = gql`
  query AllFilms {
    allFilms {
      edges {
        node {
          title
          director
        }
      }
    }
  }
`;

export default compose(
  graphql(query),
  branch(
    (props) => !props.data || props.data.error,
    renderComponent(Error),
  ),
  branch(
    (props) => props.data.loading,
    renderComponent(Loading),
  )
)(List);
