import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from './slices/filmsSlice'
import authReducer from './slices/authSlice'
import uiReducer from './slices/uiSlice'

const store = configureStore({
  reducer: {
    films: filmsReducer,
    auth: authReducer,
    ui: uiReducer,
  },
})

export default store
