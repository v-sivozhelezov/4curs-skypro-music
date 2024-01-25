import { createSlice } from '@reduxjs/toolkit'

const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    tracks: [],
  },
  reducers: {
    updateTracks(state, action) {
      state.tracks.push(action.payload)
    },
  },
})

export const { updateTracks } = tracksSlice.actions

export default tracksSlice.reducer
