import './App.css'
import { useEffect, useState } from 'react'
import NavMenu from './components/NavMenu'
import Tracklist from './components/Tracklist'
import Sidebar from './components/Sidebar'
import AudioPlayer from './components/AudioPlayer'


function App() {
  const [loadingPage, setLoadingPage] = useState(true)

  console.log(loadingPage)
  
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(!loadingPage)
    }, 5000)
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          {NavMenu()}
          {Tracklist(loadingPage)}
          {Sidebar()}
        </main>
        {AudioPlayer()}
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
