import React, { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';

import authContext from './Context/AuthContext/authContext'

import About from './Pages/About'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'

import { HOME, ABOUT, LOGIN, SIGNUP, FORGOTPASSWORD, RESETPASSWORD } from './Routes'

function App() {
  const { verifyAuth } = useContext(authContext)

  useEffect(() => {
    verifyAuth()
  }, [])

  return (
    <>
        <Router>
          <Switch>

            <Route exact path={HOME} component={Home} />

            <Route path={ABOUT} component={About} />

            <Route path={LOGIN} component={Login} />

            <Route path={SIGNUP} component={Signup} />

            <Route path={FORGOTPASSWORD} component={ForgotPassword} />

            <Route path={RESETPASSWORD} component={ResetPassword} />

          </Switch>
        </Router>
    </>
  );
}

export default App;
