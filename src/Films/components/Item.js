import {Link} from 'inferno-router';
import './styles.css';

const Item = ({node}) => (
  <div className="col-sm-4">
    <div class="card Card text-center">
      <div class="card-block">
        <h3 class="card-title">{node.title}</h3>
      </div>
      <div className="list-group list-group-flush">
        <span className="list-group-item Highlight">{node.director}</span>
      </div>
      <div className="card-block">
        <Link to={`/films/detail/${node.id}`} className="card-link">show detail</Link>
      </div>
    </div>
  </div>
);

export default Item;