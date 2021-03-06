import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import UnprotectedRoute from "./Routes/UnprotectedRoute";

import authContext from "./Context/AuthContext/authContext";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import PaymentSuccess from "./Pages/PaymentSuccess";

import {
  HOME,
  ABOUT,
  LOGIN,
  SIGNUP,
  FORGOTPASSWORD,
  RESETPASSWORD,
  SINGLEPRODUCT,
  CART,
  PAYMENTSUCCESS,
} from "./Routes";

import "react-bulma-components/dist/react-bulma-components.min.css";
import "react-toastify/dist/ReactToastify.css";

AOS.init();

function App() {
  const { verifyAuth, isAuthenticated, loading } = useContext(authContext);

  useEffect(() => {
    verifyAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path={HOME} component={Home} />

          <Route path={ABOUT} component={About} />

          <UnprotectedRoute
            loading={loading}
            path={LOGIN}
            component={Login}
            isAuthenticated={isAuthenticated}
          />

          <UnprotectedRoute
            loading={loading}
            path={SIGNUP}
            component={Signup}
            isAuthenticated={isAuthenticated}
          />

          <Route path={FORGOTPASSWORD} component={ForgotPassword} />

          <Route path={RESETPASSWORD} component={ResetPassword} />

          <Route path={SINGLEPRODUCT} component={Product} />

          <Route path={CART} component={Cart} />

          <Route path={PAYMENTSUCCESS} component={PaymentSuccess} />
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
