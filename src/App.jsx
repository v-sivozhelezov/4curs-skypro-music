import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GlobalStyle from './GlobalStyle.styles'
import AppRoutes from './routes'
import AudioPlayer from './components/Main/AudioPlayer/AudioPlayer'
import getTracks from './API/api'
import { getCurrentTrackSelector, writeTrackError } from './store/tracksSlice'
import { getUserSelector } from './store/userSlice'

function App() {
  const dispatch = useDispatch()

  const user = useSelector(getUserSelector)
  const currentTrack = useSelector(getCurrentTrackSelector)

  useEffect(() => {
    getTracks()
      .then(() => {})
      .catch((error) => {
        dispatch(
          writeTrackError([
            {
              name: `ОШИБКА СЕРВЕРА : ${error.message}`,
              author: `Повторите запрос позже`,
              duration_in_seconds: null,
              id: 1,
            },
          ]),
        )
      })
  }, [])

  return (
    <>
      <GlobalStyle />
      {user && currentTrack ? <AudioPlayer /> : ''}
      <AppRoutes />
    </>
  )
}

export default App
