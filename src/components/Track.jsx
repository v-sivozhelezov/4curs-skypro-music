import './Track.css'
import Skeleton from './Skeleton'

export default function Track(loadingPage) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            {loadingPage ? (
              Skeleton()
            ) : (
              <a className="track__title-link" href="http://">
                Guilt <span className="track__title-span" />
              </a>
            )}
          </div>
        </div>
        <div className="track__author">
          {' '}
          {loadingPage ? (
            Skeleton()
          ) : (
            <a className="track__author-link" href="http://">
              Nero
            </a>
          )}
        </div>
        <div className="track__album">
          {loadingPage ? (
            Skeleton()
          ) : (
            <a className="track__album-link" href="http://">
              Welcome Reality
            </a>
          )}
        </div>
        <div className="track__time">
        {loadingPage ? (
            Skeleton()
          ) : (
          <div>
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className="track__time-text">4:44</span>
          </div>)}
        </div>
        <div />
      </div>
    </div>
  )
}
