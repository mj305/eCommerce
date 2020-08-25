import React from "react";
import { Redirect, Route } from "react-router-dom";

import { HOME } from "./index";

const UnprotectedRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        <Redirect
          to={{
            pathname: `${HOME}`,
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default UnprotectedRoute;
