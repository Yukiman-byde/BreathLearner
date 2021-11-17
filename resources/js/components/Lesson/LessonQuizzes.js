import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import LaravelApi from '../API/LaravelApi';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function LessonQuizzes({quizData, open}){
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
      setValue(e.target.value);
  }
  
  useEffect(()=>{
      
  },[open])
  
    return(
        <LessonContainer>
            <FormControl component="fieldset">
              <FormLabel component="legend" style={{fontSize: 36, textDecoration: 'underline', textDecorationColor: 'skyblue'}}>{quizData.question}</FormLabel>
              <RadioGroup value={value} onChange={handleChange}>
                <FormControlLabel value="1" control={<Radio />} label={quizData.choice1} />
                <FormControlLabel value="2" control={<Radio />} label={quizData.choice2} />
                <FormControlLabel value="3" control={<Radio />} label={quizData.choice3} />
              </RadioGroup>
            </FormControl>
            {open && <h3>Answer is {quizData.answer}</h3>}
        </LessonContainer>
        );
}

export default LessonQuizzes;

const LessonContainer = styled.div`

`;