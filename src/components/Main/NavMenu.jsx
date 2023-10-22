import { useState } from 'react'
import * as S from './NavMenu.styles'

export default function NavMenu() {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => setVisible(!visible)

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
              <S.MenuLink>Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem href="/#">
              <S.MenuLink>Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="../signin.html">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
