import logo from '../asset/img/logo.svg';
import '../asset/style/App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          click the link to see demo
        </p>
        <Link
          className="App-link"
          to="/main"
        >
          rating widget
        </Link>
      </header>
    </div>
  );
}

export default App;
