import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router';
import LaravelApi from '../API/LaravelApi';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { selectNumber } from '../../dataSlice';


function QuizPage({}) {
    const [video, setVideo] = useState([]);
    const [categories, setCategories] = useState([]);
    const Id = useSelector(selectNumber);
    
    useEffect(() => {
        LaravelApi.get(`/displays/${Id}`).then((res) => {
            setVideo(res.data);
        });
    },[]);

    useEffect(() => {
        LaravelApi.get(`/categories/${Id}`).then((res) => {
            console.log(res.data);
            setCategories(res.data);
        });
    },[]);

    return (
        <QuizPageContainer>
            <CategoryContainer>
              <p style={{backgroundColor:'skyblue', borderRadius:50,padding:8 }}>N5</p>
              {categories && categories.map((category)=> (
                  <p classname="button" key={category.id}>{category.name}</p>
              ))}
            </CategoryContainer>
            <h1>{video.title}</h1>
            <VideoContainer>
              <img src={video.thumbnail} alt="../"/>
              <DescriptionQuizContainer>
                  <h3>{video.description}</h3>
                  <p>Quiz number: <span>22</span></p>
                  <p>Listening: <span>10</span></p>
                  <p>Vacabulary: <span>12</span></p>
                  <Button
                    component={Link}
                    // to={`/quiz=${Id}`}
                    to="/quiz=1"
                    variant="contained"
                    color="primary"
                    replace>
                    Start this lesson
                 </Button>
                  <Button
                    component={Link}
                    // to={`/quiz=${Id}`}
                    to="/"
                    variant="contained"
                    color="secondary"
                    replace>
                    Back to Home
                 </Button>
                </DescriptionQuizContainer>
            </VideoContainer>
        </QuizPageContainer>
    )
}

export default QuizPage

const QuizPageContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
text-align: center;
img{
    width: 496px;
    height: 299px;
    object-fit: cover;
    border-radius: 32px;
}
`;

const CategoryContainer = styled.div`
  margin-top: 100px;
  height: 70px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  p {
      padding: 6px;
      cursor: pointer;
  }

  p.button{
      margin-left:14px;
      color: gray;
      font-weight: bold;
      background-color: transparent;
      border: 1px solid black;
      border-radius: 40px;
  }
`;

const VideoContainer = styled.div`
   max-width: 1050px;
   width: 100%;
   text-align: center;
   align-items: center;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   margin-top: 50px;
   margin-bottom: 100px;

   img {
       margin-right:40px;
       flex: 0.5;
   }
`;

const DescriptionQuizContainer = styled.div`
  flex:0.5;
  width: 80%;
  align-items: center;
  text-align: center;

  h3 {
      border-radius: 30px;
      padding: 30px;
      background-color:  #85b37d34;
      width: 100%;
      margin: 0;
  }

  p {
      background-color: white;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 30px;
      padding-right: 30px;
      border-radius: 10px;
      box-shadow: 1px 1px 1px gray;
      margin-bottom: 40px;
      height: 40px;
      letter-spacing: 3px;
      flex-grow: 1;
  }

  span {
    color: skyblue;
  }
`;

