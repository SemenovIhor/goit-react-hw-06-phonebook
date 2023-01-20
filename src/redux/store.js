import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './filterSlice/filterSlice';
import { persistedContactsReducer } from './contactsSlice/contactsSlice';
import { persistStore } from 'redux-persist'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer
  },
  middleware (getDefaultMiddleware) {
    return  getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  }
});

export const persistor = persistStore(store)
