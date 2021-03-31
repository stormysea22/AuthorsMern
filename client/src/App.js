import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import Show from './views/Show';

function App() {
  return (
    <div className="App">
      <div className="d-flex col-6 mx-auto justify-content-around">
        <Link to="/"> All Authors</Link>
        <Link to="/new">Add Author</Link>
      </div>
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Edit path="/edit/:id" />
        <Show path="/show/:id" />
      </Router>
    </div>
  );
}

export default App;
