import { createReducer } from 'reduxsauce';
import { Types } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: (state, action) => {
    const { currentUser } = action;
    return {
      ...state,
      currentUser,
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
      error: action.error
    };
  },
  [Types.SIGN_OUT_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.error
    };
  },
  [Types.SIGN_UP_SUCCESS]: (state) => {
    return {
      ...state,
      error: null
    };
  },
  [Types.SIGN_UP_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
});
