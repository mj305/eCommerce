import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AuthState from "./Context/AuthContext/AuthState";
import CartState from "./Context/CartContext/CartState";

ReactDOM.render(
  <AuthState>
    <CartState>
      <App />
    </CartState>
  </AuthState>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
