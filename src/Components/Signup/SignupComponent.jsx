import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

/* import firebase from '../../firebase.config'; */

import authContext from "../../Context/AuthContext/authContext";
import Layout from "../Layout";

import styles from "./SignupComponent.module.scss";

const SignupComponent = () => {
  const { signUp, errors } = useContext(authContext);

  const { register, handleSubmit /* , errors */ } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    signUp(data.email, data.password);
  };

  if (errors) {
    toast(errors);
  }

  return (
    <>
      <Layout>
        <div className={`${styles.signupHeaderContainer}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FAE7E7"
              fillOpacity="1"
              d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,176C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>

          <h3 className={`${styles.signupHeaderHeder}`}>Sign Up</h3>
          <p className={`${styles.signupHeaderParragraph}`}>
            Please fill in this form to create an account!
          </p>
        </div>

        <form
          className={`${styles.signupFormContainer}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={`field ${styles.formField}`}>
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

          <div className={`field ${styles.formField}`}>
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

          <div className={`field ${styles.formField}`}>
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

          <button type="submit" className={`${styles.submitButton}`}>
            Sign Up
          </button>
          <div className={`${styles.signUpLogin}`}>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default SignupComponent;
