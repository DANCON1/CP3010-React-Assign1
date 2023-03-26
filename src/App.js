import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import SubmissionForm from './SubmissionForm';
import Movies from './Movies';

function App() {

  let [movies, setMovies] = useState(null);

  return (
    <Router>
      <Navigation />
      <div className="container">
        <Route path="/" element={<Movies movies={movies} setMovies={setMovies} />} />
        <Route path="/submission" element={<SubmissionForm movies={movies} setMovies={setMovies}/>} />
      </div>
    </Router>
  );
}

export default App;
