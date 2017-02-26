import Inferno from 'inferno';
import {Link} from 'inferno-router';
import Logo from '../logo';
import ApolloLogo from '../logo-apollo.png';
import './styles.css';

const App = (props) => (
  <div className="container Wrapper">

    {/* HEADER */}
    <div className="jumbotron text-center">
      <Logo width="80" height="80"/>
      <img src={ApolloLogo} width="90" height="90" alt="apollo data" className="ApolloLogo" />
      <h2>welcome to the infernoJS starter app</h2>
    </div>

    {/* NAVIGATION */}
    <ul className="nav nav-pills justify-content-center">
      <li className="nav-item"><Link to='/' className="nav-link" activeClassName="active">home</Link></li>
      <li className="nav-item"><Link to='/films' className="nav-link" activeClassName="active">film list</Link></li>
    </ul>

    {/* ROUTER */}
    <div className="Content">
      {props.children}
    </div>

  </div>
);

export default App;
