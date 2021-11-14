import React,{ useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormControl, FilledInput,Radio, RadioGroup,FormControlLabel } from '@material-ui/core';
import Questions from './Questions';
import { selectQuizData, setChoice, setQuiz } from '../../QuizSlice';
import LaravelApi from '../API/LaravelApi';
import {Link} from 'react-router-dom';

function Quizzes() {
    const [shows, setShows] = useState([]);
    const [audio, setAudio] = useState(null);
    const [answer, setAnswer] = useState(0);
    const [question, setQuestion] = useState(null);
    const questionRef = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector(selectQuizData);

    const clickAnswer = (e) => {
        setAnswer(e.target.value);
        setQuestion(questionRef.current.value);
    }

    const showClick = (show) => {
       let id = String(show.id);
       setAudio(id);
    }

    const clearClick = () => {
        dispatch(setQuiz(''));
    }

    const quizClick = () => {
        dispatch(setQuiz({
             display_id: audio,
             question: question,
             answer: answer,
             choice1: state.choice1,
             choice2: state.choice2,
             choice3: state.choice3,
        }));
    }

    const postAsyncClick = () => {
        LaravelApi.post('question',state).then((response) => {
            console.log(response.data);
        })
    }

    useEffect(() => {
        LaravelApi.get('shows').then((response)=>{
            setShows(response.data);
        })
    },[])

    return (
        <>
        <ShowsContainer>
        {shows.map((show)=>(
            <Button onClick={()=>showClick(show)} key={show.id}>{show.title}</Button>
        ))}
                </ShowsContainer>
                <QuizzesContainer>
                    <FormControl>
                    <input
                    style={{width: 650, height: 100}}
                    placeholder="Type a question here"
                    ref={questionRef}
                    />
                    <RadioGroup onClick={clickAnswer} row aria-label="Answers" name="row-radio-buttons-group">
                        <FormControlLabel index={1} value="1" control={<Radio />} label="1"/>
                        <FormControlLabel index={2} value="2" control={<Radio />} label="2" />
                        <FormControlLabel index={3} value="3" control={<Radio />} label="3" />
                    </RadioGroup>
                    <Button style={{height: 50, width: 100}} onClick={quizClick}>クイズ本文と答え</Button>
                    <Button style={{height: 50, width: 100}} onClick={clearClick}>Clear</Button>
                    </FormControl>
                    <QuestionsContainer>
                        <p>選択肢を先に作ってください</p>
                        <Questions />
                    </QuestionsContainer>
                    <Button onClick={postAsyncClick}>通信</Button>
                    <Button
                       variant="contained"
                       color="primary"
                       component={Link}
                       to="/transcriptions"
                       >
                         <p>go to transcriptions</p>
                    </Button>
                </QuizzesContainer>
        </>
    )
}

export default Quizzes;
const ShowsContainer = styled.div`
  background-color: whitesmoke;
  display: flex;
  width: 100%;

  .MuiButton-root {
      border: 1px solid gray;
  }
`;

const QuizzesContainer = styled.div`
display: block;
  padding: 64px;
  display: flex;

.MuiFilledInput-root	{
  width: 500px;
}
`;

const QuestionsContainer = styled.div`
    display: block;
    margin-left: 200px;
    width: 500px;
`;

