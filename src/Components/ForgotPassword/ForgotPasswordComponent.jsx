import React from 'react'

import { useForm } from 'react-hook-form';

import Layout from '../Layout'

import styles from './ForgotPasswordComponent.module.scss';

const ForgotPasswordComponent = () => {

  const { handleSubmit } = useForm(); // initialise the hook
  const onSubmit = (data) => {
      console.log(data);
      };

  return (
    <Layout>
    <h3>FORGOT PASSWORD COMPONENT</h3>

    <form className={`${styles.forgotFormContainer}`} onSubmit={handleSubmit(onSubmit)}>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Enter email..."/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>

      <button type="submit" className={styles.error}>Submit</button>

    </form>

</Layout>
  )
}

export default ForgotPasswordComponent