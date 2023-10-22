import './App.css'
import { useEffect, useState } from 'react'
import GlobalStyle from './GlobalStyle.styles'
import MainPage from './pages/MainPage'
import tracks from './components/data/tracks'

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
      <MainPage tracks={tracks} loadingPage={loadingPage} />
    </>
  )
}

export default App
