import React from 'react'

/* import { useForm } from 'react-hook-form'; */

import Layout from '../Layout'

const ResetPasswordComponent = () => {

  return (
    <Layout>

         <h1>RESET PASSWORD COMPONENT</h1>

          <div class="field">
            <label className="label">New Password</label>
              <p class="control has-icons-left">
               <input class="input" type="password" placeholder="Password"/>
                <span class="icon is-small is-left">
                 <i class="fas fa-lock"></i>
                </span>
              </p>
          </div>

          <div class="field">
            <label className="label">Confirm Password</label>
              <p class="control has-icons-left">
               <input class="input" type="password" placeholder="Password"/>
                <span class="icon is-small is-left">
                 <i class="fas fa-lock"></i>
                </span>
              </p>
          </div>

          <div class="field">
            <p class="control">
              <button class="button">Reset</button>
            </p>
          </div>
    </Layout>
  )
}

export default ResetPasswordComponent