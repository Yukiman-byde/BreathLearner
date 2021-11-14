import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FormControl, InputLabel, Input, Slider, Box, Button } from '@material-ui/core';
import VideoDetail from './VideoDetail';
import VideoInformation from './VideoInformation';
import VideoList from './VideoList';


function CreateVideo(){
  const [value, setValue] = useState('');
  const [submit, setSubmit] = useState('');
  const [video, setVideo] = useState();
  const [info, setInfo] = useState('');
  const [url, setUrl] = useState();
  const [time, setTime] = useState([1, 100]);
  const [Id, setId] = useState();
  const API_KEY = 'AIzaSyCZCETLQzvLLsV2GfMBv46W8k9ECLLxxss';

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubmit(value);
  }

  const handleChange = (event, newValue)=> {
     setTime(newValue);
  }

  useEffect(() => {
    let url = `https://www.youtube.com/embed/${Id}?start=${time[0]}&end=${time[1]}`
    setUrl(url);
  },[handleChange]);

useEffect(() =>{
        VideoDetail.get('/search', {
            params: {
            part: 'snippet',
            maxResults: 1,
            key: API_KEY,
            regionCode: 'JP',
            q: submit,
        }
        }).then((res) => {
            setVideo(res.data.items[0]);
            setId(res.data.items[0].id.videoId);
            setInfo(res.data.items[0].snippet);
        }).catch((error) => {
            console.log(error.message);
        })
        setSubmit('');
        },[submit]);
    return(
        <>
        <AppContainer>
                    <AppLeft>
                        <PostContainer>
                          <FormControl id="send">
                              <InputLabel htmlFor="my-input">名前入力</InputLabel>
                              <Input value={value} onChange={(e) => setValue(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
                          </FormControl>
                              <Button onClick={handleSubmit} form="send">送信</Button>
                        </PostContainer>
                      {video && <VideoInformation video={video} info={info} url={url}/>}
                    </AppLeft>
                    <AppRight>
                      {video &&  <VideoList video={video}/>}
                    </AppRight>
                </AppContainer>
                <AppSlider>
                    <Box sx={{ width: 1000 }}>
                      <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={time}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={1000}
                      />
                  </Box>
                </AppSlider>
                <Button
                    variant="contained"
                    component={Link}
                    to="/categories"
                >Go to Categories
                </Button>
                 <Button variant="contained">
                 <a style={{textDecoration: 'none'}} href="https://4499b2ebd7f44382a889eba4ee383e77.vfs.cloud9.ap-northeast-1.amazonaws.com/display#/">
                        Go back to user page</a>
                </Button>
        </>
        );
}

export default CreateVideo;

const AppContainer = styled.div`
  padding: 50px;
  margin-top: 100px;
  display: flex;
  width: 100%;
`;

const AppLeft = styled.div`
  width: 100%;
  flex:0.6;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  .MuiInput-root {
    margin-top: 40px;
  }

`;

const AppRight = styled.div`
  margin-left: 50px;
  flex:0.4;
`;

const AppSlider = styled.div`
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 100px;
`;

