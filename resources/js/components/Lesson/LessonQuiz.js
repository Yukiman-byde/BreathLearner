import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core';
import LaravelApi from '../API/LaravelApi';
import {Card, CardActionArea} from '@material-ui/core';



function LessonQuiz() {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        LaravelApi.get('fetchquestion').then((response)=> {
           setQuizzes(response.data);
        });
    },[]);


    return (
        <LessonQuizContainer>
            {quizzes.map((ans) => (
            <p>{ans.question}</p>
            ))}
            <QuizzesContainer>
                {quizzes.map((quiz) => (
                <Card>
                   <CardActionArea>
                    {quiz.choice1}
                   </CardActionArea>
                </Card>
                ))}
            </QuizzesContainer>
            <Button
            variant={'contained'}
            >答えを見る</Button>
        </LessonQuizContainer>
    )
}

export default LessonQuiz;

const LessonQuizContainer = styled.div`
`;

const QuizzesContainer = styled.div`

.MuiCard-root {
    width: 50%;
    height: 50px;
}
`;


