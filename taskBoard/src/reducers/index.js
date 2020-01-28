import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import projectReducer from './project'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({ project: projectReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
