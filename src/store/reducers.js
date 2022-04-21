import { combineReducers } from 'redux'
import { authReducer } from './slices/authSlice'
import { layoutReducer } from './slices/layoutSlice'

const reducers = combineReducers({
  auth: authReducer,
  layout: layoutReducer,
})

export default reducers
