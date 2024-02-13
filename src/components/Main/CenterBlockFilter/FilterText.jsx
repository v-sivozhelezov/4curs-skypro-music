import { FilterList, FilterListItem } from './CenterBlockFilter.styles'
import { useGetAllTracksQuery } from '../../../store/api/musicApi'

export default function FilterText(props) {
  const { clef } = props
  const { data } = useGetAllTracksQuery()

  const tracksInfo = data.map((track) => track[clef])

  const uniqueTracksInfo = () =>
    tracksInfo?.filter((el, ind) => ind === tracksInfo.indexOf(el))

  return (
    <FilterList>
      {uniqueTracksInfo()?.map((info) => (
        <FilterListItem key={info}>{info}</FilterListItem>
      ))}
    </FilterList>
  )
}
