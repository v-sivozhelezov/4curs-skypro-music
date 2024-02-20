import * as S from './CenterBlockHeader.styles'

export default function CenterBlockHeader(props) {
  return (
    <>
      <S.CenterBlockSearch>
        <S.SearchSVG>
          <use xlinkHref="/img/icon/sprite.svg#icon-search" />
        </S.SearchSVG>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterBlockHeading>{props.heading}</S.CenterBlockHeading>
    </>
  )
}
