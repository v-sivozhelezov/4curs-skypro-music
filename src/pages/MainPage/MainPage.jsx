import * as S from '../../App.styles'
import CenterBlockFilter from '../../components/Main/CenterBlockFilter/CenterBlockFilter'
import SidebarNav from '../../components/Main/SidebarNav/SidebarNav'
import NavMenu from '../../components/Main/NavMenu/NavMenu'
import categories from '../../data/categories'
import CenterBlockContent from '../../components/Main/CenterBlockContent/CenterBlockContent'

export default function MainPage(props) {
  const {
    tracks,
    loadingPage,
    handleSelectionTrackButtonClick,
  } = props

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterBlock>
            <CenterBlockFilter tracks={tracks} />
            <CenterBlockContent
              tracks={tracks}
              loadingPage={loadingPage}
              handleSelectionTrackButtonClick={handleSelectionTrackButtonClick}
            />
          </S.MainCenterBlock>
          <SidebarNav loadingPage={loadingPage} categories={categories} />
        </S.Main>
      </S.Container>
    </S.Wrapper>
  )
}
