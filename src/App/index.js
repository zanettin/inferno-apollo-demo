import Inferno from 'inferno';
import FilmList from '../Films/List';
import Logo from '../logo';
import './App.css';

const App = (props) => (
  <div className="App">
    <div className="App-header">
      <Logo width="80" height="80"/>
      <h2>Welcome to Inferno with Apollo</h2>
    </div>

    <FilmList />

  </div>
);

export default App;
