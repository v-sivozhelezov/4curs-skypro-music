import * as S from '../../App.styles'
import SidebarNav from '../../components/Main/SidebarNav/SidebarNav'
import NavMenu from '../../components/Main/NavMenu/NavMenu'
import categories from '../../data/categories'
import CenterBlockContent from '../../components/Main/CenterBlockContent/CenterBlockContent'
import {
  // useAddFavoriteTracksMutation,
  useGetFavoriteTracksQuery,
  // useGetAllTracksQuery,
} from '../../store/api/musicApi'
import { getRefreshToken } from '../../API/api'

const accessToken = JSON.parse(localStorage.getItem('accessToken'))
const refreshToken = JSON.parse(localStorage.getItem('refreshToken'))

export default function MainPage() {
  // const { loadingPage } = props
  // const [addFavorites, { data, isLoading }] = useAddFavoriteTracksMutation()
  // addFavorites({ id: 5 })
  const { data, isLoading, error } = useGetFavoriteTracksQuery({accessToken})

  if (error) {

    getRefreshToken(refreshToken)
      .then((response) => {
        console.log(response)
      })
      .catch((errorr) => console.log(errorr))
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterBlock>
            <CenterBlockContent loadingPage={isLoading} tracks={data} />
          </S.MainCenterBlock>
          <SidebarNav loadingPage={isLoading} categories={categories} />
        </S.Main>
      </S.Container>
    </S.Wrapper>
  )
}
