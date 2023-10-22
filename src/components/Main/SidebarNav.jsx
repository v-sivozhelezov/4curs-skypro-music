import { Skeleton } from './CenterBlockContent.styles'
import * as S from './SidebarNav.styles'

export default function NavSidebar(props) {
  const { loadingPage } = props

  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.PersonalName>Sergey.Ivanov</S.PersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBLock>
        <S.SidebarList>
          <S.SidebarItem loadingPage={loadingPage}>
            {loadingPage ? (
              <Skeleton />
            ) : (
              <S.SidebarLink href="/#">
                <img src="img/playlist01.png" alt="day's playlist" />
              </S.SidebarLink>
            )}
          </S.SidebarItem>
          <S.SidebarItem loadingPage={loadingPage}>
            {loadingPage ? (
              <Skeleton />
            ) : (
              <S.SidebarLink href="/#">
                <img src="/img/playlist02.png" alt="100 hits" />
              </S.SidebarLink>
            )}
          </S.SidebarItem>
          <S.SidebarItem loadingPage={loadingPage}>
            {loadingPage ? (
              <Skeleton />
            ) : (
              <S.SidebarLink href="/#">
                <img src="img/playlist03.png" alt="indi" />
              </S.SidebarLink>
            )}
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBLock>
    </S.Sidebar>
  )
}
