import { useSelector } from 'react-redux'

import * as S from './CenterBlockContent.styles'
import {
  getAllTracksSelector,
  getFilterTracksSelector,
  getIsFilterSelector,
} from '../../../store/tracksSlice'
import TrackComponent from '../../Track/TrackComponent'

export default function CenterBlockContent(props) {
  const { loadingPage, tracks, updateCurrentPlaylist } = props

  const isFilter = useSelector(getIsFilterSelector)
  const filterTracks = useSelector(getFilterTracksSelector)
  const tracksDefault = useSelector(getAllTracksSelector)

  const renderTracks = () => {
    if (tracks) {
      if (!isFilter) {
        return tracks
      }
      if (isFilter) {
        return filterTracks
      }
    }
    return tracksDefault
  }

  return (
    <S.CenterBlockContent>
      <S.ContentTitle>
        <S.Col01>ТРЕК</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistImg>
            <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
          </S.PlaylistImg>
        </S.Col04>
      </S.ContentTitle>
      <S.ContentPlaylist>
        {renderTracks().map((track) => (
          <TrackComponent
            key={track.id}
            track={track}
            loadingPage={loadingPage}
            updateCurrentPlaylist={updateCurrentPlaylist}
          />
        ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  )
}
