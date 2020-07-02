import { createReducer } from 'reduxsauce';
import { Types } from './shop.actions';

const INITIAL_STATE = {
  error: null,
  isFetching: false,
  collections: null
};

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_COLLECTIONS]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },
  [Types.FETCH_COLLECTIONS_SUCCESS]: (state, action) => {
    const { collections } = action.data;
    return {
      ...state,
      isFetching: false,
      collections
    };
  },
  [Types.FETCH_COLLECTIONS_FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: true,
      error: action.error
    };
  }
});
