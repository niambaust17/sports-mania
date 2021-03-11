import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Leagues from './components/Leagues/Leagues';
import Teams from './components/Teams/Teams';
import TeamInfo from './components/TeamInfo/TeamInfo';

function App()
{
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/sport/:sportName">
          <Leagues />
        </Route>
        <Route path="/league/:leagueName">
          <Teams />
        </Route>
        <Route path="/team/:id">
          <TeamInfo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
