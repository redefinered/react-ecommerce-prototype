import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './ducks/user/user.reducer';
import cartReducer from './ducks/cart/cart.reducer';
import directoryReducer from './ducks/directory/directory.reducer';
import shopReducer from './ducks/shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  directoryReducer,
  shopReducer
});

export default persistReducer(persistConfig, rootReducer);
