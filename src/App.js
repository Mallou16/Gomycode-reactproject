import "./App.css";
import Navbar from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Countries />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/SignUp" exact>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

/**
 *                  app(root state)
 *
 *        countries(state2)         login(State3)
 *
 *        card(state1)
 *
 * root state can be seen by :app , contries ,card
 *
 * state 2 ,contries, card,
 *
 * state1 can be seen by card
 *
 * state3 can be seen by login
 *
 *
 * redux {
 *  store contains state
 * store can be accessed by every component
 * }
 *
 *
 *        node js ,express js , mongodb
 *
 *
 */
