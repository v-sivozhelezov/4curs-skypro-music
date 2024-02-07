import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as S from './AuthPage.styles'
import { register, logIn } from '../../API/api'
import { saveUser } from '../../store/userSlice'

export default function AuthPage() {
  const [isLoginMode, setLoginMode] = useState(true)
  const [isActiveButton, setActiveButton] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = async () => {
    if (!email) {
      setErrorMessage('Введите email')
      return
    }
    if (!password) {
      setErrorMessage('Введите пароль')
      return
    }

    setActiveButton(false)

    logIn({ email, password })
      .then((user) => {
        dispatch(saveUser(user))
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/', { replace: true })
        setActiveButton(true)
      })
      .catch((error) => {
        setActiveButton(true)
        setErrorMessage(error.message)
      })
  }

  const handleRegister = async () => {
    if (!setUserName) {
      setErrorMessage('Введите имя пользователя')
      return
    }
    if (!email) {
      setErrorMessage('Введите email')
      return
    }
    if (!password) {
      setErrorMessage('Введите пароль')
      return
    }
    if (password !== repeatPassword) {
      setErrorMessage('Пароли не совпадают')
      return
    }

    setActiveButton(false)

    register({ email, password, userName })
      .then(() => {
        handleLogin({ email, password })
        setLoginMode(true)
      })
      .catch((error) => {
        setActiveButton(true)
        setErrorMessage(error.message)
      })
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setErrorMessage(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login" onClick={() => setLoginMode(true)}>
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {errorMessage && <S.Error>{errorMessage}</S.Error>}
            <S.Buttons>
              {isActiveButton ? (
                <S.PrimaryButton
                  onClick={() => handleLogin({ email, password })}
                >
                  Войти
                </S.PrimaryButton>
              ) : (
                <S.PrimaryButton disabled>Выполняется вход</S.PrimaryButton>
              )}

              <Link to="/register">
                <S.SecondaryButton onClick={() => setLoginMode(false)}>
                  Зарегистрироваться
                </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Имя пользователя"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value)
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {errorMessage && <S.Error>{errorMessage}</S.Error>}
            <S.Buttons>
              {isActiveButton ? (
                <S.PrimaryButton onClick={handleRegister}>
                  Зарегистрироваться
                </S.PrimaryButton>
              ) : (
                <S.PrimaryButton disabled>
                  Выполняется регистрация
                </S.PrimaryButton>
              )}

              <Link to="/login">
                <S.SecondaryButton
                  to="/login"
                  onClick={() => setLoginMode(true)}
                >
                  Войти
                </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
