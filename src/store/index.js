import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import tracksReducer from './tracksSlice'
import musicApiReducer, { musicApi } from './api/musicApi'

export default configureStore({
  reducer: {
    user: userReducer,
    tracks: tracksReducer,
    [musicApi.reducerPath]: musicApiReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(musicApi.middleware)
})


