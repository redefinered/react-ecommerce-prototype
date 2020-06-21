import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  googleSignIn: [],
  emailSignIn: ['data'],
  signInSuccess: ['currentUser'],
  signInFailure: ['error'],
  signOut: [],
  signOutSuccess: [],
  signOutFailure: ['error'],
  checkUserSession: []
});

export { Types, Creators };
