import { useState, useRef, useEffect } from 'react'
import * as S from './AudioPlayer.styled'

function BarPlayer({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const [isRepeat, setIsRepeat] = useState(false)
  const audioRef = useRef(null)

  const [currentTime, setCurrentTime] = useState(0)

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  const handleRepeat = () => {
    setIsRepeat(!isRepeat)
    audioRef.current.loop = !isRepeat
  }

  const duration = currentTrack.duration_in_seconds
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current.currentTime)
    }

    handleStart()
    audioRef.current.addEventListener('timeupdate', updateCurrentTime)

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateCurrentTime)
    }
  }, [currentTrack])

  return (
    <S.Bar>
      <audio ref={audioRef} controls src={`${currentTrack.track_file}`}>
        <track kind="captions" />
      </audio>
      <S.BarContent>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={(event) => setCurrentTime(event.target.value)}
          $color="#8a29f1"
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayersControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={togglePlay}>
                <S.PlayerBtnPlaySvg alt="play">
                  <use
                    xlinkHref={`img/icon/sprite.svg#icon-${
                      isPlaying ? 'pause' : 'play'
                    }`}
                  />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={handleRepeat}>
                <S.PlayerBtnRepeatSvg alt="repeat" $isRepeat={isRepeat}>
                  <use
                    xlinkHref={`img/icon/sprite.svg#icon-repeat${
                      isRepeat ? '-active' : ''
                    }`}
                  />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayersControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
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
                  <S.TrackPlaySvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackPlaySvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarPlayerBlock>
            <S.VolumeContent>
              <S.VolumeImg>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImg>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarPlayerBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
export default BarPlayer
