import React, { useContext } from "react";

import { useForm } from "react-hook-form";

import authContext from "../../Context/AuthContext/authContext";

import Layout from "../Layout";

import styles from "./ForgotPasswordComponent.module.scss";

const ForgotPasswordComponent = () => {
  const { passwordResetEmail } = useContext(authContext);
  const { register, handleSubmit } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log(data);
    passwordResetEmail(data.email);
  };

  return (
    <Layout>
      <div className={`${styles.loginHeaderContainer}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FAE7E7"
            fillOpacity="1"
            d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,176C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        <h3 className={`${styles.loginHeader}`}>Forgot Password</h3>
        <p className={`${styles.signupHeaderParragraph}`}>
          Reset Your Password!
        </p>
      </div>

      <form
        className={`${styles.forgotFormContainer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`field ${styles.formField}`}>
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Enter email..."
              ref={register({ required: true })}
              name="email"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <button type="submit" className={`${styles.submitButton}`}>
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default ForgotPasswordComponent;
