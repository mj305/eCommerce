import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

/* import firebase from "../../firebase.config"; */

import authContext from "../../Context/AuthContext/authContext";
import Layout from "../Layout";

import styles from "./LoginComponent.module.scss";

const LoginComponent = () => {
  const { logIn, errors } = useContext(authContext);

  const { register, handleSubmit /* , errors */ } = useForm(); // initialise the hook

  if (errors) {
    toast("Invalid Email or Password");
  }

  const onSubmit = (data) => {
    logIn(data.email, data.password);
  };

  return (
    <>
      <Layout>
        <h3>LOGIN COMPONENT</h3>

        <form
          className={`${styles.loginFormContainer}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Enter email..."
                ref={register({ required: true })}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <p className="control has-icons-left">
              <input
                name="password"
                className="input"
                type="password"
                placeholder="Enter Password"
                ref={register({ required: true })}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <button type="submit" className={styles.error}>
            Submit
          </button>
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div>
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default LoginComponent;
