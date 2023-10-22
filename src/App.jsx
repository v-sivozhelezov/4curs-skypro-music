import { useEffect, useState } from 'react'
import GlobalStyle from './GlobalStyle.styles'
// import MainPage from './pages/MainPage'
// import tracks from './components/data/tracks'
import AppRoutes from './routes'

function App() {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(!loadingPage)
    }, 5000)
  }, [])

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      {/* <MainPage tracks={tracks} loadingPage={loadingPage} /> */}
    </>
  )
}

export default App
