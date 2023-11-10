import * as S from './LoginPage.styles'

export default function LoginPage() {
  return (
    <S.LoginBlock>
      <S.LoginForm>
        <S.LoginHeader>Страница логина</S.LoginHeader>
        <S.LoginButton>Войти</S.LoginButton>
        <S.LoginLink>Перейти к регистрации</S.LoginLink>
      </S.LoginForm>
    </S.LoginBlock>
  )
}
