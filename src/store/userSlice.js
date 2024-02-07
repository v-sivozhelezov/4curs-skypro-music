/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const userSample = {
  email: '',
  first_name: '',
  id: Number(),
  last_name: '',
  username: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : userSample,
  },
  reducers: {
    saveUser(state, action) {
      state.user = action.payload
    },
    deleteUser(state) {
      state.user = {
        email: '',
        first_name: '',
        id: Number(),
        last_name: '',
        username: '',
      }
      localStorage.setItem('user', '')
      localStorage.setItem('accessToken', '')
      localStorage.setItem('refreshToken', '')
    },
  },
})

export const { saveUser, deleteUser } = userSlice.actions

export const getUserSelector = (state) => state.user.user
export default userSlice.reducer
