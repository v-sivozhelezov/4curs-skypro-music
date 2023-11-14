import { useEffect, useState } from 'react'
import * as S from '../../App.styles'
import CenterBlockFilter from '../../components/Main/CenterBlockFilter/CenterBlockFilter'
import CenterBlockContent from '../../components/Main/CenterBlockContent/CenterBlockContent'
import SidebarNav from '../../components/Main/SidebarNav/SidebarNav'
import NavMenu from '../../components/Main/NavMenu/NavMenu'
import AudioPlayer from '../../components/Main/AudioPlayer/AudioPlayer'
import tracks from '../../data/tracks'
import categories from '../../data/categories'

export default function MainPage({handleLoginButtonClick}) {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(!loadingPage)
    }, 5000)
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu  handleLoginButtonClick ={handleLoginButtonClick}/>
          <S.MainCenterBlock>
            <CenterBlockFilter tracks={tracks} />
            <CenterBlockContent tracks={tracks} loadingPage={loadingPage} />
          </S.MainCenterBlock>
          <SidebarNav loadingPage={loadingPage} categories={categories} />
        </S.Main>
        <AudioPlayer />
      </S.Container>
    </S.Wrapper>
  )
}
