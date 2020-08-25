import React from "react";
import { Redirect, Route } from "react-router-dom";

import { LOGIN } from "./index";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `${LOGIN}`,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
