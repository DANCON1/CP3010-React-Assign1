import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import SubmissionForm from './SubmissionForm';
import Movies from './Movies';


function App() {

    return (
      <Router>
        <Navigation />
        <div className="container">
          <Route path="/" element={<Movies />} />
          <Route path="/submission" element={<SubmissionForm />} />
        </div>
      </Router>
    );
}


export default App;
