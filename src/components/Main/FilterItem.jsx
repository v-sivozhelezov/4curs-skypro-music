import { FilterButton, FilterBlock } from './CenterBlockFilter.styles'
import FilterText from './FilterText'

export default function FilterItem(props) {
  const { onClick, children, isOpen, tracks, clef } = props

  return (
    <FilterBlock>
      <FilterButton onClick={onClick} isOpen={isOpen} role="button">
        {children}
      </FilterButton>
      {isOpen && <FilterText clef={clef} data={tracks} />}
    </FilterBlock>
  )
}
