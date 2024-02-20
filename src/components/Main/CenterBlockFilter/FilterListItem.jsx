import { useState } from 'react'
import { useSelector } from 'react-redux'

import { FilterListItem } from './CenterBlockFilter.styles'
import { getFilterNamesSelector } from '../../../store/tracksSlice'

export default function FilterListText(props) {
  // eslint-disable-next-line no-unused-vars
  const { clef, info, setValueFilter } = props
  const activeFiltersElement = useSelector(getFilterNamesSelector)
  // Если автор то разложить массив и тд

  const [isActiveElement, setIsActiveElement] = useState(
    activeFiltersElement.author[0] === info,
  )
  console.log(info)
  console.log(activeFiltersElement.author[0])

  return (
    <FilterListItem
      onClick={() => {
        setIsActiveElement(true)
        console.log(isActiveElement)
        setValueFilter(info)
      }}
      $isActiveElement={isActiveElement}
    >
      {info}
    </FilterListItem>
  )
}
