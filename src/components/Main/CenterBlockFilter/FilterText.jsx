import { useDispatch } from 'react-redux'

import { FilterList, FilterListItem } from './CenterBlockFilter.styles'
import { useGetAllTracksQuery } from '../../../store/api/musicApi'
import { setFilters } from '../../../store/tracksSlice'

export default function FilterText(props) {
  const { clef } = props
  const { data } = useGetAllTracksQuery()
  const dispatch = useDispatch()

  const tracksInfo = data.map((track) => track[clef])

  const setValueFilter = (valueFilter) => {
    dispatch(setFilters({nameFilter: clef, valueFilter}))
  }

  const uniqueTracksInfo = () =>
    tracksInfo?.filter((el, ind) => ind === tracksInfo.indexOf(el))

  return (
    <FilterList>
      {uniqueTracksInfo()?.map((info) => (
        <FilterListItem onClick={() => setValueFilter(info)} key={info}>
          {info}
        </FilterListItem>
      ))}
    </FilterList>
  )
}
