import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './NavMenu.styles'
import useUserContext from '../../contexts/user'

export default function NavMenu() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  const { handleLoginButtonClick } = useUserContext()

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
              <Link to="/">Главная</Link>
            </S.MenuItem>
            <S.MenuItem href="/#">
              <Link to="/favorites">Мой плейлист</Link>
            </S.MenuItem>
            <S.MenuItem onClick={handleLoginButtonClick}>
              <Link to="/login">Выйти</Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
