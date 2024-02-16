import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetCollectionsTracksQuery } from '../../store/api/musicApi'

import * as S from '../../App.styles'
import SidebarNav from '../../components/Main/SidebarNav/SidebarNav'
import NavMenu from '../../components/Main/NavMenu/NavMenu'
import categories from '../../data/categories'
import CenterBlockContent from '../../components/Main/CenterBlockContent/CenterBlockContent'
import CenterBlockHeader from '../../components/Main/CenterBlockHeader/CenterBlockHeader'
import { recordAllTracks } from '../../store/tracksSlice'

export default function CategoryPage() {
  const idCollection = Number(useParams().id)

  const { data, isLoading } = useGetCollectionsTracksQuery(idCollection)
  const tracks = data?.items
  
  const dispatch = useDispatch()

  const updateCurrentPlaylist = () => dispatch(recordAllTracks(tracks))

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterBlock>
            <CenterBlockHeader
              heading={
                categories?.find(
                  (collection) => collection.id === Number(idCollection),
                ).Name
              }
            />
            <CenterBlockContent
              loadingPage={isLoading}
              tracks={tracks}
              updateCurrentPlaylist={updateCurrentPlaylist}
            />
          </S.MainCenterBlock>
          <SidebarNav loadingPage={isLoading} />
        </S.Main>
      </S.Container>
    </S.Wrapper>
  )
}
