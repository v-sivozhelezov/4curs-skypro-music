import * as S from './SearchString.styles'

export default function SearchString() {
  return (
    <S.CenterBlockSearch>
      <S.SearchSVG>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSVG>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
  )
}
