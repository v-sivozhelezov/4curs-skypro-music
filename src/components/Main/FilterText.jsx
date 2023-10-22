import { FilterList, FilterListItem } from './CenterBlockFilter.styles'

export default function FilterText(props) {
  const { data, clef } = props

  return (
    <FilterList>
      {data.map((track) => (
        <FilterListItem key={track.id}>{track[clef]}</FilterListItem>
      ))}
    </FilterList>
  )
}
