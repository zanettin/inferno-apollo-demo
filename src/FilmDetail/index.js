import Inferno from 'inferno';
import { graphql } from 'inferno-apollo';
import gql from 'graphql-tag';
import {
  compose,
  branch,
  renderComponent,
} from 'incompose';
import Loading from '../shared/Loading';
import Error from '../shared/Error';

const FilmDetail = (props) => (
  <div>
    <h1>Film Detail for id {props.data.node.id}</h1>
    <div>Title: <strong>{props.data.node.title}</strong></div>
    <div>Episode ID: <strong>{props.data.node.episodeID}</strong></div>
    <div>Director: <strong>{props.data.node.director}</strong></div>
    <div>Release Date: <strong>{props.data.node.releaseDate}</strong></div>
  </div>
);

const query = gql`
  query FilmDetail($filmId: ID!) {
    node(id: $filmId) {
      __typename
      ... on Film {
        id
        title
        episodeID
        director
        releaseDate
      }
    }
  }
`;

export default compose(
  graphql(query, {
    options : (props) => ({
      variables : {
        filmId  : props.params.id,
      }
    })
  }),
  branch(
    (props) => !props.data || props.data.error,
    renderComponent(Error),
  ),
  branch(
    (props) => props.data.loading,
    renderComponent(Loading),
  )
)(FilmDetail);