import {AUTH_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './types'

export default (state, {type, payload}) => {
   switch(type) {
     case AUTH_REQUEST: 
     return {
       ...state, 
       isAuthenticated: false,
       user: null,
       loading: true,
       error: null,
     }
     case SIGNUP_SUCCESS: 
     return {
       ...state, 
       isAuthenticated: true,
       user: payload,
       loading: false,
       error: null,
     }
     case SIGNUP_FAILURE: 
     return {
       ...state, 
       isAuthenticated: false,
       user: null,
       loading: true,
       error: payload,
     }
     case LOGIN_SUCCESS:
       return{
        ...state, 
        isAuthenticated: true,
        user: payload,
        loading: false,
        error: null,
       }
       case LOGIN_FAILURE:
        return{
          ...state, 
          isAuthenticated: false,
          user: null,
          loading: true,
          error: payload,
         }
         case LOGOUT_REQUEST:
           return{
            ...state, 
            isAuthenticated: true,
            loading: true,
           }
           case LOGOUT_SUCCESS:
             return{
              ...state, 
              isAuthenticated: false,
              user: null,
              loading: false,
             }
             case LOGOUT_FAILURE:
             return{
              ...state, 
              isAuthenticated: true,
              loading: false,
              error: payload,
             }
     default: return state
   }
}