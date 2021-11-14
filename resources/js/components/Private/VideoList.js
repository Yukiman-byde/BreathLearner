import React from 'react'
import styled from 'styled-components';

function VideoList({video}) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <VideoListContainer>
      <iframe title=".../" src={videoSrc} width="500px" height="400px" allowFullScreen/>
    </VideoListContainer>
  )
}

export default VideoList;

const VideoListContainer = styled.div`
`;
