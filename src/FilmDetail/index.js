import { graphql } from 'inferno-apollo';
import gql from 'graphql-tag';
import {
  compose,
  branch,
  renderComponent,
} from 'incompose';
import {Link} from 'inferno-router';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import './styles.css';

const FilmDetail = (props) => (
  <div>
    <div class="card">
      <div class="card-header text-right">
        <Link to="/films" className="btn btn-danger">close</Link>
      </div>
      <div class="card-block">
        <h4 class="card-title">{props.data.node.title}</h4>
        <p class="card-text">{props.data.node.openingCrawl}</p>
      </div>
      <ul class="list-group list-group-flush text-left">
        <li class="list-group-item">
          directed by&nbsp;<span className="Highlight">{props.data.node.director}</span>
        </li>
        <li class="list-group-item">
          episode ID&nbsp;<span className="Highlight">{props.data.node.episodeID}</span>
        </li>
      </ul>
    </div>

    <hr className="Divider" />
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
        openingCrawl
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