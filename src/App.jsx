import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStyle from './GlobalStyle.styles'
import AppRoutes from './routes'
import AudioPlayer from './components/Main/AudioPlayer/AudioPlayer'
import getTracks from './API/api'
import { UserContext } from './components/contexts/user'

function App() {
  const USER = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const handleLoginButtonClick = () => {
    if (localStorage.getItem('user')) {
      localStorage.setItem('user', 'false')
      navigate('/login', { replace: true })
    }
  }

  const [loadingPage, setLoadingPage] = useState(true)
  const [tracks, setTracks] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ])
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
    getTracks()
      .then((data) => {
        setTracks(data)
        setLoadingPage(!loadingPage)
      })
      .catch((error) => {
        setTracks([
          {
            name: `ОШИБКА СЕРВЕРА : ${error.message}`,
            author: `Повторите запрос позже`,
            duration_in_seconds: null,
            id: 1,
          },
        ])
        setLoadingPage(!loadingPage)
      })
  }, [])

  return (
    <>
      <GlobalStyle />
      {currentTrack ? <AudioPlayer currentTrack={currentTrack} /> : ''}
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <UserContext.Provider value={{ user: USER, handleLoginButtonClick }}>
        <AppRoutes
          loadingPage={loadingPage}
          tracks={tracks}
          handleSelectionTrackButtonClick={setCurrentTrack}
        />
      </UserContext.Provider>
    </>
  )
}

export default App
