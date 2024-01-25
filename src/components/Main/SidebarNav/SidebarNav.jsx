import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Skeleton } from '../CenterBlockContent/CenterBlockContent.styles'
import * as S from './SidebarNav.styles'
import { deleteUser } from '../../../store/userSlice'
// import useUserContext from '../../contexts/user'

export default function NavSidebar(props) {
  const { loadingPage, categories } = props
  const user = useSelector((state) => state.user.user[0])
  // const { user, handleLoginButtonClick } = useUserContext()

  const dispatch = useDispatch()

  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.PersonalName>{user.username}</S.PersonalName>
        <S.SidebarIcon onClick={() => dispatch(deleteUser())}>
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
