import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import currencyReducer from './curerncySlice';

const persistConfig = {
  key: 'auth',
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);


const persistedCurrencyReducer = persistReducer({ key: 'currencies', storage }, currencyReducer);
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    currency: persistedCurrencyReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { persistor, store };
