import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import GlobalStyle from './GlobalStyle.styles'
import AppRoutes from './routes'
import getTracks from './API/api'
import AudioPlayer from './components/Main/AudioPlayer/AudioPlayer'


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

  const [loadingPage, setLoadingPage] = useState(true)
  const [tracks, setTracks] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
    getTracks()
      .then((data) => {
        setTracks(data)
        setLoadingPage(!loadingPage)
           })
      .catch((error) => {
        setTracks([{name: `ОШИБКА СЕРВЕРА : ${error.message}`,
        author:`Повторите запрос позже`,
        duration_in_seconds: null}])
        setLoadingPage(!loadingPage)
      })
  }, [])

  return (
    <>
      <GlobalStyle />
      <AudioPlayer currentTrack={currentTrack} />
      <AppRoutes
        loadingPage={loadingPage}
        tracks={tracks}
        handleSelectionTrackButtonClick={setCurrentTrack}
        handleLoginButtonClick={handleLoginButtonClick}
      />
    </>
  )
}

export default App
