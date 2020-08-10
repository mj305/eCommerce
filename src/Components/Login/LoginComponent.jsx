import React from 'react'

import { useForm } from 'react-hook-form';

import Layout from '../Layout'

const LoginComponent = () => {



  return (
    <>
        <Layout> 
          <div class="field">
            <label className="label">Email</label>
              <p class="control has-icons-left has-icons-right">
               <input class="input" type="email" placeholder="Email"/>
                <span class="icon is-small is-left">
                 <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                 <i class="fas fa-check"></i>
                </span>
              </p>
          </div>
          <div class="field">
            <label className="label">Password</label>
              <p class="control has-icons-left">
               <input class="input" type="password" placeholder="Password"/>
                <span class="icon is-small is-left">
                 <i class="fas fa-lock"></i>
                </span>
              </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button">Login</button>
            </p>
          </div>
        </Layout>
    </>
  )
}

export default LoginComponent