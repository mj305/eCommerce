import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

/* import firebase from '../../firebase.config'; */

import authContext from "../../Context/AuthContext/authContext";
import Layout from "../Layout";

import styles from "./SignupComponent.module.scss";

const SignupComponent = () => {
  const { signUp, loading, errors } = useContext(authContext);

  const { register, handleSubmit /* , errors */ } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    signUp(data.email, data.password);
  };

  if (errors) {
    toast("User already exist");
  }

  return (
    <>
      <Layout>
        <h3>SIGNUP COMPONENT</h3>

        <form
          className={`${styles.signupFormContainer}`}
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

          <div className="field">
            <label className="label">Confirm Password</label>
            <p className="control has-icons-left">
              <input
                name="confirmpassword"
                className="input"
                type="password"
                placeholder="Confirm Password"
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
        </form>
      </Layout>
    </>
  );
};

export default SignupComponent;
