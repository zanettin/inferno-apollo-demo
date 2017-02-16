import Inferno from 'inferno';

const Item = ({node}) => (
  <li><strong>{node.title}</strong> | {node.director}</li>
);

export default Item;