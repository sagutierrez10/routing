import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import NumPath from './components/NumPath';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <h1>Simple Routing Practice</h1>
            <Link to="/home">Home</Link>
          </Route>
          <Route exact path="/home">
            <h1>Welcome!</h1> 
            <Link to="/">Back</Link>
          </Route>
          <Route exact path="/:id">
              <NumPath></NumPath>
          </Route>
          <Route exact path="/:id/:fontcolor/:backcolor">
              <NumPath></NumPath>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
