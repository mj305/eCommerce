import React, { useReducer } from "react";
import axios from "axios";
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
  NOT_LOGGEDIN,
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
        console.log(result.user.email);
        console.log(result.user.uid);

        axios
          .post(`${process.env.REACT_APP_API}/signUp`, {
            email: result.user.email,
            firebaseID: result.user.uid,
          })
          .then((data) => {
            console.log(data);
            dispatch({ type: SIGNUP_SUCCESS, payload: result });
          })
          .catch((error) => {
            console.log(error);
            dispatch({ type: SIGNUP_FAILURE, payload: error.message });
            dispatch({ type: CLEAR_ERRORS });
          });
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
    dispatch({ type: AUTH_REQUEST });
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        console.log("You are logged in...");
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      } else {
        dispatch({ type: NOT_LOGGEDIN });
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

  const passwordResetEmail = (email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((response) => {
        console.log(response);
        dispatch({ type: SIGNUP_FAILURE, payload: "Email Sent!" });
        dispatch({ type: CLEAR_ERRORS });
        // Email sent.
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: SIGNUP_FAILURE, payload: "Something Went Wrong..." });
        dispatch({ type: CLEAR_ERRORS });
        // An error happened.
      });
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  }

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
        passwordResetEmail,
        clearErrors,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
