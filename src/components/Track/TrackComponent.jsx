import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  addCurrentTrack,
  getCurrentTrackSelector,
  getIsPlayingSelector,
} from '../../store/tracksSlice'
import * as S from '../Main/CenterBlockContent/CenterBlockContent.styles'
import {
  getTokensSelector,
  getUserSelector,
  updateAccessToken,
} from '../../store/userSlice'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../store/api/musicApi'
import { getRefreshToken } from '../../API/api'

export default function TrackComponent(props) {
  const { loadingPage, track, updateCurrentPlaylist } = props

  const currentTrack = useSelector(getCurrentTrackSelector)
  const isPlaying = useSelector(getIsPlayingSelector)
  const dispatch = useDispatch()
  const currentUser = useSelector(getUserSelector)
  const tokens = useSelector(getTokensSelector)

  const location = useLocation()

  const [isFavorite, setIsFavorite] = useState(
    location.pathname === '/favorites' ||
      track?.stared_user?.find((user) => user.id === currentUser.id),
  )

  const [addFavoriteTrack] = useAddFavoriteTrackMutation()
  const [deleteFavoriteTrack] = useDeleteFavoriteTrackMutation()

  function updateRefreshToken(like) {
    getRefreshToken(tokens.refresh)
      .then((response) => {
        dispatch(updateAccessToken(response.access))
        localStorage.setItem(
          'tokens',
          JSON.stringify({ refresh: tokens.refresh, access: response.access }),
        )

        if (like) {
          addFavoriteTrack({
            access: response.access,
            id: track.id,
          })
          return
        }

        if (!like)
          deleteFavoriteTrack({
            access: response.access,
            id: track.id,
          })
      })
      .catch((error) => {
        setIsFavorite(!isFavorite)
        console.log(error)
      })
  }

  const handleFavoriteTrack = (like) => {
    if (like) {
      setIsFavorite(!isFavorite)
      addFavoriteTrack({
        access: tokens.access,
        id: track.id,
      }).then((response) => {
        if (response.error?.status === 401) updateRefreshToken(like)
      })
    }

    if (!like) {
      setIsFavorite(!isFavorite)
      deleteFavoriteTrack({
        access: tokens.access,
        id: track.id,
      }).then((response) => {
        if (response.error?.status === 401) updateRefreshToken(like)
      })
    }
  }

  return (
    <S.Playlist>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImg>
            {currentTrack && track.id === currentTrack.id && isPlaying && (
              <S.PlayingDotActive />
            )}
            {currentTrack && track.id === currentTrack.id && !isPlaying && (
              <S.PlayingDot />
            )}
            <S.TrackImg>
              <use xlinkHref="/img/icon/sprite.svg#icon-note" />
            </S.TrackImg>
          </S.TrackTitleImg>
          <div>
            {loadingPage ? (
              <S.Skeleton />
            ) : (
              <S.TrackNameLink
                id={track.id}
                onClick={() => {
                  updateCurrentPlaylist()
                  dispatch(addCurrentTrack(track))
                }}
              >
                {track.name}
              </S.TrackNameLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {loadingPage ? (
            <S.Skeleton />
          ) : (
            <S.TrackAuthorLink>{track.author} </S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {loadingPage ? (
            <S.Skeleton />
          ) : (
            <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div>
          {loadingPage ? (
            <S.Skeleton />
          ) : (
            <>
              {(location.pathname === '/favorites' && isFavorite) ||
              isFavorite ? (
                <S.TrackTimeImg
                  onClick={() => {
                    handleFavoriteTrack(false)
                  }}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-like-active" />
                </S.TrackTimeImg>
              ) : (
                <S.TrackTimeImg
                  onClick={() => {
                    handleFavoriteTrack(true)
                  }}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                </S.TrackTimeImg>
              )}
              <S.TrackTimeText>
                {Math.floor(track.duration_in_seconds / 60)}:
                {track.duration_in_seconds % 60 < 10 ? 0 : ''}
                {track.duration_in_seconds % 60}
              </S.TrackTimeText>
            </>
          )}
        </div>
      </S.PlaylistTrack>
    </S.Playlist>
  )
}
