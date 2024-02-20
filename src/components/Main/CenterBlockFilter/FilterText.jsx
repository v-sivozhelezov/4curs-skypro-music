import { useDispatch } from 'react-redux'

import { FilterList } from './CenterBlockFilter.styles'
import FilterListText from './FilterListItem'
import { useGetAllTracksQuery } from '../../../store/api/musicApi'
import { setFilters } from '../../../store/tracksSlice'

export default function FilterText(props) {
  const { clef } = props
  const { data } = useGetAllTracksQuery()
  const dispatch = useDispatch()

  const tracksInfo = data.map((track) => track[clef])

  const setValueFilter = (valueFilter) => {
    dispatch(setFilters({ nameFilter: clef, valueFilter }))
  }

  const uniqueTracksInfo = () =>
    tracksInfo?.filter((el, ind) => ind === tracksInfo.indexOf(el))

  return (
    <FilterList>
      {uniqueTracksInfo()?.map((info) => (
        <FilterListText
          setValueFilter={setValueFilter}
          key={info}
          info={info}
          clef={clef}
        />
      ))}
    </FilterList>
  )
}
