import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home'
import About from './Pages/About'

import {HOME, ABOUT} from './Routes'

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path={HOME} component={Home} />

          <Route path={ABOUT} component={About} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
