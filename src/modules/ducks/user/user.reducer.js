import { createReducer } from 'reduxsauce';
import { Types } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: (state, action) => {
    return {
      ...state,
      currentUser: action.currentUser,
      error: null
    };
  },
  [Types.SIGN_OUT_SUCCESS]: (state) => {
    return {
      ...state,
      currentUser: null,
      error: null
    };
  },
  [Types.SIGN_IN_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  },
  [Types.SIGN_OUT_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  }
});
