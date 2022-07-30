import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';


const persistConfig = {
  key: 'auth', storage
}
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
            serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] }
        })
})

const persistor = persistStore(store);
export {persistor, store}

