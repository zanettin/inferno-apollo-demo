import Inferno from 'inferno';
import {Link} from 'inferno-router';
import Logo from '../logo';
import './App.css';

const App = (props) => (
  <div className="App">
    <div className="App-header">
      <Logo width="80" height="80"/>
      <h2>Welcome to Inferno with Apollo</h2>
    </div>

    <div><Link to='/'>home</Link></div>
    <div><Link to='/films'>film list</Link></div>

    {props.children}

  </div>
);

export default App;
