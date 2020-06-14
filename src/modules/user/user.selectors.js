import { createSelector } from 'reselect';

const selectUser = (state) => state.userReducer;

export const selectCurrentUser = createSelector(
  [selectUser],
  (userReducer) => userReducer.currentUser
);
