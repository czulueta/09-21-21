import {Switch, Route, Link} from "react-router-dom"
import Home from "./Home"
import Movies from "./Movies"
import Shows from "./Shows"
import Purchases from "./Purchases"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/shows">Tv Shows</Link>
        <Link to="/purchases">Purchases</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/shows">
          <Shows />
        </Route>
        <Route path="/purchases">
          <Purchases />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
