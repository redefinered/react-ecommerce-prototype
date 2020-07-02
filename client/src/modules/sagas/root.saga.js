import { all, fork } from 'redux-saga/effects';
import userSagas from './user.sagas';
import shopSagas from './shop.sagas';
import cartSagas from './cart.sagas';

export default function* rootSaga() {
  yield all([fork(userSagas), fork(shopSagas), fork(cartSagas)]);
}
