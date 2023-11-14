import { Link } from 'react-router-dom'
import * as S from './LoginPage.styles'

export default function LoginPage({ handleLoginButtonClick }) {

  return (
    <S.LoginBlock>
      <S.LoginForm>
        <S.LoginHeader>Страница логина</S.LoginHeader>
        <S.LoginButton onClick={handleLoginButtonClick}>Войти</S.LoginButton>
        <Link to="/register">Перейти к регистрации</Link>
      </S.LoginForm>
    </S.LoginBlock>
  )
}
