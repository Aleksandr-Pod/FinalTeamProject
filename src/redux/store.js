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
import currencyReducer from './currency/currencySlice';
import statisticsReducer from './statistics/statisticsSlice';

import { transactionsSlice } from './transactions/transactionSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLogged'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCurrencyReducer = persistReducer(
  { key: 'currencies', storage },
  currencyReducer,
);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    currency: persistedCurrencyReducer,
    statistics: statisticsReducer,
    transactions: transactionsSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);
export { persistor, store };
