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
    currentTrack: false,
    isPlaying: false,
    isFilter: false,
    filterTracks: [],
    filterNames: {
      author: [],
      genre: '',
      year: '',
      search: '',
    },
  },
  reducers: {
    recordAllTracks(state, action) {
      state.allTracks = action.payload
      state.currentPlaylist = action.payload
    },

    writeTrackError(state, action) {
      state.tracks = action.payload
    },

    recordCurrentPlaylist(state, action) {
      state.currentPlaylist = action.payload
    },

    addCurrentTrack(state, action) {
      state.currentTrack = action.payload
    },

    setFilters(state, action) {
      state.isFilter = true

      if (action.payload.nameFilter === 'author') {
        state.filterNames[action.payload.nameFilter].push(
          action.payload.valueFilter,
        )
      } else {
        state.filterNames[action.payload.nameFilter] =
          action.payload.valueFilter
      }

      const { author, genre, year, search } = state.filterNames

      state.filterTracks = state.allTracks
      
      if (author.length === 0 && !genre && !year && !search) {
        state.isFilter = false
        return
      }

      if (author.length > 0) {
        state.filterTracks = author
          .map((elAuthor) =>
            state.filterTracks.filter((el) => el.author === elAuthor),
          )
          .flat()
      }

      if (genre) {
        state.filterTracks = state.filterTracks.filter(
          (el) => el.genre === genre,
        )
      }

      if (year) {
        if (year === 'Сначала старые') {
          state.filterTracks = [...state.allTracks].sort(
            (a, b) => a.release_date - b.release_date,
          )
          return
        }

        if (year === 'Сначала новые') {
          state.filterTracks = [...state.allTracks].sort(
            (a, b) => b.release_date - a.release_date,
          )
          return
        }

        state.filterTracks = state.allTracks
      }
    },

    shuffleCurrentPlaylist(state, action) {
      if (action.payload === true) {
        state.currentPlaylist = state.currentPlaylist.sort(
          () => Math.random() - 0.5,
        )
        return
      }
      if (action.payload === false) {
        state.currentPlaylist = state.allTracks
      }
    },

    setIsPlaying(state, action) {
      state.isPlaying = action.payload
    },
  },
})

export const {
  recordAllTracks,
  writeTrackError,
  recordCurrentPlaylist,
  addCurrentTrack,
  shuffleCurrentPlaylist,
  setIsPlaying,
  setFilters,
} = tracksSlice.actions

export const getAllTracksSelector = (state) => state.tracks.allTracks

export const getCurrentPlaylistSelector = (state) =>
  state.tracks.currentPlaylist

export const getCurrentTrackSelector = (state) => state.tracks.currentTrack

export const getIsPlayingSelector = (state) => state.tracks.isPlaying

export default tracksSlice.reducer
