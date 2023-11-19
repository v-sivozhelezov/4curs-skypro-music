import './Filter.css'
import { useState } from 'react'

export default function Filter() {
  const [filter, setUpFilter] = useState(null)

  const toggleFilter = (filterValue) => {
    setUpFilter(filterValue)
    if (filter === filterValue) {
      setUpFilter(false)
    }
    console.log(filter);
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {filter !== 'author' && (
        <div
          className="filter__button button-author _btn-text"
          onClick={() => toggleFilter('author')}
          onKeyDown={() => toggleFilter('author')}
          role="button"
          tabIndex={0}
        >
          исполнителю
        </div>
      )}
      {filter === 'author' && (
        <div>
          <div
            className="filter__button button-author _btn-text filter__button-active"
            onClick={() => toggleFilter('author')}
            onKeyDown={() => toggleFilter('author')}
            role="button"
            tabIndex={0}
          >
            исполнителю
          </div>
          <ul className="filter__list ">
            <li className="filter__item">
              <a href="/#" className="filter__link">
               Nero
              </a>
            </li>
            <li className="filter__item">
              <a href="/#" className="filter__link">
               Dynoro
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
                Outwork
              </a>
            </li>
             <li className="filter__item">
              <a href="../signin.html" className="filter__link">
               Psychopath
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
                AC/DC
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
                AC/DC
              </a>
            </li>
          </ul>
        </div>
      )}

{filter !== 'year' && (
        <div
          className="filter__button button-year _btn-text"
          onClick={() => toggleFilter('year')}
          onKeyDown={() => toggleFilter('year')}
          role="button"
          tabIndex={0}
        >
       году выпуска
        </div>
      )}
      {filter === 'year' && (
        <div>
          <div
            className="filter__button button-year _btn-text filter__button-active"
            onClick={() => toggleFilter('year')}
            onKeyDown={() => toggleFilter('year')}
            role="button"
            tabIndex={0}
          >
            году выпуска
          </div>
          <ul className="filter__list ">
            <li className="filter__item">
              <a href="/#" className="filter__link">
               1980
              </a>
            </li>
            <li className="filter__item">
              <a href="/#" className="filter__link">
              1988
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
               1990
              </a>
            </li>
             <li className="filter__item">
              <a href="../signin.html" className="filter__link">
              1999
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
                2000
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
               2011
              </a>
            </li>
          </ul>
        </div>
      )}
  {filter !== 'genre' && (
        <div
          className="filter__button button-genre _btn-text"
          onClick={() => toggleFilter('genre')}
          onKeyDown={() => toggleFilter('genre')}
          role="button"
          tabIndex={0}
        >
       жанру
        </div>
      )}
      {filter === 'genre' && (
        <div>
          <div
            className="filter__button button-genre _btn-text filter__button-active"
            onClick={() => toggleFilter('genre')}
            onKeyDown={() => toggleFilter('genre')}
            role="button"
            tabIndex={0}
          >
           жанру
          </div>
          <ul className="filter__list ">
            <li className="filter__item">
              <a href="/#" className="filter__link">
               Рок
              </a>
            </li>
            <li className="filter__item">
              <a href="/#" className="filter__link">
              Поп
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
               Классика
              </a>
            </li>
             <li className="filter__item">
              <a href="../signin.html" className="filter__link">
              Хип-хоп
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
                Хеви-металл
              </a>
            </li>
            <li className="filter__item">
              <a href="../signin.html" className="filter__link">
               Реп
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

