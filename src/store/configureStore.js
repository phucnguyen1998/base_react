import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMidleware from '@redux-saga/core'
import reducers from './reducers'
import saga from './saga'

const isDevEnv = process.env.NODE_ENV !== 'production'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, reducers)
const sagaMidleware = createSagaMidleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = [
      ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      sagaMidleware,
    ]
    if (isDevEnv) {
      middlewares.push(logger)
    }
    return middlewares
  },
  devTools: isDevEnv,
})

sagaMidleware.run(saga)

export const persistor = persistStore(store)
