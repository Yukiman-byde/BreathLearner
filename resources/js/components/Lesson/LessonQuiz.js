import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core';
import LaravelApi from '../API/LaravelApi';
import LessonQuizzes from './LessonQuizzes';

function LessonQuiz() {
    const [quizzes, setQuizzes] = useState([]);
    const [open, setOpen] = useState(false);
    let change = open?('もう一度とく'):('答えを見る');
    
    const handleOpen = () =>{
        setOpen(!open);
    }
    
    useEffect(() => {
        LaravelApi.get('fetchquestion').then((response)=> {
            console.log(response.data);
           setQuizzes(response.data);
        });
    },[]);


    return (
        <LessonQuizContainer>
            {quizzes.map((quiz) => (
             <LessonQuizzes quizData={quiz} open={open}/>
            ))}
            <Button
            variant={'contained'}
            onClick={handleOpen}
            id="btn"
            >{change}</Button>
        </LessonQuizContainer>
    )
}

export default LessonQuiz;

const LessonQuizContainer = styled.div`
`;



