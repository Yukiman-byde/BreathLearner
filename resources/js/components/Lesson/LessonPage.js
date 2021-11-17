import React from 'react';
import styled from 'styled-components';
import LessonProgress from './LessonProgress';
import LessonQuiz from './LessonQuiz';
import LessonVideo from './LessonVideo';

function LessonPage({Id}) {
    return (
    <>
        <LessonPageContainer>
          <LessonEssential>
            <LessonLeft>
                <h1>Left</h1>
                <LessonVideo />
            </LessonLeft>
           <LessonRight>
                <h1>Right</h1>
                <LessonQuiz />
           </LessonRight>
         </LessonEssential>
        </LessonPageContainer>
           <ProgressContainer>
           <h1>center</h1>
                <LessonProgress />
           </ProgressContainer>
     </>
    )
}
export default LessonPage;

const LessonPageContainer = styled.div`

`;

const LessonEssential = styled.div`
     display: flex;
`;

const LessonLeft = styled.div`
     flex: 0.4;
    `;

const LessonRight = styled.div`
     flex: 0.6;
`;

const ProgressContainer = styled.div`
  background-color: #fff;
`;

