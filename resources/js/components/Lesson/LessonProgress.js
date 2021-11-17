import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function LessonProgress() {
    return (
        <LessonProgressContainer>
            <progress  value="30"/>
            <Button
            variant={'contained'}
            color="primary"
            id="btn"
            component={Link}
            to="/"
            >決定</Button>
        </LessonProgressContainer>
    )
}

export default LessonProgress;

const LessonProgressContainer = styled.div`
 display: flex;
 justify-content: space-evenly;
 padding-bottom: 45px;
 align-items: center;
 text-align: center;
   progress {
       width: 60%;
   }
`;
