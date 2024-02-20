import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: '/track/all',
      }),
      providesTags: () => ['Tracks'],
    }),

    getFavoriteTracks: builder.query({
      query: (accessToken) => ({
        url: `/track/favorite/all`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: () => ['Tracks'],
    }),

    getCollectionsTracks: builder.query({
      query: (id) => ({
        url: `/selection/${id}`,
        method: 'GET',
      }),
      providesTags: () => ['Tracks'],
    }),

    addFavoriteTrack: builder.mutation({
      query: ({ id, access }) => ({
        url: `/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }),
      invalidatesTags: ['Tracks'],
    }),

    deleteFavoriteTrack: builder.mutation({
      query: ({ id, access }) => ({
        url: `/track/${id}/favorite`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }),
      invalidatesTags: ['Tracks'],
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
  useGetCollectionsTracksQuery,
} = musicApi

export default musicApi.reducer
