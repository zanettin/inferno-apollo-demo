import Inferno from 'inferno';
import {Link} from 'inferno-router';

const Item = ({node}) => (
  <li>
    <Link to={`/films/detail/${node.id}`}><strong>{node.title}</strong></Link> | {node.director}
  </li>
);

export default Item;