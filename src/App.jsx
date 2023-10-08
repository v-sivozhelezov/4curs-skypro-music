import './App.css'
import AudioPlayer from './components/AudioPlayer'
import './components/AudioPlayer.css'
import NavMenu from './components/NavMenu'
import './components/NavMenu.css'
import Tracklist from './components/Tracklist'
import './components/Tracklist.css'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          {NavMenu()}
          {Tracklist()}
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout" />
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item">
                  <a className="sidebar__link" href="/#">
                    <img
                      className="sidebar__img"
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="/#">
                    <img
                      className="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="/#">
                    <img
                      className="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        {AudioPlayer()}
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
