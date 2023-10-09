import './App.css'
import NavMenu from './components/NavMenu'
import Tracklist from './components/Tracklist'
import Sidebar from './components/Sidebar'
import AudioPlayer from './components/AudioPlayer'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          {NavMenu()}
          {Tracklist()}
          {Sidebar()}
        </main>
        {AudioPlayer()}
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
