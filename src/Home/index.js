import Inferno from 'inferno';
import './styles.css';

const Home = () => (
  <div className="text-center">
    <h2>great to see you!</h2>
    <h5>this starter app contains (just for you):</h5>

    <ul class="list-group Box">
      <li class="list-group-item">InfernoJS</li>
      <li class="list-group-item">create-inferno-app</li>
      <li class="list-group-item">Inferno-Router</li>
      <li class="list-group-item">Inferno-Apollo</li>
      <li class="list-group-item">Incompose</li>
      <li class="list-group-item">Apollo graphQL client</li>
      <li class="list-group-item">SWAPI API</li>
    </ul>

    <div className="Box">
      And now - it's time to start hacking!<br/>
      Feel free to ping me if you have any questions on <a href="https://twitter.com/roman_zanettin" target="_blank">twitter</a> or create a PR.
    </div>

  </div>
);

export default Home;