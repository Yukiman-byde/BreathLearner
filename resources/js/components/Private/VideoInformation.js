import React,{useEffect} from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { postRequest, postRequestAsync, selectVideoData, setVideoData } from '../../videoSlice';
import axios from 'axios';
import LaravelApi from '../API/LaravelApi';

function VideoInformation({video, info, url}) {
    let thumbnailURL = `https://i.ytimg.com/vi/${video.id.videoId}/mqdefault.jpg`;
   const dispatch = useDispatch()
   const element = useSelector(selectVideoData);
   const elements = {
       videoURL: element.videoURL,
       title: element.title,
       description: element.description,
       thumbnail: thumbnailURL,
   }
   const sendVideo = () => {
      dispatch(postRequest({
          videoURL: url,
          title: info.title,
          description: info.description,
          thumbnail : thumbnailURL,
      }));
   }

   const asyncHandle = () => {
       LaravelApi.post('contents',elements).then((res) => {
          console.log(res);
       });
   }

    useEffect(() => {
      document.getElementById("image").src = `https://i.ytimg.com/vi/${video.id.videoId}/default.jpg`
    },[info])
    return (
        <div>
            <InformationContainer>
                <h3>サムネイル</h3>
                <img id="image" style={{width: 200,height: 200, marginLeft:30}}/>
                    <FormControl >
                        <InputLabel htmlFor="my-input">タイトル</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text"  value={info.title}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">デスクリプション</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" value={info.description}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">URL</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" value={url}/>
                    </FormControl>
                    <ConfirmIdContainer>

                    </ConfirmIdContainer>
                <Button onClick={sendVideo}>決定</Button>
                <Button onClick={asyncHandle}>通信</Button>
             </InformationContainer>
        </div>
    )
}

export default VideoInformation;
const InformationContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   .MuiFormControl-root {
     margin-top: 30px;
   }
`;

const ConfirmIdContainer = styled.div`
`;
