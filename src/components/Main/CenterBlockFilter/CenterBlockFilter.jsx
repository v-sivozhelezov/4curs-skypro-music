import { useState } from 'react'
import * as S from './CenterBlockFilter.styles'
import SearchString from '../SearchString/SearchString'
import FilterItem from './FilterItem'

export default function CenterBlockFilter(props) {
  const [filter, setUpFilter] = useState(null)
  const { tracks } = props
  const toggleFilter = (filterValue) => {
    setUpFilter(filterValue)
    if (filter === filterValue) {
      setUpFilter(false)
    }
  }

  return (
    <>
      <SearchString />
      <S.CenterBlockHeading>Треки</S.CenterBlockHeading>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <FilterItem
          onClick={() => toggleFilter('author')}
          isOpen={filter === 'author'}
          tracks={tracks}
          clef="author"
        >
          исполнителю
        </FilterItem>
        <FilterItem
          onClick={() => toggleFilter('year')}
          isOpen={filter === 'year'}
          tracks={tracks}
          clef="release_date"
        >
          году выпуска
        </FilterItem>
        <FilterItem
          onClick={() => toggleFilter('genre')}
          isOpen={filter === 'genre'}
          tracks={tracks}
          clef="genre"
        >
          жанру
        </FilterItem>
      </S.CenterBlockFilter>
    </>
  )
}
