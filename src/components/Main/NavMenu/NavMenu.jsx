import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './NavMenu.styles'
import { deleteUser } from '../../../store/userSlice'

export default function NavMenu() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  const dispatch = useDispatch()

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.NavImg src="/img/logo.png" alt="logo" />
      </S.NavLogo>
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
            <S.MenuItem onClick={() => dispatch(deleteUser())}>
              <S.MenuLink to="/login">Выйти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
