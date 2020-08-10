import React from 'react';

import { useForm } from 'react-hook-form';

import Layout from '../Layout'

const SignupComponent = () => {

  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
      console.log(data);
      };


  return (
    <>
      <Layout>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div classNameName="field" >
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
                {/* <p className="help is-danger">This email is invalid</p> */}
              </div>

              <div>
                <label className="label">Password</label>

                  <div className="field">
                    <div className="control">
                      <input className="input" type="password" placeholder="Enter Password..."/>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input" type="password" placeholder="Confirm Password..."/>
                    </div>
                  </div>
              </div>

              <input type="submit" />

            </form>

       </Layout>
    </>
    
  )
}

export default SignupComponent


