/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-else-if */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './MediaPlayer.styles.';
import ProgressBar from '../ProgressBar/ProgressBar';
import {
  selectArrayTracks,
  selectIsPlaying,
  selectTracks,
  setTrack,
  toggleIsPlaying,
} from '../../redux/slices/tracksSlice';
import {
  selectIsShuffled,
  toggleIsShuffled,
} from '../../redux/slices/switchTracksSlice';
import shuffleTracks from '../../app/shuffleTracks';
import { tracksAPI } from '../../services/GetAccessTokenService';

function MediaPlayer() {
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [randomAllTracks, setRandomAllTracks] = useState([]);
  const dataTrack = useSelector(selectTracks);
  const isShuffled = useSelector(selectIsShuffled);
  const isPlayingTrack = useSelector(selectIsPlaying);
  const definiteArrayTracks = useSelector(selectArrayTracks);
  const [addLikeTrack] = tracksAPI.useAddLikeTrackMutation();
  const [deleteLikeTrack] = tracksAPI.useDeleteLikeTrackMutation();
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const handleToggleTrack = () => {
    if (!isShuffled) {
      setRandomAllTracks(shuffleTracks(definiteArrayTracks));
    } else {
      setRandomAllTracks([]);
    }
    return dispatch(toggleIsShuffled());
  };

  function nextTracks(arrayTracks) {
    const nowTrack = arrayTracks.find(
      (track) => track.track_file === dataTrack.track_file,
    );
    const indexTrackNow = arrayTracks.indexOf(nowTrack);
    if (indexTrackNow < arrayTracks.length - 1) {
      dispatch(setTrack(arrayTracks[indexTrackNow + 1]));
    }
  }
  const handleNextTrack = () => {
    if (!isShuffled) {
      nextTracks(definiteArrayTracks);
    } else {
      nextTracks(randomAllTracks);
    }
  };

  function prevTracks(arrayTracks) {
    const nowTrack = arrayTracks.find(
      (track) => track.track_file === dataTrack.track_file,
    );
    const indexTrackNow = arrayTracks.indexOf(nowTrack);
    if (indexTrackNow > 0) {
      dispatch(setTrack(arrayTracks[indexTrackNow - 1]));
    }
  }

  const handlePrevTrack = () => {
    if (!isShuffled) {
      prevTracks(definiteArrayTracks);
    } else {
      prevTracks(randomAllTracks);
    }
  };

  const handleStartTrack = () => {
    audioRef.current.play();
    dispatch(toggleIsPlaying(true));
  };
  const handlePauseTrack = () => {
    audioRef.current.pause();
    dispatch(toggleIsPlaying(false));
  };
  const changeDuration = () => {
    setDuration(Math.floor(audioRef.current.duration));
    audioRef.current.removeEventListener('loadedmetadata', changeDuration);
  };
  const changeCurrentTime = () => {
    if (audioRef.current === null) {
      setCurrentTime(0);
    } else {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
    }
  };

  useEffect(() => {
    handleStartTrack();
    audioRef.current.addEventListener('loadedmetadata', changeDuration);
    audioRef.current.addEventListener('timeupdate', changeCurrentTime);
    return () => {
      audioRef.current?.removeEventListener('timeupdate', changeCurrentTime);
    };
  }, [dataTrack.track_file]);

  return (
    <>
      <audio
        src={dataTrack.track_file}
        onEnded={handleNextTrack}
        controls
        ref={audioRef}
        loop={isLoop}
        style={{ visibility: 'hidden' }}
      />
      <S.Bar>
        <S.BarContent>
          <ProgressBar
            currentTime={currentTime}
            audioRef={audioRef}
            duration={duration}
            setCurrentTime={setCurrentTime}
          />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayersControls>
                <S.PlayerBtnPrev
                  onClick={() => {
                    if (audioRef.current.currentTime > 5) {
                      audioRef.current.currentTime = 0;
                    } else {
                      handlePrevTrack();
                    }
                  }}
                >
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay>
                  <S.PlayerBtnPlaySvg
                    alt="play"
                    onClick={
                      isPlayingTrack ? handlePauseTrack : handleStartTrack
                    }
                  >
                    {isPlayingTrack ? (
                      <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
                    ) : (
                      <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                    )}
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={handleNextTrack}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.PlayerBtnRepeatSvg
                    alt="repeat"
                    onClick={() => setIsLoop(!isLoop)}
                  >
                    {isLoop ? (
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeatA" />
                    ) : (
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                    )}
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg
                    alt="shuffle"
                    onClick={() => handleToggleTrack()}
                  >
                    {isShuffled ? (
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle-active" />
                    ) : (
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                    )}
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
                      {dataTrack.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {dataTrack.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlaySvg
                      alt="like"
                      onClick={() => addLikeTrack(dataTrack.id)}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-like-active" />
                      {/* {dataTrack?.arrayStaredUser?.find(
                        (user) => user.id === userInfo.id,
                      ) ||
                      dataTrack.isFavorite ||
                      dataTrack?.stared_user?.find(
                        (user) => user.id === userInfo.id,
                      ) ? (
                        <use xlinkHref="/img/icon/sprite.svg#icon-like-active" />
                      ) : (
                        <use xlinkHref="/img/icon/sprite.svg#icon-like-no-active" />
                      )} */}
                    </S.TrackPlaySvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDislikeSvg
                      alt="dislike"
                      onClick={() => deleteLikeTrack(dataTrack.id)}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarPlayerBlock>
              <S.VolumeContent>
                <S.VolumeImg>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                  </S.VolumeSvg>
                </S.VolumeImg>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                    step={0.01}
                    value={volume}
                    max={1}
                    onChange={(event) => {
                      audioRef.current.volume = event.target.value;
                      setVolume(event.target.value);
                    }}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarPlayerBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}

export default MediaPlayer;
