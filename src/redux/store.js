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
import authReducer from './auth/authSlice';
import currencyReducer from './curerncySlice';
import dataReducer from './dataSlice';
<<<<<<< HEAD
import categoriesReducer from './categoriesSlice';
=======
import { transactionsSlice } from './transactions/transactionSlice';
>>>>>>> Dev

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const persistedCurrencyReducer = persistReducer(
  { key: 'currencies', storage },
  currencyReducer,
);
<<<<<<< HEAD

const persistCategories = persistReducer(
  { key: 'categories', storage },
  categoriesReducer,
);

=======
>>>>>>> Dev
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    currency: persistedCurrencyReducer,
    data: dataReducer,
<<<<<<< HEAD
    categories: persistCategories,
=======
    transactions: transactionsSlice.reducer,
>>>>>>> Dev
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
