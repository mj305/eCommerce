import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';


import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

import {HOME, ABOUT, LOGIN, SIGNUP} from './Routes'

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path={HOME} component={Home} />

          <Route path={ABOUT} component={About} />

          <Route path={LOGIN} component={Login} />

          <Route path={SIGNUP} component={Signup} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
