import { useSelector } from 'react-redux'
import { getTracksSelector } from '../../../store/tracksSlice'
import { FilterList, FilterListItem } from './CenterBlockFilter.styles'

export default function FilterText(props) {
  const { clef } = props
  const tracks = useSelector(getTracksSelector)

  return (
    <FilterList>
      {tracks.map((track) => (
        <FilterListItem key={track.id}>{track[clef]}</FilterListItem>
      ))}
    </FilterList>
  )
}
