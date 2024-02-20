import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './AudioPlayer.styled'
import {
  addCurrentTrack,
  getCurrentTrackSelector,
  getCurrentPlaylistSelector,
  shuffleCurrentPlaylist,
  getIsPlayingSelector,
  setIsPlaying,
  getIsShuffleSelector,
} from '../../../store/tracksSlice'

function BarPlayer() {
  const [isRepeat, setIsRepeat] = useState(false)
  const isShuffle = useSelector(getIsShuffleSelector)
  const audioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [fullPlayback, setFullPlayback] = useState(false)
  const [trackUploaded, setTrackUploaded] = useState(false)

  const currentTrack = useSelector(getCurrentTrackSelector)

  const tracks = useSelector(getCurrentPlaylistSelector)

  const isPlaying = useSelector(getIsPlayingSelector)

  const dispatch = useDispatch()

  const handleStart = () => {
    audioRef.current.play()
    dispatch(setIsPlaying(true))
    setFullPlayback(false)
  }

  const handleStop = () => {
    audioRef.current.pause()
    dispatch(setIsPlaying(false))
  }

  const changeCurrentTime = (newCurrentTime) => {
    audioRef.current.currentTime = newCurrentTime
  }

  const changeLevelVolume = (newLevelVolume) => {
    audioRef.current.volume = newLevelVolume
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  // Функция смены трека
  const switchTrack = (step) => {
    const indexCurrentTrack = tracks.indexOf(currentTrack)

    if (step === 1 && indexCurrentTrack < tracks.length - 1) {
      dispatch(addCurrentTrack(tracks[indexCurrentTrack + step]))
      return
    }

    if (step === -1 && currentTime > 5) {
      changeCurrentTime(0)
      return
    }

    if (step === -1 && indexCurrentTrack > 0) {
      dispatch(addCurrentTrack(tracks[indexCurrentTrack + step]))
    }
  }

  const toggleVolume = () => {
    if (audioRef.current.volume === 0) {
      changeLevelVolume(0.5)
    } else changeLevelVolume(0)
  }

  const handleRepeat = () => {
    setIsRepeat(!isRepeat)
    audioRef.current.loop = !isRepeat
  }

  const handleShuffle = () => {
    dispatch(shuffleCurrentPlaylist(!isShuffle))
  }

  useEffect(() => {
    setFullPlayback(false)

    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current.currentTime)
      if (audioRef.current.currentTime === audioRef.current.duration) {
        setIsPlaying(false)
        setFullPlayback(true)
        setCurrentTime(0)
        switchTrack(1)
      }
    }

    handleStart()

    audioRef.current.addEventListener(
      'loadedmetadata',
      () => {
        setDuration(Math.round(audioRef.current.duration))
        if (audioRef.current) setTrackUploaded(true)
      },
      { once: true },
    )

    audioRef.current.addEventListener('timeupdate', updateCurrentTime)

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateCurrentTime)
    }
  }, [currentTrack])

  return (
    <S.Bar>
      <audio
        ref={audioRef}
        controls={false}
        src={`${currentTrack?.track_file}`}
      >
        <track kind="captions" />
      </audio>
      <S.BoxTrackTime>
        <S.TrackTimeText>
          {Math.floor(currentTime / 60)}:
          {Math.floor(currentTime % 60) < 10 ? 0 : ''}
          {Math.floor(currentTime % 60)}
        </S.TrackTimeText>
        <S.TrackTimeText>
          /{Math.floor(duration / 60)}:{Math.floor(duration % 60) < 10 ? 0 : ''}
          {Math.floor(duration % 60)}
        </S.TrackTimeText>
      </S.BoxTrackTime>
      <S.BarContent>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={duration}
          value={fullPlayback ? 0 : currentTime}
          step={0.01}
          onChange={(event) => {
            changeCurrentTime(event.target.value)
          }}
          $color="#8a29f1"
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayersControls>
              <S.PlayerBtnPrev onClick={() => switchTrack(-1)}>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={togglePlay}>
                <S.PlayerBtnPlaySvg alt="play">
                  <use
                    xlinkHref={`/img/icon/sprite.svg#icon-${
                      isPlaying ? 'pause' : 'play'
                    }`}
                  />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext onClick={() => switchTrack(1)}>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={handleRepeat}>
                <S.PlayerBtnRepeatSvg alt="repeat" $isRepeat={isRepeat}>
                  <use
                    xlinkHref={`/img/icon/sprite.svg#icon-repeat${
                      isRepeat ? '-active' : ''
                    }`}
                  />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle onClick={handleShuffle}>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use
                    xlinkHref={`/img/icon/sprite.svg#icon-shuffle${
                      isShuffle ? '-active' : ''
                    }`}
                  />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayersControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    {currentTrack.name}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    {currentTrack.author}
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlaySvg display="none" alt="like">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  </S.TrackPlaySvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg display="none" alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarPlayerBlock>
            <S.VolumeContent>
              <S.VolumeImg onClick={toggleVolume}>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImg>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  type="range"
                  min={0}
                  max={1}
                  value={trackUploaded ? audioRef.current.volume : 0.05}
                  step={0.0001}
                  onChange={(event) => {
                    changeLevelVolume(event.target.value)
                  }}
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarPlayerBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default BarPlayer
