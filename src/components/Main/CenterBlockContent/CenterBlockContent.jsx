import { useDispatch, useSelector } from 'react-redux'
import * as S from './CenterBlockContent.styles'
import {
  addCurrentTrack,
  getAllTracksSelector,
  getCurrentTrackSelector,
  getIsPlayingSelector,
} from '../../../store/tracksSlice'

export default function CenterBlockContent(props) {
  const { loadingPage, tracks } = props
  const tracksDefault = useSelector(getAllTracksSelector)
  const currentTrack = useSelector(getCurrentTrackSelector)
  const isPlaying = useSelector(getIsPlayingSelector)

  const dispatch = useDispatch()
  const renderTracks = tracks ?? tracksDefault

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
                    <S.TrackTimeImg>
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.TrackTimeImg>
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
