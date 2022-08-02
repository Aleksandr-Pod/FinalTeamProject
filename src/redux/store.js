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
import dataReducer from './dataSlice';
import categoriesReducer from './categoriesSlice';

const persistConfig = {
  key: 'auth',
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const persistedCurrencyReducer = persistReducer(
  { key: 'currencies', storage },
  currencyReducer,
);

const persistCategories = persistReducer(
  { key: 'categories', storage },
  categoriesReducer,
);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    currency: persistedCurrencyReducer,
    data: dataReducer,
    categories: persistCategories,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devToolsls: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);
export { persistor, store };
