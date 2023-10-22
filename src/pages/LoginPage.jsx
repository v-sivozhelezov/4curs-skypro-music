import styled from 'styled-components'

// const LoginBlock = styled.div``
const LoginBlock = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginHeader = styled.h2`
  font-size: 24px;
`

const LoginButton = styled.button`
  color: red;
`

const LoginLink = styled.a`
  color: red;
`

export default function LoginPage() {
  return (
    <LoginBlock>
      <LoginForm>
        <LoginHeader>Страница логина</LoginHeader>
        <LoginButton>Войти</LoginButton>
        <LoginLink>Перейти к регистрации</LoginLink>
      </LoginForm>
    </LoginBlock>
  )
}
