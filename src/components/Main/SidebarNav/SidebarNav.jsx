import { Link } from 'react-router-dom'
import { Skeleton } from '../CenterBlockContent/CenterBlockContent.styles'
import * as S from './SidebarNav.styles'
import useUserContext from '../../contexts/user'

export default function NavSidebar(props) {
  const { loadingPage, categories } = props

  const { user, handleLoginButtonClick } = useUserContext()

  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.PersonalName>{user.username}</S.PersonalName>
        <S.SidebarIcon onClick={handleLoginButtonClick}>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBLock>
        <S.SidebarList>
          {categories.map((category) => (
            <S.SidebarItem id={category.id} key={category.id}>
              {loadingPage ? (
                <Skeleton />
              ) : (
                <Link to={`/category/${category.id}`}>
                  <img src={category.src} alt={category.Name} />
                </Link>
              )}
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.SidebarBLock>
    </S.Sidebar>
  )
}
