import Inferno from 'inferno';

const Error = (props) => (
  <div>
    <h1>Oops!</h1>
    <pre>
      {props.data.error}
    </pre>
  </div>
);

export default Error;