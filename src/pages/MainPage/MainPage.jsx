import * as S from '../../App.styles'
import CenterBlockFilter from '../../components/Main/CenterBlockFilter/CenterBlockFilter'
import SidebarNav from '../../components/Main/SidebarNav/SidebarNav'
import NavMenu from '../../components/Main/NavMenu/NavMenu'
import categories from '../../data/categories'
import CenterBlockContent from '../../components/Main/CenterBlockContent/CenterBlockContent'
import {
  // useAddFavoriteTracksMutation,
  useGetAllTracksQuery,
} from '../../store/api/musicApi'

export default function MainPage() {
  // const { loadingPage } = props
  // const [addFavorites, { data, isLoading }] = useAddFavoriteTracksMutation()
  // addFavorites({ id: 5 })
  const { data, isLoading } = useGetAllTracksQuery()

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterBlock>
            <CenterBlockFilter />
            <CenterBlockContent loadingPage={isLoading} tracks={data} />
          </S.MainCenterBlock>
          <SidebarNav loadingPage={isLoading} categories={categories} />
        </S.Main>
      </S.Container>
    </S.Wrapper>
  )
}
