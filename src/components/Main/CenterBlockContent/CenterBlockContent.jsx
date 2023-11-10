import * as S from './CenterBlockContent.styles'

export default function CenterBlockContent(props) {
  const { tracks, loadingPage } = props

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
        {tracks.map((track) => (
          <S.Playlist>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackImg>
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackImg>
                </S.TrackTitleImg>
                <div>
                  {loadingPage ? (
                    <S.Skeleton />
                  ) : (
                    <S.TrackNameLink>{track.trackName}</S.TrackNameLink>
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
                    <S.TrackTimeText>{track.time}</S.TrackTimeText>
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
