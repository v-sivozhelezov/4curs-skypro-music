/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const userSample = {
  email: '',
  first_name: '',
  id: Number(),
  last_name: '',
  username: '',
}

const tokensSample = {
  access: '',
  refresh: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : userSample,

    tokens: localStorage.getItem('tokens')
      ? JSON.parse(localStorage.getItem('tokens'))
      : tokensSample,
  },
  reducers: {
    saveUser(state, action) {
      state.user = action.payload
    },

    deleteUser() {
      localStorage.setItem('user', '')
      localStorage.setItem('tokens', '')
    },

    saveTokens(state, action) {
      state.tokens = action.payload
    },

    updateAccessToken(state, action) {
      state.tokens.access = action.payload
    },
  },
})

export const { saveUser, deleteUser, saveTokens, updateAccessToken } =
  userSlice.actions

export const getUserSelector = (state) => state.user.user
export const getTokensSelector = (state) => state.user.tokens

export default userSlice.reducer
