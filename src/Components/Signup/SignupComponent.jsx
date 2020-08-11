import React from 'react';

import { useForm } from 'react-hook-form';

import Layout from '../Layout'

import styles from './SignupComponent.module.scss';

const SignupComponent = () => {

  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
      console.log(data);
      };


  return (
    <>
      <Layout>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="field" >
                <label className="label">Name</label>
                  <div className="control" >
                    <input name="firstname" className="input" type="text" placeholder="First Name..." ref={register} />
                    <input name="lastname" className="input" type="text" placeholder="Last Name..." ref={register({ required: true })} />
                    {errors.lastname && 'Last name is required.'}
                  </div>
              </div>


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

              <div class="field">
                  <label className="label">Password</label>
                    <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Enter Password"/>
                      <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                      </span>
                    </p>
                </div>

                <div class="field">
                  <label className="label">Confirm Password</label>
                    <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Confirm Password"/>
                      <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                      </span>
                    </p>
                </div>

              <button type="submit" className={styles.error}>Submit</button>

            </form>

       </Layout>
    </>
    
  )
}

export default SignupComponent


