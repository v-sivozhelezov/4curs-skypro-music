import styled, { css } from 'styled-components'

const PlaylistTitleCol = css`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`

export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const Col01 = styled.div`
  width: 447px;
  ${PlaylistTitleCol}
`
export const Col02 = styled.div`
  width: 321px;
  ${PlaylistTitleCol}
`
export const Col03 = styled.div`
  width: 245px;
  ${PlaylistTitleCol}
`
export const Col04 = styled.div`
  width: 60px;
  text-align: end;
  ${PlaylistTitleCol}
`

export const PlaylistImg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 55vh;
  padding-right: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(145, 144, 143);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 20px;
    border: 3px solid rgb(145, 144, 143);
  }
`

export const Playlist = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
  height: 51px;
`

export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const TrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`

export const TrackTitleImg = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
  position: relative;
`

export const PlayingDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  left: 36%;
`

export const PlayingDotActive = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  animation: bubble_out 0.6s ease-in-out infinite both;
  left: 36%;
  @keyframes bubble_out {
    0%,
    to {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
  }
`

export const TrackImg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackNameLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`

export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`

export const TrackAlbum = styled.div`
  width: 245px;
`

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`

export const TrackTimeImg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;
`

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`

export const Skeleton = styled.div`
  display: block;
  background-color: #afacac30;
  border-radius: 3px;
  height: 100%;
  width: 100%;
  padding: 5px 20px 5px 20px;
`
