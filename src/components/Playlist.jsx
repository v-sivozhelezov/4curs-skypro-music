import './Playlist.css'
import Skeleton from './Skeleton'

export default function Playlist(loadingPage) {
  return (
    <div className="sidebar__item">
       {loadingPage ? (
        Skeleton()
      ) : (
      <a className="sidebar__link" href="/#">
        <img
          className="sidebar__img"
          src="img/playlist01.png"
          alt="day's playlist"
        />
      </a>)}
    </div>
  )
}
