import { Link } from 'react-router-dom'
import * as S from './RegisterPage.styles'

export default function RegisterPage() {
  return (
    <S.RegisterBlock>
      <S.RegisterForm>
        <S.RegisterHeader>Страница регистрация</S.RegisterHeader>
        <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
        <Link to="/login">Перейти к странице входа</Link>
      </S.RegisterForm>
    </S.RegisterBlock>
  )
}
