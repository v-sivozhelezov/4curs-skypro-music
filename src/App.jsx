import { useNavigate } from 'react-router-dom'
import GlobalStyle from './GlobalStyle.styles'
import AppRoutes from './routes'

function App() {
  const navigate = useNavigate()

  const handleLoginButtonClick = () => {
    if (localStorage.getItem('token') === 'false') {
      localStorage.setItem('token', 'true')
      navigate('/', { replace: true })
    } else {
      localStorage.setItem('token', 'false')
      navigate('/login', { replace: true })
    }
  }
  return (
    <>
      <GlobalStyle />
      <AppRoutes handleLoginButtonClick={handleLoginButtonClick} />
    </>
  )
}

export default App
