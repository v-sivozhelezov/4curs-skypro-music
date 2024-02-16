import { useDispatch, useSelector } from 'react-redux'
import { useGetFavoriteTracksQuery } from '../../store/api/musicApi'
import { getRefreshToken } from '../../API/api'
import { getTokensSelector, updateAccessToken } from '../../store/userSlice'

import * as S from '../../App.styles'
import SidebarNav from '../../components/Main/SidebarNav/SidebarNav'
import NavMenu from '../../components/Main/NavMenu/NavMenu'
import categories from '../../data/categories'
import CenterBlockContent from '../../components/Main/CenterBlockContent/CenterBlockContent'
import CenterBlockHeader from '../../components/Main/CenterBlockHeader/CenterBlockHeader'
import { recordAllTracks } from '../../store/tracksSlice'

export default function MainPage() {
  const tokens = useSelector(getTokensSelector)
  const { data, isLoading, isError } = useGetFavoriteTracksQuery(tokens.access)
  const dispatch = useDispatch()

  const updateCurrentPlaylist = () => dispatch(recordAllTracks(data))

  if (isError) {
    getRefreshToken(tokens.refresh)
      .then((response) => {
        dispatch(updateAccessToken(response.access))
        localStorage.setItem(
          'tokens',
          JSON.stringify({ refresh: tokens.refresh, access: response.access }),
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterBlock>
            <CenterBlockHeader heading="Мои треки" />
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
