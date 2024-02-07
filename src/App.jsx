import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GlobalStyle from './GlobalStyle.styles'
import AppRoutes from './routes'
import AudioPlayer from './components/Main/AudioPlayer/AudioPlayer'
import getTracks from './API/api'
import {
  getCurrentTrackSelector,
  updateAllTracks,
  writeTrackError,
} from './store/tracksSlice'

function App() {
  const [loadingPage, setLoadingPage] = useState(true)
  const dispatch = useDispatch()
  const currentTrack = useSelector(getCurrentTrackSelector)

  useEffect(() => {
    getTracks()
      .then((data) => {
        dispatch(updateAllTracks(data))
        setLoadingPage(!loadingPage)
      })
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
        setLoadingPage(!loadingPage)
      })
  }, [])

  return (
    <>
      <GlobalStyle />
      {currentTrack ? <AudioPlayer currentTrack={currentTrack} /> : ''}
      <AppRoutes loadingPage={loadingPage} />
    </>
  )
}

export default App
