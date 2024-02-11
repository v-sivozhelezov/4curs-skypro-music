import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: '/track/all/',
      }),
    }),

    getFavoriteTracks: builder.query({
      query: (accessToken) => ({
        url: `/track/favorite/all/`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),

    addFavoriteTrack: builder.mutation({
      query: ({ id, access }) => ({
        url: `/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }),
    }),

    deleteFavoriteTrack: builder.mutation({
      query: ({ id, access }) => ({
        url: `/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }),
    }),

  }),
})

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} = musicApi

export default musicApi.reducer
