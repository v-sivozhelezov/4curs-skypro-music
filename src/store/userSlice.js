import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // email: '',
    // first_name: '',
    // id: Number(),
    // last_name: '',
    // username: '',
    user: [],
  },
  reducers: {
    saveUser(state, action) {
      state.user.push(action.payload)
    },
    deleteUser(state) {
      console.log(state)
    },
  },
})

export const { saveUser, deleteUser } = userSlice.actions

export default userSlice.reducer
