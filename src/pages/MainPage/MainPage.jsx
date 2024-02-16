import { useDispatch } from 'react-redux'

import * as S from '../../App.styles'
import CenterBlockFilter from '../../components/Main/CenterBlockFilter/CenterBlockFilter'
import SidebarNav from '../../components/Main/SidebarNav/SidebarNav'
import NavMenu from '../../components/Main/NavMenu/NavMenu'
import categories from '../../data/categories'
import CenterBlockContent from '../../components/Main/CenterBlockContent/CenterBlockContent'
import CenterBlockHeader from '../../components/Main/CenterBlockHeader/CenterBlockHeader'

import { useGetAllTracksQuery } from '../../store/api/musicApi'
import { recordAllTracks } from '../../store/tracksSlice'

export default function MainPage() {
  const { data, isLoading } = useGetAllTracksQuery()

  const dispatch = useDispatch()

  

  const updateCurrentPlaylist = () => dispatch(recordAllTracks(data))

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterBlock>
            <CenterBlockHeader heading="Треки" />
            <CenterBlockFilter />
            <CenterBlockContent
              loadingPage={isLoading}
              tracks={data}
              updateCurrentPlaylist={updateCurrentPlaylist}
            />
          </S.MainCenterBlock>
          <SidebarNav loadingPage={isLoading} categories={categories} />
        </S.Main>
      </S.Container>
    </S.Wrapper>
  )
}
