import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './NavMenu.styles'

export default function NavMenu({ handleLoginButtonClick }) {
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
              <Link to="/">Главная</Link>
            </S.MenuItem>
            <S.MenuItem href="/#">
              <Link to="favorites">Мой плейлист</Link>
            </S.MenuItem>
            <S.MenuItem>
              <button onClick={handleLoginButtonClick} type="button">
                Выйти
              </button>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
