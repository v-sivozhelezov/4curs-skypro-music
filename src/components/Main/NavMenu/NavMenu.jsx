import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './NavMenu.styles'
import { deleteUser } from '../../../store/userSlice'
import { addCurrentTrack } from '../../../store/tracksSlice'

export default function NavMenu() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  const dispatch = useDispatch()

  return (
    <S.MainNav>
      <S.MenuLink to="/">
        <S.NavLogo>
          <S.NavImg src="/img/logo.png" alt="logo" />
        </S.NavLogo>
      </S.MenuLink>
      <S.NavBurger onClick={toggleVisibility} type="button">
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/">Главная</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem href="/#">
              <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem
              onClick={() => {
                dispatch(deleteUser())
                window.location.pathname = '/login'
                dispatch(addCurrentTrack(null))
              }}
            >
              <S.MenuLink to="/login">Выйти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
