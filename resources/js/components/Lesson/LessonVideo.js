import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import LaravelApi from '../API/LaravelApi';


function LessonVideo() {
    const [videoSrc, setVideoSrc] = useState([]);
     useEffect(() => {
         LaravelApi.get('displays/1').then((response)=> {
            setVideoSrc(response.data.videoURL);
         })
     },[]);

    return (
        <LessonVideoContainer>
            <h1>動画を見て問題に答えよう</h1>
            <iframe title=".../" src={videoSrc} style={{width: 450, height:320,borderRadius:30}}/>
        </LessonVideoContainer>
    )
}

export default LessonVideo;

const LessonVideoContainer = styled.div`
     text-align: center;
     align-items: center;

`;
