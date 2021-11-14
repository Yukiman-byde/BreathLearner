import React,{useState, useEffect, useRef} from 'react';
 import styled from 'styled-components';
 import {useDispatch, useSelector} from 'react-redux';
 import { Button, TextField} from '@material-ui/core';
import { selectQuizData, setChoice, setQuiz } from '../../QuizSlice';


function Questions() {
    const choice1Ref = useRef(null);
    const choice2Ref = useRef(null);
    const choice3Ref = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector(selectQuizData);
    const quizClick = () => {
       dispatch(setChoice({
          choice1: choice1Ref.current.value,
          choice2: choice2Ref.current.value,
          choice3: choice3Ref.current.value,
       }));
    }

    const clearClick =()=> {
        dispatch(setChoice(''));
    }

    return (
        <>
        <InputContainer>
                <input
                style={{width: '50%', height: 40}}
                ref={choice1Ref}
                type="text"
                placeholder="Choice 1" />
        </InputContainer>
        <InputContainer>
                <input
                style={{width: '50%', height: 40}}
                ref={choice2Ref}
                type="text"
                placeholder="Choice 2" />
        </InputContainer>
        <InputContainer>
                <input
                style={{width: '50%', height: 40}}
                ref={choice3Ref}
                type="text"
                placeholder="Choice 3" />
        </InputContainer>
        <Button onClick={quizClick}>決定</Button>
        <Button onClick={clearClick}>Clear</Button>
        </>
    )
}

export default Questions;

const InputContainer = styled.div`
  margin-bottom: 35px;
  width: 100%;

  .MuiFilledInput-root{
    width: 120px;
  }
`;
