import { CART_REQUEST, CART_SUCCESS, CART_FAILURE, CART_COUNT } from "./types";

export default (state, { type, payload, countPayload }) => {
  switch (type) {
    case CART_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
        items: [],
        cartCount: null,
      };
    case CART_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        items: payload,
        cartCount: countPayload,
      };
    case CART_FAILURE:
      return {
        ...state,
        loading: false,
        errors: payload,
        items: [],
        cartCount: null,
      };
    default:
      return state;
  }
};
