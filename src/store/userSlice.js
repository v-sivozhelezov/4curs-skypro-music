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
    user: JSON.parse(localStorage.getItem('user')) || userSample,
  },
  reducers: {
    saveUser(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload
    },
    deleteUser(state) {
      // eslint-disable-next-line no-param-reassign
      state.user = {
        email: '',
        first_name: '',
        id: Number(),
        last_name: '',
        username: '',
      }
      localStorage.setItem('user', '')
    },
  },
})

export const { saveUser, deleteUser } = userSlice.actions

export const getUserSelector = (state) => state.user.user
export default userSlice.reducer
