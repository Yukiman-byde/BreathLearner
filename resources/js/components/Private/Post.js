import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FormControl, InputLabel, Input, Slider, Box, Button } from '@material-ui/core';
import Categories from './Categories';
import Quizzes from './Quizzes';
import CreateVideo from './CreateVideo';
import Trnscription from './Trnscription';
import VideoDetail from './VideoDetail';


function Post() {
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
    return (
     <Router>
         <PostTitle><h1>Post</h1></PostTitle>
          <Routes>
               <Route exact path="/" element={<CreateVideo />}/>
               <Route exact path="/categories" element={<Categories />}/> 
               <Route path="/quizzes" element={<Quizzes />}/>
               <Route path="/transcriptions" element={<Trnscription />}/>
           </Routes>
      </Router>
    )
}

export default Post;

const PostTitle =styled.div`
align-items:center;
text-align: center;
border-bottom: 2px solid black;
`;

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
