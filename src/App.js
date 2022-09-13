//import logo from './logo.svg';
import './App.css';
import './palette.css'
import { PlayBoard } from './components/PlayBoard/PlayBoard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { CreatePlayer } from './components/CreatePlayer/CreatePlayer';
import { Home } from './components/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create-player" element={<CreatePlayer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
