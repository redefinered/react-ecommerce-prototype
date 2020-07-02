import { takeLatest, put } from 'redux-saga/effects';
import { Types } from 'modules/ducks/user/user.actions';
import { Creators } from 'modules/ducks/cart/cart.actions';

export function* clearCartOnSignOut() {
  yield yield put(Creators.clearCart());
}

export default function* cartSagas() {
  yield takeLatest(Types.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}
