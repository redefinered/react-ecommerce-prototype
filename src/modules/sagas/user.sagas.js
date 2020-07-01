import { takeLatest, put, call } from 'redux-saga/effects';
import { Types, Creators } from 'modules/ducks/user/user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from 'firebase-client/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(Creators.signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(Creators.signInFailure(error));
  }
}

export function* signInWithGoogleRequest() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(Creators.signInFailure(error));
  }
}

export function* signInWithEmailRequest(action) {
  const { email, password } = action.data;
  console.log('user', email);
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    console.log('user', user);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(Creators.signInFailure(error));
  }
}

export function* checkUserSessionRequest() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(Creators.signInFailure(error));
  }
}

export function* signOutRequest() {
  try {
    yield auth.signOut();
    yield put(Creators.signOutSuccess());
  } catch (error) {
    yield put(Creators.signOutFailure(error));
  }
}

export function* signUpRequest(action) {
  try {
    const { displayName, email, password } = action.data;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user, { displayName });
    yield put(Creators.signUpSuccess());
  } catch (error) {
    yield put(Creators.signUpFailure(error.message));
  }
}

export default function* userSagas() {
  yield takeLatest(Types.GOOGLE_SIGN_IN, signInWithGoogleRequest);
  yield takeLatest(Types.EMAIL_SIGN_IN, signInWithEmailRequest);
  yield takeLatest(Types.CHECK_USER_SESSION, checkUserSessionRequest);
  yield takeLatest(Types.SIGN_OUT, signOutRequest);
  yield takeLatest(Types.SIGN_UP, signUpRequest);
}
