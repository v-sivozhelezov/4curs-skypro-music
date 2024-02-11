import { useSelector } from 'react-redux'
import { getCurrentTrackSelector } from '../../store/tracksSlice.js'
import * as S from './Main/CenterBlockContent/CenterBlockContent.styles.js'

export default function track(props) {

  const currentTrack = useSelector(getCurrentTrackSelector)



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
              track?.stared_user?.find((user) => user.id === currentUser.id) ? (
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
  )
}
