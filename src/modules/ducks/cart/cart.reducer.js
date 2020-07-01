import { createReducer } from 'reduxsauce';
import { Types } from './cart.actions';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_CART_HIDDEN]: (state) => {
    return {
      ...state,
      hidden: !state.hidden
    };
  },
  [Types.ADD_ITEM]: (state, action) => {
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.item)
    };
  },
  [Types.REMOVE_ITEM]: (state, action) => {
    return {
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.item)
    };
  },
  [Types.CLEAR_ITEM_FROM_CART]: (state, action) => {
    return {
      ...state,
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.item.id)
    };
  },
  [Types.CLEAR_CART]: (state) => {
    return {
      ...state,
      cartItems: []
    };
  }
});
