/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    allTracks: [
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
    currentPlaylist: [],
    currentTrack: null,
  },
  reducers: {
    updateAllTracks(state, action) {
      state.allTracks = action.payload
      state.currentPlaylist = action.payload
    },

    writeTrackError(state, action) {
      state.tracks = action.payload
    },

    updateCurrentPlaylist(state, action) {
      state.currentPlaylist = action.payload
    },

    addCurrentTrack(state, action) {
      state.currentTrack = action.payload
    },

    shuffleCurrentPlaylist(state, action) {
      if (action.payload === true) {
        state.currentPlaylist = state.currentPlaylist.sort(
          () => Math.random() - 0.5,
        )
        console.log('перемешали')
        return
      }
      if (action.payload === false) {
        state.currentPlaylist = state.allTracks
        console.log('дефолт')
      }
    },
  },
})

export const {
  updateAllTracks,
  writeTrackError,
  updateCurrentPlaylist,
  addCurrentTrack,
  shuffleCurrentPlaylist,
} = tracksSlice.actions

export const getAllTracksSelector = (state) => state.tracks.allTracks
export const getCurrentPlaylistSelector = (state) =>
  state.tracks.currentPlaylist
export const getCurrentTrackSelector = (state) => state.tracks.currentTrack

export default tracksSlice.reducer
