import React, { useReducer } from "react";
import {
  AUTH_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CLEAR_ERRORS,
} from "./types";

import authReducer from "./authReducer";
import authContext from "./authContext";
import firebase from "../../firebase.config";

const AuthState = (props) => {
  const initialState = {
    user: null,
    loading: false,
    errors: null,
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const signUp = (email, password) => {
    dispatch({ type: AUTH_REQUEST });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        dispatch({ type: SIGNUP_SUCCESS, payload: result });
      })
      .catch((error) => {
        dispatch({ type: SIGNUP_FAILURE, payload: error.message });
        dispatch({ type: CLEAR_ERRORS });
      });
  };

  const logIn = (email, password) => {
    dispatch({ type: AUTH_REQUEST });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        dispatch({ type: LOGIN_SUCCESS, payload: result });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        dispatch({ type: CLEAR_ERRORS });
      });
  };

  const verifyAuth = async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        console.log("You are logged in...");
      } else {
        console.log("Not Logged in...");
      }
    });
  };

  const logOut = () => {
    dispatch({ type: LOGOUT_REQUEST });
    firebase
      .auth()
      .signOut()
      .then((result) => {
        dispatch({ type: LOGOUT_SUCCESS });
        console.log("You're loggedout");
      })
      .catch((error) => dispatch({ type: LOGOUT_FAILURE }));
  };

  return (
    <authContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        errors: state.errors,
        signUp,
        logIn,
        logOut,
        verifyAuth,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
