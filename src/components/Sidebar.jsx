import './Sidebar.css'
import Playlist from './Playlist'
import User from './User'

export default function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      {User()}
      <div className="sidebar__block">
        <div className="sidebar__list">
          {Playlist()}
          {Playlist()}
          {Playlist()}
        </div>
      </div>
    </div>
  )
}
