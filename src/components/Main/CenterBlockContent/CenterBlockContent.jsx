import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import * as S from './CenterBlockContent.styles'
import {
  addCurrentTrack,
  getAllTracksSelector,
  getCurrentTrackSelector,
  getIsPlayingSelector,
} from '../../../store/tracksSlice'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../../store/api/musicApi'
import { getTokensSelector, getUserSelector } from '../../../store/userSlice'

export default function CenterBlockContent(props) {
  const { loadingPage, tracks } = props
  const tracksDefault = useSelector(getAllTracksSelector)
  const currentTrack = useSelector(getCurrentTrackSelector)
  const isPlaying = useSelector(getIsPlayingSelector)
  const tokens = useSelector(getTokensSelector)
  const currentUser = useSelector(getUserSelector)
  const location = useLocation()

  const dispatch = useDispatch()
  const renderTracks = tracks ?? tracksDefault

  const [addFavoriteTrack, { isError: isErrorAdd }] =
    useAddFavoriteTrackMutation()
  const [deleteFavoriteTrack, { isError: isErrorDelete }] =
    useDeleteFavoriteTrackMutation()

  return (
    <S.CenterBlockContent>
      <S.ContentTitle>
        <S.Col01>ТРЕК</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistImg>
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlaylistImg>
        </S.Col04>
      </S.ContentTitle>
      <S.ContentPlaylist>
        {renderTracks.map((track) => (
          <S.Playlist key={track.id}>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  {currentTrack &&
                    track.id === currentTrack.id &&
                    isPlaying && <S.PlayingDotActive />}
                  {currentTrack &&
                    track.id === currentTrack.id &&
                    !isPlaying && <S.PlayingDot />}
                  <S.TrackImg>
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackImg>
                </S.TrackTitleImg>
                <div>
                  {loadingPage ? (
                    <S.Skeleton />
                  ) : (
                    <S.TrackNameLink
                      id={track.id}
                      onClick={() => dispatch(addCurrentTrack(track))}
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
                    {location.pathname === '/favorites' ||
                    track?.stared_user?.find(
                      (user) => user.id === currentUser.id,
                    ) ? (
                      <S.TrackTimeImg
                        onClick={() => {
                          console.log(isErrorDelete)

                          deleteFavoriteTrack({
                            access: tokens.access,
                            id: track.id,
                          })
                          console.log(isErrorAdd)
                        }}
                      >
                        <use xlinkHref="img/icon/sprite.svg#icon-like-active" />
                      </S.TrackTimeImg>
                    ) : (
                      <S.TrackTimeImg
                        onClick={() => {
                          addFavoriteTrack({
                            access: tokens.access,
                            id: track.id,
                          })
                        }}
                      >
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
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
        ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  )
}
