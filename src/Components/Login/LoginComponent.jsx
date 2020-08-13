import React from 'react'

import { useForm } from 'react-hook-form';

import firebase from '../../firebase.config';

import Layout from '../Layout'

import styles from './LoginComponent.module.scss';

const LoginComponent = () => {

  const { register, handleSubmit/* , errors */ } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((result) => {
      console.log(result)
    }).catch((error) => console.log(error))
  };

  return (
    <>
      <Layout>
            <h3>LOGIN COMPONENT</h3>

            <form className={`${styles.loginFormContainer}`} onSubmit={handleSubmit(onSubmit)}>

              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input name="email" className="input" type="email" placeholder="Enter email..." ref={register({ required: true })}/>
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
                    <input name="password" className="input" type="password" placeholder="Enter Password" ref={register({ required: true })}/>
                      <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                      </span>
                    </p>
                </div>

              <button type="submit" className={styles.error}>Submit</button>

            </form>

       </Layout>
    </>
  )
}

export default LoginComponent