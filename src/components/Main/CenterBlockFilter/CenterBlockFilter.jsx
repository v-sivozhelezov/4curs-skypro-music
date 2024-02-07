import { useState } from 'react'
import * as S from './CenterBlockFilter.styles'
import SearchString from '../SearchString/SearchString'
import FilterItem from './FilterItem'

export default function CenterBlockFilter() {
  const [filter, setUpFilter] = useState(null)
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
          $isOpen={filter === 'author'}
          clef="author"
        >
          исполнителю
        </FilterItem>
        <FilterItem
          onClick={() => toggleFilter('year')}
          $isOpen={filter === 'year'}
          clef="release_date"
        >
          году выпуска
        </FilterItem>
        <FilterItem
          onClick={() => toggleFilter('genre')}
          $isOpen={filter === 'genre'}
          clef="genre"
        >
          жанру
        </FilterItem>
      </S.CenterBlockFilter>
    </>
  )
}
