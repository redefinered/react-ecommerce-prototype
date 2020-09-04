import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';

import rootSaga from 'modules/sagas/root.saga';

const logger = createLogger({ collapsed: true });

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; // makes middlewares scalable

if (process.env.NODE_ENV === 'production') {
  middlewares.push(logger);
}

// export default createStore(rootReducer, applyMiddleware(logger)); // for only one middleware

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
