import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import tracksReducer from './tracksSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    tracks: tracksReducer
  },
})
