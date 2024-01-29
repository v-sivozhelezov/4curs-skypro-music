/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    tracks: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
    currentTrack: null,
  },
  reducers: {
    updateTracks(state, action) {
      state.tracks = action.payload
    },

    writeTrackError(state, action) {
      state.tracks = action.payload
    },

    addCurrentTrack(state, action) {
      state.currentTrack = action.payload
    },
  },
})

export const { updateTracks, writeTrackError, addCurrentTrack } =
  tracksSlice.actions
export const getTracksSelector = (state) => state.tracks.tracks
export const getCurrentTrackSelector = (state) => state.tracks.currentTrack

export default tracksSlice.reducer
