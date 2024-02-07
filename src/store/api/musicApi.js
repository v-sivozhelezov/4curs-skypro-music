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
      query: ({ accessToken }) => ({
        url: `/track/favorite/all/`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),

    addFavoriteTracks: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useAddFavoriteTracksMutation,
} = musicApi

export default musicApi.reducer
