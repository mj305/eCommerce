import React, { useReducer } from 'react'
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from './types'

import authReducer from './authReducer'
import authContext from './authContext'
import firebase from '../../firebase.config'

const AuthState = (props) => {

  const initialState = {user: null, 
                        loading: false,
                        errors: null,
                        isAuthenticated: false,
                       }
  
  const [state, dispatch] = useReducer(authReducer, initialState)
                       
  const signUp = (email, password) => {
    dispatch({type: SIGNUP_REQUEST})
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result)
      dispatch({type: SIGNUP_SUCCESS, payload: result})
    }).catch((error) => {
      dispatch({type: SIGNUP_FAILURE, payload: error})
       }
    )
  };

  return (
      <authContext.Provider value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        errors: state.errors,
        signUp,

      }} >
        {props.children}
      </authContext.Provider>
  )
}

export default AuthState