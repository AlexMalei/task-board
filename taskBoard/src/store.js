import { createStore } from 'redux'
import { persistStore } from 'redux-persist'

import persistReducer from '@/reducers'

export const store = createStore(persistReducer)

export const persistor = persistStore(store)
