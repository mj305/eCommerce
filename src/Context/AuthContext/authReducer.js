import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from './types'

export default (state, {type, payload}) => {
   switch(type) {
     case SIGNUP_REQUEST: 
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
     default: return state
   }
}