import * as S from '../App.styles'
import CenterBlockFilter from '../components/Main/CenterBlockFilter'
import CenterBlockContent from '../components/Main/CenterBlockContent'
import SidebarNav from '../components/Main/SidebarNav'
import NavMenu from '../components/Main/NavMenu'
import AudioPlayer from '../components/Main/AudioPlayer'
import tracks from '../components/data/tracks'

export default function MainPage(props) {
  const { loadingPage } = props
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterBlock>
            <CenterBlockFilter tracks={tracks} />
            <CenterBlockContent tracks={tracks} loadingPage={loadingPage} />
          </S.MainCenterBlock>
          <SidebarNav loadingPage={loadingPage} />
        </S.Main>
        <AudioPlayer />
      </S.Container>
    </S.Wrapper>
  )
}
