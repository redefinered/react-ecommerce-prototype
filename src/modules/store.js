import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

import rootReducer from './root.reducer';

const logger = createLogger({ collapsed: true });

const middlewares = [logger]; // makes middlewares scalable

// export default createStore(rootReducer, applyMiddleware(logger)); // for only one middleware

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
