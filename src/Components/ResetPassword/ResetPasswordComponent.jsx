import React, { useContext } from "react";

import { useForm } from "react-hook-form";

import Layout from "../Layout";

import styles from "./ResetPasswordComponent.module.scss";

import authContext from "../../Context/AuthContext/authContext";
import { registerVersion } from "firebase";

const ResetPasswordComponent = () => {
  const { passwordResetEmail } = useContext(authContext);
  const { handleSubmit, register } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Layout>
        <h3>RESET PASSWORD COMPONENT</h3>

        <form
          className={`${styles.resetFormContainer}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="field">
            <label className="label">New Password</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Enter Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <div class="field">
            <label className="label">Confirm Password</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Enter Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
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

export default ResetPasswordComponent;
