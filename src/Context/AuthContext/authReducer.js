import {
  AUTH_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CLEAR_ERRORS,
} from "./types";

export default (state, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: true,
        errors: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
        errors: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: true,
        errors: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
        errors: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: true,
        errors: payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        errors: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};
