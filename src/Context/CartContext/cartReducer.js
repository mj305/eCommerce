import { CART_REQUEST, CART_SUCCESS, CART_FAILURE } from "./types";

export default (state, { type, payload }) => {
  switch (type) {
    case CART_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
        items: [],
      };
    case CART_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        items: payload,
      };
    case CART_FAILURE:
      return {
        ...state,
        loading: false,
        errors: payload,
        items: [],
      };
    default:
      return state;
  }
};
