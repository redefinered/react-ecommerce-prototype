import { takeLatest, put, call } from 'redux-saga/effects';
import { Types, Creators } from 'modules/ducks/shop/shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from 'firebase-client/firebase.utils';

export function* fetchCollectionsRequest() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(Creators.fetchCollectionsSuccess({ collections: collectionsMap }));
  } catch (error) {
    yield put(Creators.fetchCollectionsFailure(error.message));
  }
}

export default function* shopSagas() {
  yield takeLatest(Types.FETCH_COLLECTIONS, fetchCollectionsRequest);
}
